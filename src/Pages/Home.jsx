import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { Link } from 'react-router-dom'
import Card from '../Componenets/Card'

const Home = () => {
  let items = useSelector(store => store.itemStore.items)

  let [search, setSearch] = useState('')

  let [filteredProduct, setfilteredProduct] = useState([])

  const dispatch = useDispatch()

  const loadData = () => {
    if (items.length == 0) {
      return fetch(`https://dummyjson.com/products`)
        .then(response => response.json())
        .then(data => dispatch({ type: "LOAD_DATA", payload: data.products }))
        .catch(error => console.log(error))

    }
    filterProduct()
  }

  const filterProduct = () =>{
    if(search == ''){
      setfilteredProduct(items)
    }
    else{
    setfilteredProduct(items.filter(item=>item.title.toLowerCase().match(search.toLowerCase())))
  }
}

  useEffect(loadData, [search])

  return (
    <>

      <div className="bg-secondary py-2">
        <input type="search" className='form-control w-50 py-2 mx-auto' onKeyUp={e=>setSearch(e.target.value)}/>
      </div>
      <div className='container my-5'>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {
            filteredProduct && filteredProduct.map(item => {
              return <Card item={item} key={item.id}/>
            })
              
            }

        </div>     
    </div>
      </>
      )
}

      export default Home