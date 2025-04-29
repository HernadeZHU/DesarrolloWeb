'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar';

export default function ReportesPage() {
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
      <div className="min-h-screen bg-gray-100 py-10 px-4 flex justify-center">
        <div className="bg-white w-full max-w-5xl p-8 rounded-xl shadow-lg">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">📊 Generación de Reportes</h1>

          <div className="flex justify-end mb-4">
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-lg transition">
              Generar nuevo reporte
            </button>
          </div>

          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-3 font-semibold text-gray-700">#</th>
                <th className="p-3 font-semibold text-gray-700">Nombre del Reporte</th>
                <th className="p-3 font-semibold text-gray-700">Fecha</th>
                <th className="p-3 font-semibold text-gray-700">Acción</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {[
                { id: 1, nombre: 'Reporte de Accesos', fecha: '2025-04-28' },
                { id: 2, nombre: 'Reporte de Usuarios', fecha: '2025-04-27' },
              ].map((reporte) => (
                <tr key={reporte.id} className="border-b">
                  <td className="p-3">{reporte.id}</td>
                  <td className="p-3">{reporte.nombre}</td>
                  <td className="p-3">{reporte.fecha}</td>
                  <td className="p-3">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded">
                      Descargar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
