import React from 'react';

const ItemListContainer = ({ mensaje }) => {
  return (
    <div className="container text-center my-5">
      <h2 className="display-5">{mensaje}</h2>
      <p className="text-muted">¡Muy pronto verás nuestros productos destacados aquí!</p>
    </div>
  );
};

export default ItemListContainer;