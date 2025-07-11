import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import OrderConfirmation from './components/OrderConfirmation';
import Galeria from "./components/Galeria";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
       <Route path="/" element={<ItemListContainer saludo="¡Bienvenido a BE 3D!" />} />
  <Route path="/categoria/productos" element={<ItemListContainer />} />
  <Route path="/categoria/accesorios" element={<ItemListContainer />} />
  <Route path="/categoria/galeria" element={<Galeria />} />
  <Route path="/producto/:id" element={<ItemDetailContainer />} />
  <Route path="/cart" element={<Cart />} />
  <Route path="/checkout" element={<Checkout />} />
  <Route path="/order-confirmation/:orderId" element={<OrderConfirmation />} />
  <Route path="*" element={<h2 className="text-center mt-5">404 - Página no encontrada</h2>} />
      </Routes>
    </>
  );
};

export default App;