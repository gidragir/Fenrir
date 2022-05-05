/*eslint-disable */
import React, { useEffect, useState } from 'react';
import Functions from '../functions';
import Pagination from './pagination';
import Products from './products';

export default function catalog() {

  const [products, setProducts] = useState([]);
  const [currentPage, setPage] = useState(1);
  const [productsLimit] = useState(10);

  useEffect(() => {
    Functions.sendReq('productsList/').then((res) => {
      setProducts(res.data);
    });
  }, []);

  const lastIndex = currentPage * productsLimit;
  const firstIndex = lastIndex - productsLimit;
  const currentProducts = products.slice(firstIndex, lastIndex);

  const paginate = pageNumber => setPage(pageNumber)
  
  return (
    <div>
      <Products currentProducts={currentProducts} />
      <Pagination productsLimit={productsLimit} total={products.length} paginate={paginate} currentPage={currentPage}/>
    </div>

  )
}