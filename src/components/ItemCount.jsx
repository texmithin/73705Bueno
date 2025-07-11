import React, { useState } from 'react';

const ItemCount = ({ stock, inicial, onAdd }) => {
  const [cantidad, setCantidad] = useState(inicial);

  const aumentar = () => cantidad < stock && setCantidad(cantidad + 1);
  const disminuir = () => cantidad > 1 && setCantidad(cantidad - 1);

  return (
    <div className="d-flex flex-column align-items-center gap-2 mt-3">
      <div className="btn-group">
        <button className="btn btn-outline-secondary" onClick={disminuir}>-</button>
        <span className="btn btn-outline-secondary">{cantidad}</span>
        <button className="btn btn-outline-secondary" onClick={aumentar}>+</button>
      </div>
      <button className="btn btn-dark" onClick={() => onAdd(cantidad)} disabled={stock === 0}>
        {stock === 0 ? 'Sin stock' : 'Agregar al carrito'}
      </button>
    </div>
  );
};

export default ItemCount;