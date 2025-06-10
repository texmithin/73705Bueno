const productos = [
  {
    id: '1',
    nombre: 'Base para control PS3',
    descripcion: 'Soporte impreso en 3D para mando PS3.',
    precio: 250,
    categoria: 'accesorios',
    imagen: 'https://via.placeholder.com/150'
  },
  {
    id: '2',
    nombre: 'Ajedrez',
    descripcion: 'Set completo de ajedrez impreso en 3D.',
    precio: 600,
    categoria: 'juegos',
    imagen: 'https://via.placeholder.com/150'
  },
  {
    id: '3',
    nombre: 'Pikachu 3D',
    descripcion: 'Figura decorativa de Pikachu impresa en 3D.',
    precio: 400,
    categoria: 'decoracion',
    imagen: 'https://via.placeholder.com/150'
  }
];

export const getProductos = () => {
  return new Promise((res) => {
    setTimeout(() => res(productos), 1000);
  });
};

export const getProductoById = (id) => {
  return new Promise((res) => {
    setTimeout(() => res(productos.find(p => p.id === id)), 1000);
  });
};

export const getProductosPorCategoria = (categoriaId) => {
  return new Promise((res) => {
    setTimeout(() => res(productos.filter(p => p.categoria === categoriaId)), 1000);
  });
};