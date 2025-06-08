import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full">
      <Outlet />

      <footer className="footer">
        {/* Puedes agregar un pie de página aquí */}
        <p>&copy; 2025 My App</p>
      </footer>
    </div>
  );
};

export default AuthLayout;
