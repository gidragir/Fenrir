/*eslint-disable */
import React, { useEffect, useState } from 'react';
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
  useQueryClient
} from 'react-query';
import Functions from '../../../functions';
import Pagination from './Pagination/pagination';
import Products from './products';

const queryClient = new QueryClient();

export default function catalog() {

  // const [loading, setLoading] = useState(true);
  // const [products, setProducts] = useState([]);
  // const addToBacket = React.useCallback((id) => {
  //   console.log("Добавлен в корзину ", id)
  // });

  // const [currentPage, setPage] = useState(1);
  // const [productsLimit] = useState(5);
  

  // if (loading == true) {
  //   return (<div>Loading</div>)
  // }

  

  // const lastIndex = currentPage * productsLimit;
  // const firstIndex = lastIndex - productsLimit;
  // const currentProducts = products.slice(firstIndex, lastIndex);

  // const paginate = pageNumber => setPage(pageNumber);

  return (
    <QueryClientProvider client={queryClient}>
      {/* <React.Fragment> */}
      <ProductsData />
        {/* <Pagination productsLimit={productsLimit} total={products.length} paginate={paginate} currentPage={currentPage} /> */}
      {/* </React.Fragment> */}
    </QueryClientProvider>
  )
}

const ProductsData = () => {
  const queryClient = useQueryClient();
  const { isLoading, data, isSuccess } = useQuery('productsGet', () => {
    Functions.sendReq('productsList/').then((res) => {
      return res.data;
    })
  });
  console.log(isLoading, res.data, isSuccess)
  return <div></div>
}