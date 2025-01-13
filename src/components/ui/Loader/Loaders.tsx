import React from 'react';

interface LoaderProps {
  isOpen: boolean;
}

const Loader: React.FC<LoaderProps> = ({ isOpen }) => {
  if (!isOpen) return null; // Si el popup no está abierto, no se muestra nada

  return (
    <div className="loader-popup">
      <div className="overlay">
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
