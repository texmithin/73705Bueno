import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductoById } from '../data/productos';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getProductoById(id).then(setProducto);
  }, [id]);

  return (
    <div className="container my-5">
      {producto ? <ItemDetail {...producto} /> : <p className="text-center">Cargando producto...</p>}
    </div>
  );
};

export default ItemDetailContainer;