import React from 'react';
import {useSelector } from 'react-redux';
import EmptyCart from '../Components/EmptyCart';
import CartItem from '../Components/CartItem';

function Cart() {

  const {myBag} = useSelector(state => state.cart);
  let totalPrice = 0;
  myBag.map((item) => 
    totalPrice += item.new_price * item.itemQuantity
  )

  return (
    <div className='cart'>
      <div className="cart-navbar flex justify-around items-center my-5">
        <p>My Bag</p>
        <p>Total : $ {totalPrice}</p>
      </div>
      <div className="cart-products p-6 flex flex-row flex-wrap justify-center items-center sm:grid sm:grid-cols-2 md:grid-cols-1">
          {myBag.length === 0 ? (<EmptyCart/>) : (myBag.map((item,i) =>
            <CartItem key={item.id} item={item}/>
          ))}
        
          {/* {myBag.map((item,i) => 
            <CartItem key={item.id} item={item}/>
          )} */}
      </div>
    </div>
  )
}

export default Cart