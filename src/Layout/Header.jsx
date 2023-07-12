import React from 'react'

const Header = () => {
    return (
        <div className='container-fluid bg-dark fs-4'>

            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/cart">Cart</a>
                </li>

            </ul>
        </div>
    )
}

export default Header