"use client";

import React from 'react';
import { FormLogin } from './components/FormLogin';

export default function LoginPage() {
  const handleLogin = (email: string, password: string) => {
    // Aquí puedes agregar la lógica de autenticación
    console.log('Login attempt:', { email, password });
    
    // Ejemplo: redireccionar después del login exitoso
    // router.push('/dashboard');
    
    
  };

  return (
    <main className="min-h-screen">
      <FormLogin onLogin={handleLogin} />
    </main>
  );
}