import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer mensaje="¡Bienvenido a BE 3D! Descubre lo último en impresión 3D y accesorios." />
    </>
  );
};

export default App;
