import React from 'react';
import CartWidget from './cartwidget';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold fs-4" href="#">BE 3D</a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav gap-3">
            <li className="nav-item">
              <a className="nav-link active" href="#">Productos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Accesorios</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Galería</a>
            </li>
          </ul>
        </div>

        <div className="d-flex">
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;