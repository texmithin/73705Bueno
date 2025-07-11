import { collection, getDocs, query, where, doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

// Obtener todos los productos
export const getProductos = async () => {
  const productosRef = collection(db, "productos");
  const snapshot = await getDocs(productosRef);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Obtener productos por categoría
export const getProductosPorCategoria = async (categoriaId) => {
  const productosRef = collection(db, "productos");
  const q = query(productosRef, where("categoria", "==", categoriaId));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Obtener producto por ID
export const getProductoById = async (id) => {
  const docRef = doc(db, "productos", id);
  const snapshot = await getDoc(docRef);
  return { id: snapshot.id, ...snapshot.data() };
};