import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../data/firebase';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const docRef = doc(db, 'productos', id);
    getDoc(docRef)
      .then(resp => {
        if (resp.exists()) setProducto({ id: resp.id, ...resp.data() });
      })
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div className="container my-5">
      {loading ? <p className="text-center">Cargando producto...</p> : producto && <ItemDetail {...producto} />}
    </div>
  );
};

export default ItemDetailContainer;