import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer saludo="¡Bienvenido a BE 3D!" />} />
        <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
        <Route path="/producto/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<h2 className="text-center mt-5">404 - Página no encontrada</h2>} />
      </Routes>
    </>
  );
};

export default App;
