import React from 'react';
import {NavLink} from 'react-router-dom';

function EmptyCart() {
  return (
    <div className='EmptyCart'>
    <h1 className='text-3xl mb-4 '>Your cart is empty</h1>
    <NavLink to='/' className="hover:text-red-500 group text-xl">
        <i className="fa-solid fa-arrow-left mr-2 group-hover:mr-4 transition-all duration-300 ease-in"></i>
        Start Shopping
    </NavLink>
</div>

  )
}

export default EmptyCart