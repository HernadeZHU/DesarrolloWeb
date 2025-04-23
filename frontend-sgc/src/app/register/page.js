'use client'; // necesario para usar hooks en App Router

import { useState } from 'react';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Por favor, llena todos los campos.');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      if (!response.ok) {
        throw new Error('Error al registrar');
      }

      const data = await response.text(); // porque devuelve un string
      console.log('Registro exitoso:', data);
      alert('Usuario registrado correctamente. Ahora puedes iniciar sesión.');
      window.location.href = '/'; // Redirigir al login
    } catch (error) {
      console.error('Error en el registro:', error);
      alert('Hubo un problema al registrar el usuario.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Crear Cuenta</h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Correo electrónico</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="ejemplo@email.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
          >
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
}
