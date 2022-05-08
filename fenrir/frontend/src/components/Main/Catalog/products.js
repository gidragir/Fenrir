/*eslint-disable */
import React from 'react';
import Product from './product';

const products = ({ currentProducts, addToBacket }) => {
  return (
    <div className="productContainer">
      {currentProducts.map((product) => (
        <Product product={product} key={product.id} addToBacket={addToBacket} />
      ))}
    </div >
  )
}

export default products