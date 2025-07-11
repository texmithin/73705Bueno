import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, total, removeItem, clearCart } = useCart();

  if (cart.length === 0) {
    return <h2 className="text-center mt-5">Tu carrito está vacío</h2>;
  }

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Carrito de Compras</h2>
      <ul className="list-group mb-3">
        {cart.map(item => (
          <li className="list-group-item d-flex justify-content-between align-items-center" key={item.id}>
            {item.nombre} x {item.cantidad}
            <div>
              <span className="me-3">${item.precio * item.cantidad}</span>
              <button className="btn btn-sm btn-danger" onClick={() => removeItem(item.id)}>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
      <h4>Total: ${total()}</h4>
      <div className="d-flex justify-content-between mt-3">
        <button className="btn btn-outline-danger" onClick={clearCart}>Vaciar carrito</button>
        <Link to="/checkout" className="btn btn-success">Finalizar compra</Link>
      </div>
    </div>
  );
};

export default Cart;
