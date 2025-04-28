'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar'; // Asegúrate que el path sea correcto

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Acceso denegado. Por favor, inicia sesión.');
      router.push('/login');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    alert('Sesión cerrada correctamente');
    router.push('/login');
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-green-100">
        <div className="bg-white p-10 rounded-xl shadow-xl text-center space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">Bienvenido al Dashboard 🎉</h1>
          <p className="text-gray-600">Solo los usuarios autenticados pueden ver esta página.</p>
          <button
            onClick={handleLogout}
            className="mt-6 px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition duration-300"
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    </>
  );
}
