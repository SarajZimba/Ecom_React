import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import Swal from 'sweetalert2'
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
  let { cart_items } = useSelector(store => store.cartStore)
  console.log(cart_items)
  let dispatch = useDispatch()
  const delete_item = cart_id =>e =>{
      Swal.fire({
        title:"Alert",
        text: "Are you sure you want to remove this item from the cart?",
        icon:"question",
        showCancelButton:true,
        cancelButtonColor: "#dd1111"
      })
      .then(result=>{
        if(result.isConfirmed){
          dispatch({type:"REMOVE_ITEM", payload: cart_id})
          toast.warning('Your item has been removed from cart.')
        }
      })
  }

  const decreaseQuantity = item => e => {
    e.preventDefault()
    let new_quantity = --item.quantity
    if(new_quantity <= 0){
      Swal.fire({
        title: "Warning",
        text: "Minimum quantity reached.Do you want to remove this item from the cart?",
        icon: "question",
        showCancelButton: true,
        cancelButtonColor: "#dd1111",
      })
      .then(result=>{
        if(result.isConfirmed){
          dispatch({type:"REMOVE_ITEM", payload: item.cart_id})
          toast.warning('Your item has been removed from cart.')
        }
      })
    }
    else{
      let updated_item = {...item, quantity: new_quantity}
      dispatch({type:"UPDATE_ITEM", payload: updated_item})
      toast.warning("Quantity has been updated")
    }

  }

  const increaseQuantity = item => e => {
    e.preventDefault()
    let new_quantity = ++item.quantity
    if(new_quantity > item.stock){
      Swal.fire("warning", "The item has limited stock")

    }
    else{
      let updated_item = {...item, quantity: new_quantity}
      dispatch({type:"UPDATE_ITEM", payload:updated_item})
      toast.warning("Quantity has been increased")
    }
    
    // if(new_quantity )
  }
  return (
    <>

<ToastContainer position='top-right' theme='colored'/>
      <h4 className="text-center">Cart Items</h4>

      <table className="table w-75 text-center table-bordered table-hover table-striped mx-auto align-middle">
        <thead className='table-dark'>
          <td>S.NO</td>
          <td>Product Image</td>
          <td>Product Name</td>
          <td>Price</td>
          <td>Quantity</td>
          <td>Total price</td>
        </thead>

        <tbody>{
          cart_items.length > 0 && cart_items.map((cart_item, i) => {
            return <tr key={cart_item.cart_id}>
              <td>{i + 1}</td>
              <td>
              {
                cart_item.images &&
              <img src={cart_item.images[0]} alt="" style={{height: '75px'}} />
              }
              </td>
              <td>{cart_item.title}</td>
              <td>{cart_item.price}</td>
              <td>
                <div className="btn-group">
                  <button className='btn btn-warning' onClick={decreaseQuantity(cart_item)} >-</button>
                  <input style={{width:"2.5rem"}} type="text"className=' text-center' value={cart_item.quantity} readOnly/>
                  <button className='btn btn-success' onClick={increaseQuantity(cart_item)}>+</button>
                </div>
              </td>
              
              <td>{cart_item.quantity * cart_item.price}</td>
              <td>
                <button className='btn btn-danger' onClick={delete_item(cart_item.cart_id)}>
                  <i className='bi bi-trash' ></i>
                </button>
              </td>

            </tr>

          })
        }


        </tbody>
      </table>
    </>
  )
}

export default Cart