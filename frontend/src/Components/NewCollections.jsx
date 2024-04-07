import React from 'react';
import new_collections from '../Assets/new_collections';
import Item from './Item';

function NewCollections() {
  return (
    <div className='new-collections mb-10' id='NewCollections'>
        <h1 className='text-2xl sm:text-3xl md:text-5xl font-bold font-head'>NEW COLLECTIONS</h1>
        <div className="collection flex flex-col flex-wrap justify-center items-center sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 p-10">
            {new_collections.map((item,i) => 
                <Item key={item.id} item={item}/>
            )}
        </div>
        
    </div>
  )
}

export default NewCollections