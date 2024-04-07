import React from 'react'

function NewsLetter() {
  return (
    <div className='newsletter w-5/6 mx-auto mb-10'>
        <h1 className='text-2xl md:text-4xl font-semibold py-9 bg-gradient-to-b from-violet-200 to-white-500 font-head'>Get Exclusive Offers on Your Email</h1>
        <h4 className=' text-sm md:text-xl mb-7'>Subscribe to our newsletter and stay updated</h4>
        <div className='flex flex-wrap justify-center mb-7 text-sm md:text-lg'>
            <input className='bg-white-500 border-2 rounded-2xl p-3 mx-3 my-2 w-[50%]' type="email" placeholder='Enter your Email' />
            <button className='mx-3 my-2 py-3 px-7 border-2 rounded-3xl bg-black text-white hover:bg-white hover:text-black transition-all ease-in-out duration-400 hover:border-black'>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter