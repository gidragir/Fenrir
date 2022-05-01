/*eslint-disable */
import React from 'react'

export default function footer() {
  return (
    <div class="container">
      <footer class="row row-cols-5 py-5 my-5 border-top">
        <div class="col">
          <a href="/" class="d-flex align-items-center mb-3 link-dark text-decoration-none">
            Fenrir
          </a>
          <p class="text-muted">© 2021</p>
        </div>

        <div class="col">

        </div>

        <div class="col">
          <h5>Быстрые ссылки</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Главная</a></li>
          </ul>
        </div>
      </footer>
    </div>
  )
}
