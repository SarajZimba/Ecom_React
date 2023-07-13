// import React, { useEffect, useReducer } from 'react'
// import { Link } from 'react-router-dom'


// // const addressReducer = (state, action){

// //   switch(action.type){
// //   case "UPDATE_ADDRESS":
// //       return {...state,
// //         [action.field]: action.value}

// //   default:
// //     return state;
// //       }
// // }

// // const addressReducer = (state, action) => {
// //   switch (action.type) {
// //     case 'UPDATE_ADDRESS':
// //       const newState = {
// //         ...state,
// //         [action.field]: action.value
// //       };
      
// //       return newState;
// //     default:
// //       return state;
// //   }
// // };
// const addressReducer = (state, action) => {
//   switch (action.type) {
//     case 'UPDATE_ADDRESS':
//       return {
//         ...state,
//         [action.field]: action.value
//       };
//     default:
//       return state;
//   }
// };




// const Checkout = () => {

//   const [address, dispatchAddress] = useReducer(addressReducer, {});

//   // const handleInputChange = (e) => {
//   //   const {name, value} = e.target

//   // }
  
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     dispatchAddress({ type: 'UPDATE_ADDRESS', field: name, value });
//   };

//   useEffect(() => {
//     // Display updated address in console
//     console.log('Updated Address:', address);
//   }, [address]);
//   return (
//     <div>
//         <form className="w-50 mx-auto shadow-lg my-5 p-5">
//             <label htmlFor="name">Name</label>
//             <input type="text" className='form-control' id='name' name='name' onChange={handleInputChange}/>
//             <label htmlFor="street">Street</label>
//             <input type="text" className='form-control' id='street' name='street' onChange={handleInputChange}/>
//             <label htmlFor="city">City</label>
//             <input type="text" className='form-control' id='city' name='city' onChange={handleInputChange}/>
//             <label htmlFor="email">Email</label>
//             <input type="text" className='form-control' id='email' name='email' onChange={handleInputChange}/>
//             <label htmlFor="zipcode">Zipcode</label>
//             <input type="text" className='form-control' id='zipcode' name='zipcode' onChange={handleInputChange}/>
//             <label htmlFor="country">Country</label>
//             <input type="text" className='form-control' id='country' name='country' onChange={handleInputChange}/>

//             <Link to={'/paymentsuccess'}><button className="btn btn-warning w-100">Proceed to Payment</button></Link>
//         </form>
//     </div>
//   )
// }

// export default Checkout

import React, { useEffect, useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const addressReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_ADDRESS':
      return {
        ...state,
        [action.field]: action.value
      };
    default:
      return state;
  }
};

const Checkout = () => {
  const [address, dispatchAddress] = useReducer(addressReducer, {});

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    dispatchAddress({ type: 'UPDATE_ADDRESS', field: name, value });
    console.log('Updated Address:', { ...address, [name]: value });
   
  };

  const dispatch = useDispatch()
  const handleShippingSubmit = () => {
    dispatch({type: "SAVE_SHIPPING_INFO", payload :address})
  };
  
  // useEffect(() => {
  //   // Display updated address in console
  //   console.log('Updated Address:', address);
  // }, [address]);

  return (
    <div>
      <form className="w-50 mx-auto shadow-lg my-5 p-5">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control" id="name" name="name" onChange={handleInputChange} />
        <label htmlFor="street">Street</label>
        <input type="text" className="form-control" id="street" name="street" onChange={handleInputChange} />
        <label htmlFor="city">City</label>
        <input type="text" className="form-control" id="city" name="city" onChange={handleInputChange} />
        <label htmlFor="email">Email</label>
        <input type="text" className="form-control" id="email" name="email" onChange={handleInputChange} />
        <label htmlFor="zipcode">Zipcode</label>
        <input type="text" className="form-control" id="zipcode" name="zipcode" onChange={handleInputChange} />
        <label htmlFor="country">Country</label>
        <input type="text" className="form-control" id="country" name="country" onChange={handleInputChange} />

        <Link to={'/paymentsuccess'}>
          <button className="btn btn-warning w-100" onClick={handleShippingSubmit}>Proceed to Payment</button>
        </Link>
      </form>
    </div>
  );
};

export default Checkout;
