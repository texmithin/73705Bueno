import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">BE 3D</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/categoria/juegos">Productos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/categoria/accesorios">Accesorios</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/categoria/decoracion">Galería</Link>
            </li>
          </ul>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;