import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
  return (
    <button className="btn btn-outline-light">
      <FaShoppingCart />
      <span className="ms-1">3</span>
    </button>
  );
};

export default CartWidget;