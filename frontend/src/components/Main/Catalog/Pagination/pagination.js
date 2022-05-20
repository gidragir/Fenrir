/*eslint-disable */
import React, { Component } from 'react';

const Pagination = React.memo(({ productsLimit, total, paginate, currentPage}) => {
  const numbersView = React.useMemo(() => {  
    const pageNumbers = [];

    for (let index = 1; index <= Math.ceil(total / productsLimit); index++) {
      pageNumbers.push(index);
    }

    return pageNumbers;
  }, [total])

  return (
    <React.Fragment>
      <ul className="pagination justify-content-center">
        {
          numbersView.map(number => (
            <li className={`page-item ${number == currentPage && 'active'}`} key={number}>
              <a href="#" className="page-link" onClick={() => paginate(number)}>
                {number}
              </a>
            </li>
          ))
        }
      </ul>
    </React.Fragment>  
  )
})

export default Pagination