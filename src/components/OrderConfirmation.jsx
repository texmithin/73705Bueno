import React from 'react';
import { useParams, Link } from 'react-router-dom';

const OrderConfirmation = () => {
  const { orderId } = useParams();

  return (
    <div className="container text-center my-5">
      <h2>¡Gracias por tu compra!</h2>
      <p>Tu número de orden es:</p>
      <h4 className="text-success">{orderId}</h4>
      <Link to="/" className="btn btn-dark mt-4">Volver al inicio</Link>
    </div>
  );
};

export default OrderConfirmation;