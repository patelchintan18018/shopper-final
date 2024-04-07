import React from 'react';
import data_product from '../Assets/data';
import Item from './Item';

function Popular() {
    // console.log(data_product)
  return (
    
    <>
    <div className="popular my-10">
        <h1 className='text-2xl sm:text-3xl md:text-5xl font-bold font-head'>POPULAR IN WOMEN</h1>
        <div className="popular-item flex flex-cols flex-wrap justify-center items-center sm:grid sm:grid-cols-2 xl:grid-cols-4 gap-7 p-10">
            {data_product.map((item,i) => 
                <Item key={item.id} item={item}/>
            )}
        </div>
    </div>
    </>
  )
}

export default Popular