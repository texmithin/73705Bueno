import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { totalItems } = useCart();

  return (
    <Link to="/cart" className="btn btn-outline-light">
      <FaShoppingCart />
      <span className="ms-1">{totalItems()}</span>
    </Link>
  );
};

export default CartWidget;