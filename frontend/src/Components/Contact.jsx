import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../Store/auth";

function Contact() {

  const {token,userData} = useSelector((state)=> state.auth);
  const dispatch = useDispatch()
  const [contactData, setcontactData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    if (userData && userData.userData) {
      console.log(userData)
      const {name, email} = userData.userData;
      
      setcontactData({
        name: name || "",
        email: email || "",
        message: "",
      });
    }
  }, [userData]);
  
  useEffect(()=>{
    dispatch(getUserData());
  },[])


  const handleContactChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setcontactData({ ...contactData, [name]: value });
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    
    if (token) {
      try {
        
        const { data } = await axios.post("/api/contact", {
          name: contactData.name,
          email: contactData.email,
          message: contactData.message,
        });
        if (data.success) {
          alert("Record added");
          console.log(data.message);
        } else {
          alert("Internal server error");
          
        }
        setcontactData({ name: "", email: "", message: "" });
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Please login first");
      setcontactData({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="contactUs bg-violet-100 flex flex-col justify-center items-center px-10">
      <div className="contact-container text-left bg-white p-10 m-[75px]">
        <div className="contact-heading text-2xl md:text-4xl mb-7 text-red-500 font-semibold">
          Contact Us
        </div>
        <div className="contact-inputs">
          <form onSubmit={handleContactSubmit}>
            <div>
              <input
                type="text"
                className="p-3 border-b-2 mb-3 focus:border-red-500 focus:outline-none w-full"
                name="name"
                placeholder="Name"
                value={contactData.name}
                required
                onChange={handleContactChange}
              />
            </div>
            <div>
              <input
                type="text"
                className="p-3 border-b-2 mb-3 focus:border-red-500 focus:outline-none w-full"
                name="email"
                placeholder="Email"
                value={contactData.email}
                required
                onChange={handleContactChange}
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Message"
                className="p-3 border-b-2 mb-3 focus:border-red-500 focus:outline-none"
                cols="50"
                rows="7"
                value={contactData.message}
                required
                onChange={handleContactChange}
              ></textarea>
            </div>
            <div className="flex justify-center items-center w-100">
              <button
                type="submit"
                className="text-center bg-red-500 py-2 px-6 border-2 border-red-500 text-white mb-5 hover:bg-white hover:text-red-500 hover:border-2 trasition-all ease-in-out duration-500 rounded-2xl"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
