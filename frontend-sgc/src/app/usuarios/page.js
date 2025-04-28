'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';

export default function UsuariosPage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Acceso denegado. Por favor, inicia sesión.');
      router.push('/login');
    }
  }, [router]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-100 p-8">
        <div className="bg-white w-full max-w-4xl rounded-xl shadow-xl p-8 space-y-4">
          <h1 className="text-2xl font-bold text-gray-800">Gestión de Usuarios</h1>
          <p className="text-gray-600">Aquí podrás ver, editar o eliminar usuarios del sistema.</p>

          {/* Aquí podrías agregar una tabla o lista de usuarios más adelante */}
        </div>
      </div>
    </>
  );
}
