import React from "react";
import { removeFromCart, incrementQuantity, decrementQuantity } from "../Store/cartSlice";
import { useDispatch } from "react-redux";

function CartItem({ item }) {

const dispatch = useDispatch()

  return (
    <div className="cartItem flex flex-col justify-between items-center md:grid md:grid-cols-5 mx-7 mb-5 gap-4 md:gap-7 shadow-lg rounded-3xl">
      <img className="w-[150px] h-[200px]" src={item.image} alt="" />
      <h1 className="font-bold col-span-2">{item.name}</h1>
      <div className="w-full flex flex-row justify-around items-center ">
        <h3 className="text-red-500 font-semibold">$ {item.new_price}</h3>
        <button className="text-2xl border-2 hover:border-red-500 px-2 hover:bg-red-500 hover:text-white" onClick={() => dispatch(decrementQuantity(item))}>-</button>
        <h3 className=""> {item.itemQuantity}</h3>
        <button className="text-2xl border-2 hover:border-red-500 px-2 hover:bg-red-500 hover:text-white" onClick={() => dispatch(incrementQuantity(item))}>+</button>
        <h3 className="text-red-500 font-bold">
          $ {item.new_price * item.itemQuantity}
        </h3>
      </div>

      <div>
        <button className="bg-white py-2 px-6 text-red-500 border-2 border-red-500 rounded-3xl hover:bg-red-500 hover:text-white transition-all ease-in-out duration-400 mb-4" onClick={() => dispatch(removeFromCart(item))}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
