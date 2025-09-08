import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <h1 className="text-4xl font-bold text-gray-800">404</h1>
        <p className="text-gray-600">Página no encontrada</p>

        <a href="/" className="text-blue-500 hover:underline">
          Seguir explorando
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;
