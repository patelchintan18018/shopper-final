import React, { useState , useEffect} from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeTokenFromLS } from "../Store/auth";

function Navbar() {
  const [Open, setOpen] = useState(false);
  const {token,userData} = useSelector((state)=> state.auth);
  const dispatch = useDispatch();
  
  

  const { myBag } = useSelector((state) => state.cart);
  let totalItemQuantity = 0;
  myBag.map((item) => {
    totalItemQuantity += item.itemQuantity;
  });

  return (
    <>
      <div className="flex justify-between items-center p-5 w-full sm:w-[98%] m-auto">
        <div className="logo flex flex-rows justify-center items-center gap-3 sm:text-2xl ">
          <i class="fa-solid fa-shop text-2xl"></i>
          <p className="hidden sm:block font-bold font-head">SHOPPER</p>
        </div>

        <div
          className={`absolute bg-white left-0 w-full md:static md:w-auto ${
            Open ? "top-[95px]" : "top-[-100%]"
          } transition-all duration-500 ease-in`}
        >
          <ul className={`flex flex-col md:flex-row items-center gap-5`}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-red-500 font-bold border-b-2 border-red-500"
                    : ""
                } md:mx-1 lg:mx-4 p-2 transition ease-in-out duration-300`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/Men"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-red-500 font-bold border-b-2 border-red-500"
                    : ""
                } md:mx-1 lg:mx-4 p-2 transition ease-in-out duration-300`
              }
            >
              Men
            </NavLink>
            <NavLink
              to="/Women"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-red-500 font-bold border-b-2 border-red-500"
                    : ""
                } md:mx-1 lg:mx-4 p-2 transition ease-in-out duration-300`
              }
            >
              Women
            </NavLink>
            <NavLink
              to="/Kids"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-red-500 font-bold border-b-2 border-red-500"
                    : ""
                } md:mx-1 lg:mx-4 p-2 transition ease-in-out duration-300`
              }
            >
              Kids
            </NavLink>
          </ul>
        </div>

        <div className="login-cart flex items-center gap-3 sm:gap-5">
         

          {!!token ? (
            <NavLink to="/SignUp">
              <button
                className="py-2 px-5 md:px-10 border-2 border-red-500 rounded-3xl hover:bg-red-500 hover:text-white"
                onClick={() => {
                  // localStorage.removeItem("token");
                  dispatch(removeTokenFromLS());
                  
                }}
              >
                Logout
              </button>
            </NavLink>
          ) : (
            <NavLink to="/Login">
              <button className="py-2 px-5 md:px-10 border-2 border-red-500 rounded-3xl hover:bg-red-500 hover:text-white">
                Login
              </button>
            </NavLink>
          )}

          <div className="cart flex flex-cols justify-around items-center font-semibold gap-1">
            <NavLink to="/cart">
              <i class="fa-solid fa-cart-shopping text-2xl"></i>
            </NavLink>
            <span className="text-sm align-top bg-red-500 rounded-xl p-1 mb-7 text-white">
              {totalItemQuantity}
            </span>
            <i
              onClick={() => setOpen(!Open)}
              className={`${
                Open ? "fa-solid fa-xmark" : "fa-solid fa-bars"
              }  ml-2 sm:text-xl md:text-2xl md:hidden`}
            ></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
