import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Store/cartSlice";

function ProductDetails({ product }) {

  const dispatch = useDispatch()

  return (
   
    

    <div className="productDeatils flex flex-col lg:grid lg:grid-cols-2 m-5 md:m-7 justify-center items-center gap-5">
      <div className="productImages flex flex-col-reverse lg:flex-row justify-center items-center gap-2">
        <div className="productImages-small flex flex-row md:flex-row lg:flex-col justify-center items-center gap-2">
          <div className="flex flex-col md:flex-row lg:flex-col justify-center items-center gap-2">
            <img
              src={product.image}
              alt="Product image"
              className="w-[120px] h-[120px]"
            />
            <img
              src={product.image}
              alt="Product image"
              className="w-[120px] h-[120px]"
            />
          </div>
          <div className="flex flex-col md:flex-row lg:flex-col justify-center items-center gap-2">
            <img
              src={product.image}
              alt="Product image"
              className="w-[120px] h-[120px]"
            />
            <img
              src={product.image}
              alt="Product image"
              className="w-[120px] h-[120px]"
            />
          </div>
        </div>
        <div className="productImages-big">
          <img
            src={product.image}
            alt="Product image"
            className="w-full h-full md:m-4"
          />
        </div>
      </div>
      <div className="product-info text-left">
        <div className="product-desc">
          <h1 className="text-xl md:text-3xl font-bold mb-5">{product.name}</h1>
          
          <div className="product-prices flex mb-5">
          <h1 className="font-bold mr-2 text-red-500">${product.new_price}</h1>
          <h1 className="line-through mx-2">${product.old_price}</h1>
          </div>
          
        </div>
        <div className="product-size">
          <h1 className="font-bold text-2xl mb-3">Select Size</h1>
          <div className="size-option flex gap-4 mb-5">
            <div className="bg-gray-100 px-2 md:px-4 md:py-2 border-2 hover:bg-white hover:text-red-500 hover:border-red-500">S</div>
            <div className="bg-gray-100 px-2 md:px-4 md:py-2 border-2 hover:bg-white hover:text-red-500 hover:border-red-500">M</div>
            <div className="bg-gray-100 px-2 md:px-4 md:py-2 border-2 hover:bg-white hover:text-red-500 hover:border-red-500">L</div>
            <div className="bg-gray-100 px-2 md:px-4 md:py-2 border-2 hover:bg-white hover:text-red-500 hover:border-red-500">XL</div>
            <div className="bg-gray-100 px-2 md:px-4 md:py-2 border-2 hover:bg-white hover:text-red-500 hover:border-red-500">XXL</div>
          </div>
        </div>
        <button className="bg-red-500 py-2 px-6 rounded-3xl mt-3 text-white border-2 border-red-500 hover:text-red-500 hover:bg-white transition-all ease-in-out duration-400" onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
      </div>
      
    </div>
  );
}

export default ProductDetails;
