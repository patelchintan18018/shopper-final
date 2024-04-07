import React from 'react';
import exclusive_image from '../Assets/exclusive_image.png';
import arrow_icon from "../Assets/arrow.png";

function Offer() {
  return (
    <div className='offer w-5/6 flex flex-col justify-around md:grid md:grid-cols-3 m-auto px-[100px] py-[50px] gap-10 items-center bg-gradient-to-b from-violet-200 to-white-500 text-center my-10'>
        <div className="offer-left text-left font-bold md:col-span-2" >
            <h1 className='text-5xl mb-2 font-head'>Exclusive</h1>
            <h1 className='text-5xl mb-5 font-head'>Offers for you</h1>
            <p className='font-semibold mb-5'>ONLY ON BEST SELLER PRODUCTS</p>
            <div className="latest-collection group ">
            <button className="flex flex-cols justify-center items-center gap-3 bg-red-500 py-2 px-8 border rounded-3xl text-white my-5 font-semibold transition-all duration-400 ease-in-out group-hover:gap-5 text-xs sm:text-sm">
              Latest Collection
              <span>
                <img className="transition-all duration-300 ease-in-out group-hover:text-red-500" src={arrow_icon} alt="" srcset="" />
              </span>
            </button>
          </div>
        </div>
        <div className="offer-right flex justify-center items-center">
            <img className='w-full' src={exclusive_image} alt=""  />
        </div>
    </div>
  )
}

export default Offer