import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Product from './Pages/Product'
import Checkout from './Pages/Checkout'

const MyRoutes = () => {
  return (
    <>
       <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>} >
                    <Route index element={<Home/>}/>
                    <Route path='cart' element={<Cart/>}/>
                    <Route path='/product/:id' element={<Product/>}/>
                    <Route path='/checkout' element={<Checkout/>}/>
                </Route>
            </Routes>
       </BrowserRouter>
    </>
  )
}

export default MyRoutes