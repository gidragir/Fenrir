/*eslint-disable */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingBasket } from "react-icons/fa";

const constants = require("../static/constants");

export default function header() {

  let [backetOpen, setBacket] = useState(false);

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to={constants.urls['home']}>Fenrir</Link>
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={ constants.urls['home'] }>Главная</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={ constants.urls['about']}>О нас</Link>
              </li>
            </ul>
            <Link onClick={() => setBacket(backetOpen = !backetOpen)} className={`btn btn-outline-success ms-auto ${backetOpen && 'active'}` } to={constants.urls['home']}><FaShoppingBasket /></Link>
            {
              backetOpen && (
                <div className="backet">
                  asdad
                </div>
              )
            }
          </div>
        </div>
      </nav>
    </header>
  )
}
