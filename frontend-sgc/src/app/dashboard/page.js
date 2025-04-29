'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar'; // ✔️ Asegúrate que esté bien el path

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

  const sections = [
    { title: 'Usuarios', href: '/usuarios', description: 'Administra los usuarios del sistema.' },
    { title: 'Reportes', href: '/reportes', description: 'Genera y consulta reportes importantes.' },
    { title: 'Registro de Actividad', href: '/registro-actividad', description: 'Consulta la actividad de los usuarios.' },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Bienvenido al Sistema de Gestión 🎯</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {sections.map((section) => (
              <div
                key={section.title}
                onClick={() => router.push(section.href)}
                className="cursor-pointer bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center"
              >
                <h2 className="text-2xl font-semibold mb-2 text-gray-700">{section.title}</h2>
                <p className="text-gray-500">{section.description}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
            >
              Cerrar sesión
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
