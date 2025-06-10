import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ id, nombre, precio, imagen }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 text-center">
        <img src={imagen} className="card-img-top" alt={nombre} />
        <div className="card-body">
          <h5 className="card-title">{nombre}</h5>
          <p className="card-text">${precio}</p>
          <Link to={`/producto/${id}`} className="btn btn-dark">Ver detalle</Link>
        </div>
      </div>
    </div>
  );
};

export default Item;