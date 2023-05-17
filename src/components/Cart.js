import { useSelector, useDispatch } from "react-redux";
import store from "../utils/store";
import { CLEAR_CART, REMOVE_ITEM } from "../utils/cartSlice";


const Cart = () => {
    const cartItems = useSelector(store => store.cart.items)
    const dispatch = useDispatch();

    
    const handelClearCart = (item) => {
        dispatch(CLEAR_CART())
    }

   


    return (

        <div className='w-screen h-auto flex flex-col items-center p-5'>
            {cartItems.map((item) => {
          
               const price =item?.card?.info?.price / 100 ? item?.card?.info?.price / 100 : item?.card?.info?.defaultPrice / 100 
                return (
                    <>
                        <div className="w-3/4 h-auto bg-slate-200 flex justify-between p-5">
                            <h1>{item?.card?.info?.name}</h1>
                            <h1>Rs.{price}.00</h1>
                        </div>

                    </>
                )
            })}
            <div className="flex  w-3/4  p-5">
                <button className='bg-teal-200 p-2 rounded' onClick={() => handelClearCart()}>Clear cart</button>
            </div>
        </div>
    )
}

export default Cart