import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../data/firebase';
import ItemList from './ItemList';

const ItemListContainer = ({ saludo }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoriaId } = useParams();

  useEffect(() => {
    const productosRef = collection(db, 'productos');
    const q = categoriaId ? query(productosRef, where('categoria', '==', categoriaId)) : productosRef;

    getDocs(q)
      .then(resp => {
        const productos = resp.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setItems(productos);
      })
      .finally(() => setLoading(false));
  }, [categoriaId]);

  return (
    <div className="container my-4">
      {saludo && <h2 className="text-center">{saludo}</h2>}
      {loading ? <p className="text-center">Cargando productos...</p> : <ItemList productos={items} />}
    </div>
  );
};

export default ItemListContainer;