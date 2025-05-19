import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
  return (
    <div className="d-flex align-items-center">
      <FaShoppingCart size={20} />
      <span className="badge bg-danger ms-2">3</span>
    </div>
  );
};

export default CartWidget;