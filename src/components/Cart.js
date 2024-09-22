import { useDispatch, useSelector } from "react-redux"
import CartItemList from "./CartItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItem = useSelector((store)=>store.cart.items);
    const dispatch = useDispatch();
    const handelClearCart = () => {
      dispatch(clearCart());
    }
  return (
    <div className="text-center m-4 p-4">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="w-6/12 m-auto">
            <button className="p-2 m-2 bg-black text-white rounded-lg" onClick={handelClearCart}>Clear Cart</button>
            {cartItem.length === 0 && (
              <p className="text-lg font-bold">Your cart is empty</p>
            )}
            <CartItemList items={cartItem}/>
        </div>
        
    </div>
  )
}

export default Cart