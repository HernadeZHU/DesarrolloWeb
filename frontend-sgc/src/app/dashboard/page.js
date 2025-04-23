'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

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
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-200 to-green-500">
      <section className="bg-white p-10 rounded-2xl shadow-2xl max-w-xl w-full text-center space-y-6">
        <h1 className="text-4xl font-extrabold text-gray-800">🎉 ¡Bienvenido al Dashboard!</h1>
        <p className="text-gray-700 text-lg">Has iniciado sesión correctamente. Desde aquí puedes acceder al sistema de gestión.</p>

        <button
          onClick={handleLogout}
          className="mt-6 px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition duration-300"
        >
          Cerrar sesión
        </button>
      </section>
    </main>
  );
}
