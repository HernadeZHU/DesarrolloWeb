'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar';

export default function RegistroActividadPage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Acceso denegado. Por favor, inicia sesión.');
      router.push('/login');
    }
  }, [router]);

  const actividades = [
    { id: 1, usuario: 'Juan Pérez', accion: 'Inició sesión', fecha: '2025-04-28 10:12' },
    { id: 2, usuario: 'Ana García', accion: 'Registró un nuevo usuario', fecha: '2025-04-28 10:30' },
    { id: 3, usuario: 'Carlos López', accion: 'Cerró sesión', fecha: '2025-04-28 11:15' },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-start bg-slate-100 p-8">
        <div className="bg-white w-full max-w-4xl rounded-xl shadow-xl p-8 space-y-4">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Registro de Actividad</h1>

          <table className="w-full table-auto border-collapse">
            <thead className="bg-gray-200 text-gray-800">
              <tr>
                <th className="px-4 py-2 text-left">ID</th>
                <th className="px-4 py-2 text-left">Usuario</th>
                <th className="px-4 py-2 text-left">Acción</th>
                <th className="px-4 py-2 text-left">Fecha</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {actividades.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="px-4 py-2">{item.id}</td>
                  <td className="px-4 py-2">{item.usuario}</td>
                  <td className="px-4 py-2">{item.accion}</td>
                  <td className="px-4 py-2">{item.fecha}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
