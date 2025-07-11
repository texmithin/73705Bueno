import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../data/firebase';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Checkout = () => {
  const { cart, total, clearCart } = useCart();
  const [form, setForm] = useState({ nombre: '', email: '', telefono: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orden = {
      comprador: form,
      items: cart,
      total: total(),
      fecha: Timestamp.now()
    };

    // Mostrar loader
    Swal.fire({
      title: 'Procesando tu orden...',
      text: 'Por favor espera un momento',
      allowOutsideClick: false,
      allowEscapeKey: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    try {
      const docRef = await addDoc(collection(db, 'ordenes'), orden);
      clearCart();

      // Mostrar éxito
      Swal.fire({
        icon: 'success',
        title: '¡Orden generada!',
        text: `Tu número de orden es: ${docRef.id}`,
        confirmButtonText: 'Aceptar'
      }).then(() => {
        navigate(`/order-confirmation/${docRef.id}`);
      });
    } catch (error) {
      console.error('Error al generar orden:', error);

      // Mostrar error
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un problema al generar tu orden. Intenta nuevamente.',
      });
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Finalizar Compra</h2>
      <form className="mx-auto" onSubmit={handleSubmit} style={{ maxWidth: '500px' }}>
        <input
          className="form-control mb-3"
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={form.nombre}
          onChange={handleChange}
          required
        />
        <input
          className="form-control mb-3"
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          className="form-control mb-3"
          type="tel"
          name="telefono"
          placeholder="Teléfono"
          value={form.telefono}
          onChange={handleChange}
          required
        />
        <button className="btn btn-success w-100" type="submit">
          Generar orden
        </button>
      </form>
    </div>
  );
};

export default Checkout;
