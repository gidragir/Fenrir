/*eslint-disable */
import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';


function productsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/productsList/').then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <div>
      {products.map((product) => {
          return <p>{product.name}</p>
        })}
    </div>
    );

}

export default productsList;