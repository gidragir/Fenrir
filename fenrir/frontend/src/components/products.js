/*eslint-disable */
import React, { useEffect, useState } from 'react';
import Functions from '../functions';
import Product from './product';

export default function products() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    Functions.sendReq('productsList/').then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <div className="productContainer">
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div >
  );
}
