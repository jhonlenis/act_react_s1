'use client';

import React from 'react';
import PropTypes from 'prop-types';

function Usuario({ usuario, saludar }) {
  return (
    <div className="bg-gray-100 p-4 m-2 rounded-lg">
      <h2 className="text-xl font-bold text-gray-800">Nombre: {usuario.nombre}</h2>
      <p className="text-gray-600">Edad: {usuario.edad} años</p>
      <p className="text-gray-600">Ciudad: {usuario.ciudad}</p>
      <button
        className="bg-blue-500 text-black px-4 py-2 mt-2 rounded hover:bg-blue-600"
        onClick={() => saludar(usuario.nombre)}
      >
        Saludar
      </button>
    </div>
  );
}

Usuario.propTypes = {
  usuario: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    edad: PropTypes.number.isRequired,
    ciudad: PropTypes.string.isRequired,
  }).isRequired,
  saludar: PropTypes.func.isRequired,
};

export default Usuario;