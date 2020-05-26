import React from 'react'
import { Link } from 'react-router-dom'



const NavBar = () => (
    <div>
      <nav className="navbar navbar-light bg-dark mb-3">
        <div className="container">
          <div className="navbar-header">
            <Link className="navbar-brand text-white text-lg brand-text" to="/">
              MovieSeries
            </Link>
          </div>
          <ul className="navbar-nav ml-auto text-light d-inline-block">
            <li className="nav-item d-inline-block mr-4">
            </li>
            <li className="nav-item d-inline-block mr-4">
            <i className="fab fa-imdb fa-3x" id="imdb-logo" />
            </li>
          </ul>
        </div>
      </nav>
    </div>
)

export default NavBar