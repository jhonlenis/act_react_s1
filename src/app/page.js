'use client';

import Usuario from './components/Usuario';

export default function Home() {
  const usuarios = [
    { nombre: 'Jhon Lenis', edad: 19, ciudad: 'Medellin' },
    { nombre: 'Mariana Bastidas', edad: 17, ciudad: 'Medellin' },
    { nombre: 'Mateo Usuga', edad: 18, ciudad: 'Medellin' },
  ];

  const saludar = (nombre) => {
    alert(`¡Hola, ${nombre}!`);
  };

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Actividad de Props en Next.js</h1>
      {usuarios.map((usuario, index) => (
        <Usuario key={index} usuario={usuario} saludar={saludar} />
      ))}
    </main>
  );
}