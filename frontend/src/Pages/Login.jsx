import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {storeTokenInLS} from '../Store/auth'

function Login() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [formData, setformData] = useState({
        email : "",
        password : "",
    });

    const [error , setError] = useState("");

    //any change in input fields will store in formData

    const formdataChangeHandler = (e) => {
        setformData(() => ({...formData, [e.target.name]:e.target.value}))
    }
        
    const handleSubmit = async(e) => {
        e.preventDefault();
        setError("")
        try{
          const {data} = await axios.post("/api/login" , {email:formData.email, password : formData.password});
          if(data.success){
            alert("User login Successfully");
            console.log(data);
            // localStorage.setItem('token', data.token);
            dispatch(storeTokenInLS(data.token));
            navigate('/');
          }else{
            setError(data.message)
          }
        }catch(error){
          console.log(error);
        }
    }


  return (
    <div className="LoginSignup bg-violet-100 flex flex-col justify-center items-center px-10">
      <div className="loginSignup-container text-left bg-white p-10 m-[75px]">
        <h1 className="text-2xl md:text-4xl mb-7">Log in</h1>
        <div className="loginSignup-inputs flex flex-col mb-7">
          <input
            type="email"
            className="p-3 border-b-2 mb-3 focus:border-red-500 focus:outline-none required"
            name="email"
            value={formData.email}
            onChange={formdataChangeHandler}
            placeholder="Your email"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          />
          <input
            type="password"
            className="p-3 border-b-2 mb-3 focus:border-red-500 focus:outline-none required"
            name="password"
            value={formData.password}
            onChange={formdataChangeHandler}
            placeholder="Enter password"
            required
          />
        </div>
        {error && <div className='my-3 text-red-500 font-semibold'>⚠️ {error}</div>}
        <div onClick={handleSubmit} className="w-100 text-center bg-red-500 py-2 px-6 border-2 border-red-500 text-white mb-5 hover:bg-white hover:text-red-500 hover:border-2 trasition-all ease-in-out duration-500">
          Continue
        </div>
        <p className="mb-4">
          Create new Account {" "}
          <NavLink to='/Signup' className="text-red-500 font-bold cursor-pointer">
            Click here
          </NavLink>
        </p>
        <div className="loginSIgnup-agree flex ">
          <input
            type="checkbox"
            className="mr-2 checked:bg-red-500 "
            name=""
            id=""
          />
          <p className="">
            By Continuing, I agree to the{" "}
            <span className="text-red-500">terms of use & privacy policy</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
