import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductDetails from '../Components/ProductDetails';

function Product() {
const {all_products} = useSelector((state) => state.all_products);
const {productId} = useParams();
const product = all_products.find((item) => Number(item.id) === Number(productId));


  return (
    <div>
      <ProductDetails product={product}/>
    </div>
  )
}

export default Product