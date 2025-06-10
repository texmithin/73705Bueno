import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({ nombre, descripcion, precio, imagen }) => {
  return (
    <div className="card mx-auto" style={{ maxWidth: '600px' }}>
      <img src={imagen} className="card-img-top" alt={nombre} />
      <div className="card-body text-center">
        <h2>{nombre}</h2>
        <p>{descripcion}</p>
        <h4>${precio}</h4>
        <ItemCount stock={5} inicial={1} onAdd={(qty) => alert(`Agregado ${qty} al carrito`)} />
      </div>
    </div>
  );
};

export default ItemDetail;
