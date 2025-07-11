import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">BE 3D</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/categoria/productos">Productos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/categoria/accesorios">Accesorios</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/categoria/galeria">Galería</Link>
            </li>
          </ul>
          <Link to="/cart" className="btn btn-outline-light">
            <CartWidget />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;