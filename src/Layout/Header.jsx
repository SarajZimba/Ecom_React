import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
    const {cart_items} = useSelector(store=>store.cartStore)
    const length = cart_items.length
    return (
        <div className='container-fluid bg-dark fs-4'>

            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white position-relative" href="/cart">Cart
                    {
                     length > 0 && <span class="position-absolute top-40 left-50 start-100 translate-middle badge rounded-pill bg-danger">
                        {length}
                       </span>
}
                    </a>
                    
                </li>

            </ul>
        </div>
    )
}

export default Header