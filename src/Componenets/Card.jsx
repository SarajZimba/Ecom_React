import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({item}) => {
    return (
        <>

            <div className="col" >
                <div className="card">
                    <img style={{ height: '200px', objectFit: 'cover' }} src={item.images[0]} className="card-img-top" alt={item.title} />
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text text-truncate" >{item.description}</p>
                        <p className="card-text">${item.price}</p>
                        <Link to={`/product/${item.id}`} className='btn btn-warning w-100'>View Details</Link>
                    </div>
                </div>

            </div>

        </>

    )
}

export default Card