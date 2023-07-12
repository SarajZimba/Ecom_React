import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { Link } from 'react-router-dom'
import Card from '../Componenets/Card'

const Home = () => {
  let items = useSelector(store => store.itemStore.items)

  const dispatch = useDispatch()

  const loadData = () => {
    if (items.length == 0) {
      return fetch(`https://dummyjson.com/products`)
        .then(response => response.json())
        .then(data => dispatch({ type: "LOAD_DATA", payload: data.products }))
        .catch(error => console.log(error))
    }
  }

  useEffect(loadData, [])

  return (
    <>
      <div className='container my-5'>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {
            items && items.map(item => {
              return <Card item={item} key={item.id}/>
            })
              
            }

        </div>     
    </div>
      </>
      )
}

      export default Home