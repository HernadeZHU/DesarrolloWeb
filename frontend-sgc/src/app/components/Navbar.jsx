'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const router = useRouter();
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    setToken(storedToken);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    alert('Sesión cerrada correctamente');
    router.push('/login');
  };

  if (!token) return null; // Si no hay token, no renderiza el navbar

  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <div className="space-x-6">
        <Link href="/dashboard" className="hover:underline">Dashboard</Link>
        <Link href="/usuarios" className="hover:underline">Usuarios</Link>
        <Link href="/reportes" className="hover:underline">Reportes</Link>
        <Link href="/registro-actividad" className="hover:underline">Registro de actividad</Link>
      </div>
      <button onClick={handleLogout} className="bg-red-600 px-4 py-1 rounded hover:bg-red-700">
        Cerrar sesión
      </button>
    </nav>
  );
}
