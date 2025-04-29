'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar';

export default function UsuariosPage() {
  const router = useRouter();
  const [token, setToken] = useState(null);

  const [usuarios, setUsuarios] = useState([
    { id: 1, nombre: 'Juan Pérez', email: 'juan@example.com' },
    { id: 2, nombre: 'Ana García', email: 'ana@example.com' },
    { id: 3, nombre: 'Carlos López', email: 'carlos@example.com' },
  ]);

  const [nuevoUsuario, setNuevoUsuario] = useState({ nombre: '', email: '' });

  useEffect(() => {
    const t = localStorage.getItem('token');
    if (!t) {
      alert('Acceso denegado. Por favor, inicia sesión.');
      router.push('/login');
    } else {
      setToken(t);
    }
  }, [router]);

  const handleEliminar = (id) => {
    const confirmado = confirm('¿Estás seguro de eliminar este usuario?');
    if (confirmado) {
      setUsuarios(usuarios.filter(user => user.id !== id));
    }
  };

  const handleAgregar = (e) => {
    e.preventDefault();
    if (!nuevoUsuario.nombre || !nuevoUsuario.email) {
      alert('Por favor, completa todos los campos');
      return;
    }

    const nuevo = {
      id: usuarios.length + 1,
      nombre: nuevoUsuario.nombre,
      email: nuevoUsuario.email,
    };
    setUsuarios([...usuarios, nuevo]);
    setNuevoUsuario({ nombre: '', email: '' });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-slate-100 p-8 flex flex-col items-center">
        <div className="bg-white w-full max-w-4xl rounded-xl shadow-xl p-8 space-y-4">
          <h1 className="text-2xl font-bold text-gray-800">Gestión de Usuarios</h1>

          {/* Formulario de agregar usuario */}
          <form onSubmit={handleAgregar} className="flex flex-col md:flex-row md:items-end gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Nombre</label>
              <input
                type="text"
                value={nuevoUsuario.nombre}
                onChange={(e) => setNuevoUsuario({ ...nuevoUsuario, nombre: e.target.value })}
                className="w-full px-3 py-2 border rounded-md text-gray-700"
                placeholder="Nombre completo"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Correo</label>
              <input
                type="email"
                value={nuevoUsuario.email}
                onChange={(e) => setNuevoUsuario({ ...nuevoUsuario, email: e.target.value })}
                className="w-full px-3 py-2 border rounded-md text-gray-700"
                placeholder="correo@ejemplo.com"
              />
            </div>
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
            >
              Agregar
            </button>
          </form>

          {/* Tabla de usuarios */}
          <div className="overflow-x-auto">
            <table className="w-full table-auto border mt-6">
              <thead className="bg-gray-200 text-gray-700">
                <tr>
                  <th className="px-4 py-2 text-left">ID</th>
                  <th className="px-4 py-2 text-left">Nombre</th>
                  <th className="px-4 py-2 text-left">Email</th>
                  <th className="px-4 py-2 text-left">Acciones</th>
                </tr>
              </thead>
              <tbody className="text-gray-700"> 
                {usuarios.map((user) => (
                  <tr key={user.id} className="border-t">
                    <td className="px-4 py-2">{user.id}</td>
                    <td className="px-4 py-2">{user.nombre}</td>
                    <td className="px-4 py-2">{user.email}</td>
                    <td className="px-4 py-2">
                      <button
                        onClick={() => handleEliminar(user.id)}
                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
