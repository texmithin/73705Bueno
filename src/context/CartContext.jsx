import React, { createContext, useContext, useState } from 'react';
import Swal from 'sweetalert2';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (producto, cantidad) => {
    const existe = cart.find((item) => item.id === producto.id);
    if (existe) {
      const actualizado = cart.map((item) =>
        item.id === producto.id
          ? { ...item, cantidad: item.cantidad + cantidad }
          : item
      );
      setCart(actualizado);
    } else {
      setCart([...cart, { ...producto, cantidad }]);
    }

   
    Swal.fire({
      icon: 'success',
      title: 'Agregado al carrito',
      text: `${producto.nombre} x${cantidad} se agregó correctamente`,
      timer: 1500,
      showConfirmButton: false
    });
  };

  const removeItem = (id) => {
    const producto = cart.find((item) => item.id === id);

    setCart(cart.filter((item) => item.id !== id));

   
    Swal.fire({
      icon: 'warning',
      title: 'Producto eliminado',
      text: `${producto.nombre} fue eliminado del carrito`,
      timer: 1500,
      showConfirmButton: false
    });
  };

  const clearCart = () => {
  Swal.fire({
    title: '¿Estás seguro?',
    text: 'Esto eliminará todos los productos del carrito',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#6c757d',
    confirmButtonText: 'Sí, vaciar',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      setCart([]);
      Swal.fire({
        icon: 'success',
        title: 'Carrito vacío',
        text: 'Todos los productos fueron eliminados',
        timer: 1500,
        showConfirmButton: false
      });
    }
  });
  };

  const total = () =>
    cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  const totalItems = () =>
    cart.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeItem, clearCart, total, totalItems }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);