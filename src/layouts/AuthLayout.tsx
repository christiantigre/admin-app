import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import styles from './AuthLayout.module.scss';

const AuthLayout: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.authLayout}>
      <header>
        <h1>My App</h1>
        {/* Puedes agregar un encabezado o logo aquí */}
      </header>
      <main>
        <button
          onClick={() => {
            navigate('/login');
          }}
        >
          Lon in
        </button>

        <Outlet />
      </main>
      <footer>
        {/* Puedes agregar un pie de página aquí */}
        <p>&copy; 2024 My App</p>
      </footer>
    </div>
  );
};

export default AuthLayout;
