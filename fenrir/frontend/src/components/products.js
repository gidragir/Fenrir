/*eslint-disable */
import React from 'react';
import Product from './product';

const products = ({currentProducts}) => {
  return (
    <div className="productContainer">
      {currentProducts.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div >
  )
}

export default products