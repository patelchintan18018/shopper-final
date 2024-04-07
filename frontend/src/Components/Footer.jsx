import React from 'react';
import logo from '../Assets/logo.png'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';


function Footer() {
  return (
    <div className='footer mt-10 '>
        <div className="footer-logo flex flex-rows justify-center items-center mb-7 pt-10 ">
            <img src={logo} alt="" />
            <p className='ml-5 font-bold font-head'>SHOPPER</p>
        </div>
        <ul className="footer-links sm:flex flex-rows grid grid-cols-1 justify-center items-center mb-7" >
            <li className='mx-5 hover:text-red-500'>
                <Link to='heroID' smooth={true} offset={-50}> Company</Link>
            </li>
            <li className='mx-5 hover:text-red-500'>
            <Link to="NewCollections" smooth={true} offset={-50}>Products</Link>
            </li>
            <li className='mx-5 hover:text-red-500'>
            <NavLink to='/offices'>Offices</NavLink>
            </li>
            <li className='mx-5 hover:text-red-500'>
            <NavLink to='/about'>About</NavLink>
            </li>
            <li className='mx-5 hover:text-red-500'>
            <NavLink to='/contact'>Contact</NavLink>
            </li>
        </ul>
        <div className="footer-socials flex flex-rows justify-center items-center mb-7 text-3xl ">
            <div className="instagram mx-4">
            <i className="fa-brands fa-square-instagram hover:text-[#db2777] hover:scale-110"></i>
            </div>
            <div className="pintester mx-4">
            <i className="fa-brands fa-pinterest hover:text-red-500 hover:scale-110"></i>
            </div>
            <div className="whatsapp mx-4">
            <i className="fa-brands fa-square-whatsapp hover:text-green-500 hover:scale-110"></i>
            </div>
        </div>
        <div className="footer-copyright w-4/5 mx-auto border-t-2 py-7">
            <p>Copyright @ 2024 - All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer