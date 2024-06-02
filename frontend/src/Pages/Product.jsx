import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductDetails from '../Components/ProductDetails';
import Item from '../Components/Item';

function Product() {
const {all_products} = useSelector((state) => state.all_products);
const {productId} = useParams();
const [similarProducts , setSimilarProducts] = useState([])
const product = all_products.find((item) => Number(item.id) === Number(productId));
const filteredProducts = all_products.filter((item) => item.category === product.category)

useEffect(() => {
  if (product) {
    const filteredProducts = all_products.filter(
      (item) => item.category === product.category && item.id !== product.id
    );

    const generateSimilarProducts = () => {
      let newSimilarProducts = [];
      const usedIndices = new Set();

      while (newSimilarProducts.length < 4 && newSimilarProducts.length < filteredProducts.length) {
        const randomIndex = Math.floor(Math.random() * filteredProducts.length);
        if (!usedIndices.has(randomIndex)) {
          usedIndices.add(randomIndex);
          newSimilarProducts.push(filteredProducts[randomIndex]);
        }
      }

      setSimilarProducts(newSimilarProducts);
    };

    generateSimilarProducts();
  }
}, [product, all_products]);

if (!product) return <div>Product not found</div>;

console.log(similarProducts)
  return (
    <div>
      <ProductDetails product={product}/>
      <div>
        <h1 className='text-xl md:text-3xl font-bold mt-10  p-5 text-left'>Similar Products</h1>
        <div className='grid grid-rows md:grid-cols-2 lg:grid-cols-4 gap-7 my-3 p-10'>{similarProducts.map((item) => (<Item key={item.id} item={item}/>)
          
        )
}</div>
      </div>
    </div>
  )
}

export default Product