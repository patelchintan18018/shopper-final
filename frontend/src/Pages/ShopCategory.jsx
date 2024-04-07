import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Item from "../Components/Item";
import { getAllProducts } from "../Store/productSlice";

function ShopCategory({ category, banner }) {
  const { all_products }  = useSelector((state) => state.all_products);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getAllProducts());
  },[])

  return (
    <>
      <div className="categoryBanner">
        <img src={banner} alt="" />
      </div>
      <div className="shopcategory-indexSort flex flex-rows justify-between items-center mt-10 px-2 md:px-10  text-sm lg:text-sm">
        <p>
          <span className="font-bold">Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort py-1 md:py-3 px-3 md:px-7 flex justify-center items-center border-2 rounded-3xl">
          {" "}
          Sort by <i className="fa-solid fa-chevron-down ml-2"></i>
        </div>
      </div>
      <div className="grid grid-rows md:grid-cols-2 lg:grid-cols-4 gap-7 my-3 p-10">
        {all_products.map((item, i) => {
          if (item.category === category) {
            return <Item key={item.id} item={item} />;
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore flex justify-center items-center my-7 py-3 px-6 border-2 rounded-3xl bg-black text-white w-[200px] m-auto hover:bg-gray-300 hover:text-black hover:border-black  transition-all ease-in-out duration-500">
        <p>Explore More</p>
      </div>
    </>
  );
}

export default ShopCategory;
