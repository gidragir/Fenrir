/*eslint-disable */
import React from 'react'

export default function footer() {
  return (
    <footer className="container">
      <div className="row row-cols-5 py-5 my-5 border-top">
        <div className="col">
          <a href="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">
            Fenrir
          </a>
          <p className="text-muted">© 2021</p>
        </div>

        <div className="col">

        </div>

        <div className="col">
          <h5>Быстрые ссылки</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Главная</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
