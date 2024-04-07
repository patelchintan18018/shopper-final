import React from "react";
import hero_image from "../Assets/hero_image.png";
import {Link} from 'react-scroll';

function Hero() {
  

  return (
    <>
      <div id="heroID" className="hero h-full grid grid-cols-1 md:grid-cols-2  items-center bg-gradient-to-b from-violet-200 to-white-500 p-5 md:px-10">
        <div className="hero-left text-center   text-xl sm:text-2xl">
          <h3 className="mb-8 font-semibold">NEW ARRIVALS ONLY</h3>
          <h1 className="mb-3 font-bold text-4xl sm:text-5xl md:text-6xl">
            
              <p className="mb-3 font-head">New</p>
            
            <p className="mb-3 font-head ">collections</p>
            <p className="mb-8 font-head ">for everyone</p>
          </h1>
          <div className="latest-collection group text-sm md:text-xl">
            <Link to="NewCollections" smooth={true} offset={-50} className=" bg-red-500 py-2 px-8 border-2 border-red-500 rounded-3xl text-white my-5  transition-all duration-400 ease-in-out  hover:bg-white hover:text-black ">
              Latest Collection
              <i class="fa-solid fa-arrow-right transition-all duration-400 ease-in ml-3 group-hover:ml-5"></i>
            </Link>
          </div>
        </div>
        <div className="hidden md:block hero-right flex items-center justify-center ">
          <img src={hero_image} alt="" className="w-[85%] p-10"/>
        </div>
      </div>
    </>
  );
}

export default Hero;
