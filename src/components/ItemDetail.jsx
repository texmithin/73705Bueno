import React, { useState } from 'react';
import ItemCount from './ItemCount';
import { useCart } from "../context/CartContext";

const ItemDetail = ({ id, nombre, descripcion, precio, imagen, stock }) => {
  const [agregado, setAgregado] = useState(false);
  const { addToCart } = useCart();

  const handleAdd = (cantidad) => {
    addToCart({ id, nombre, precio }, cantidad);
    setAgregado(true);
  };

  return (
    <div className="card mx-auto" style={{ maxWidth: '600px' }}>
      <img src={imagen} className="card-img-top" alt={nombre} />
      <div className="card-body text-center">
        <h2>{nombre}</h2>
        <p>{descripcion}</p>
        <h4>${precio}</h4>
        {agregado ? <p className="text-success">Producto agregado al carrito</p> : <ItemCount stock={stock} inicial={1} onAdd={handleAdd} />}
      </div>
    </div>
  );
};

export default ItemDetail;
