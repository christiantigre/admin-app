import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './AuthLayout.module.scss';

const AuthLayout: React.FC = () => {
  return (
    <div className={styles.authLayout}>
      <main>
        <Outlet />
      </main>
      <footer className='footer'>
        {/* Puedes agregar un pie de página aquí */}
        <p>&copy; 2024 My App</p>
      </footer>
    </div>
  );
};

export default AuthLayout;
