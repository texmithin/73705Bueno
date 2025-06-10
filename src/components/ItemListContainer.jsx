import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductos, getProductosPorCategoria } from '../data/productos';
import ItemList from './ItemList';

const ItemListContainer = ({ saludo }) => {
  const [items, setItems] = useState([]);
  const { categoriaId } = useParams();

  useEffect(() => {
    const obtenerProductos = categoriaId ? getProductosPorCategoria : getProductos;
    const argumento = categoriaId ? categoriaId : undefined;

    obtenerProductos(argumento).then(setItems);
  }, [categoriaId]);

  return (
    <div className="container my-4">
      {saludo && <h2 className="text-center">{saludo}</h2>}
      <ItemList productos={items} />
    </div>
  );
};

export default ItemListContainer;