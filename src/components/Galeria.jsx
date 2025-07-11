import React from 'react';
import Swal from 'sweetalert2';

const Galeria = () => {
  const imagenes = [
    '/ajredrez3d.jpg',
    '/basecontrol3d.jpg',
    '/pikachu3d.jpg',
    '/brolyvsgoku3d.jpg',
    '/thresh3d.jpg',
    '/onepiece3d.jpg',
  ];

  const mostrarImagen = (src) => {
    Swal.fire({
      imageUrl: src,
      imageAlt: 'Vista ampliada',
      showConfirmButton: false,
      background: '#111',
      width: '80%',
      padding: '1em',
      customClass: {
        popup: 'rounded',
      }
    });
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Galería de Diseños 3D</h2>
      <div className="row">
        {imagenes.map((src, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <img
              src={src}
              alt={`Diseño ${index + 1}`}
              className="img-fluid rounded shadow-sm galeria-img"
              onClick={() => mostrarImagen(src)}
              style={{ cursor: 'pointer' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Galeria;