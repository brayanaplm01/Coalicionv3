"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RecursosPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirigir a la página principal donde ahora están los recursos
    router.replace("/");
  }, [router]);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#CBA135] mx-auto mb-4"></div>
        <p className="text-gray-600">Redirigiendo a recursos...</p>
      </div>
    </div>
  );
}
