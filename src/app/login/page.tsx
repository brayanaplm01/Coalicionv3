"use client";

import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { FormLogin } from './components/FormLogin';

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    // Verificar si hay un mensaje de error en los parámetros de URL
    const error = searchParams.get('error');
    const message = searchParams.get('message');
    
    if (error === 'unauthorized' && message) {
      setErrorMessage(decodeURIComponent(message));
      
      // Limpiar los parámetros de la URL después de mostrar el mensaje
      const newUrl = window.location.pathname;
      window.history.replaceState({}, '', newUrl);
    }
  }, [searchParams]);

  const handleLogin = (email: string, password: string) => {
    // Aquí puedes agregar la lógica de autenticación
    console.log('Login attempt:', { email, password });
    
    // Credenciales correctas - redirigir al dashboard
    const testCredentials = {
      email: 'admin@coalicion.bo',
      password: 'coalicion2025'
    };

    if (email === testCredentials.email && password === testCredentials.password) {
      // Guardar estado de autenticación en localStorage y cookies
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userEmail', email);
      
      // Establecer cookies para el middleware
      document.cookie = 'isLoggedIn=true; path=/; max-age=86400'; // 24 horas
      document.cookie = 'coalicion_session_token=coalicion_session_token; path=/; max-age=86400';
      
      // Redirigir al dashboard después de un breve delay para mostrar el modal
      setTimeout(() => {
        router.push('/dashboard');
      }, 2000);
    }
  };

  return (
    <main className="min-h-screen">
      {/* Mostrar mensaje de error si existe */}
      {errorMessage && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-lg shadow-lg max-w-md">
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">Acceso Denegado</span>
          </div>
          <p className="mt-2 text-sm">{errorMessage}</p>
        </div>
      )}
      
      <FormLogin onLogin={handleLogin} />
    </main>
  );
}