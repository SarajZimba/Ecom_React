// import Swal from "sweetalert2"


const initialData = {
    cart_items: []
}

const cartReducer = (state=initialData, action) =>{
    switch(action.type){
        case "ADD_TO_CART":
            // Swal.fire({
            //     title: "Congrats",
            //     text: "Your item has been added to cart.",
            //     icon:'success',
            //     timer: 3000,
            //     showCloseButton: false,
            //     position: "top-end"

            // })



            
            return {cart_items: [...state.cart_items, action.payload]}

        case "REMOVE_ITEM":
            return {cart_items:
                    state.cart_items.filter(item => item.cart_id != action.payload)
                }

        case "UPDATE_ITEM":
            let updated_item = action.payload
            return{
                cart_items:
                state.cart_items.map(item=>  {
                  return  item.cart_id == updated_item.cart_id ? updated_item : item
            })
            }


        default: return state
    }
}

export default cartReducer