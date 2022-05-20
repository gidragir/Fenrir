/*eslint-disable */
import React, { useEffect, useState } from 'react';
import Functions from '../../../functions';
import Pagination from './Pagination/pagination';
import Products from './products';

export default function catalog() {

  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [currentPage, setPage] = useState(1);
  const [productsLimit] = useState(10);

  useEffect(() => {
   Functions.sendReq('productsList/').then((res) => {
     setProducts(res.data);
     setLoading(false);
    });
  }, []); 

  const lastIndex = currentPage * productsLimit;
  const firstIndex = lastIndex - productsLimit;
  const currentProducts = products.slice(firstIndex, lastIndex);

  const paginate = pageNumber => setPage(pageNumber);

  const addToBacket = React.useCallback((id) => {
    console.log("Добавлен в корзину ", id)
  });

  if (loading == true) {
    return (<div>Loading</div>)
  }

  return (
    <React.Fragment>
      <Products currentProducts={currentProducts} addToBacket={addToBacket} />
      <Pagination productsLimit={productsLimit} total={products.length} paginate={paginate} currentPage={currentPage}/>
    </React.Fragment>
  )
}