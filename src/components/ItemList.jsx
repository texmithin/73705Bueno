import React from 'react';
import Item from './Item';

const ItemList = ({ productos }) => {
  return (
    <div className="row">
      {productos.map(prod => (
        <Item key={prod.id} {...prod} />
      ))}
    </div>
  );
};

export default ItemList;