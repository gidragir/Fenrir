/*eslint-disable */
import React, { Component } from 'react'

const Pagination = ({ productsLimit, total, paginate, currentPage}) => {
  const pageNumbers = [];
  
  for (let index = 1; index <= Math.ceil(total / productsLimit); index++) {
    pageNumbers.push(index);
  }

  return (
    <div>
      <ul className="pagination justify-content-center">
        {
          pageNumbers.map(number => (
            <li className={`page-item ${number == currentPage && 'active'}`} key={number}>
              <a href="#" className="page-link" onClick={() => paginate(number)}>
                {number}
              </a>
            </li>
          ))
        }
      </ul>
    </div>  
  )

}

export default Pagination