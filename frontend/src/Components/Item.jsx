import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../Store/cartSlice";

function Item({ item }) {
  const dispatch = useDispatch();

  const handleAddtoCart = (item) => {
    dispatch(addToCart(item));
  };
  

  return (
    <div className="item-card shadow-lg rounded-3xl">
      <div className="overflow-hidden">
        <NavLink to={`/product/${item.id}`}>
          <img
            className="w-full transition-transform hover:scale-110 duration-500 ease-in-out"
            src={item.image}
            alt=""
            onClick={window.scrollTo(0,0)}
          />
        </NavLink>
      </div>
      <div className="text-left p-6">
        <p className="pb-4"> {item.name}</p>
        <div className="prices-btn pb-3 flex flex-cols sm:flex-rows justify-center items-center gap-4">
          <div className="prices">
            <p className="new-price text-red-500 font-bold">
              ${item.new_price}
            </p>
            <p className="old-price line-through text-gray-500">
              ${item.old_price}
            </p>
          </div>
          <button
            className="ml-auto text-xs sm:text-md py-1 px-3 sm:py-2 sm:px-6 border-2 border-red-500 bg-red-500 rounded-2xl text-white hover:bg-white hover:text-red-500 transition-all duration-500 ease-in-out"
            onClick={() => handleAddtoCart(item)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Item;
