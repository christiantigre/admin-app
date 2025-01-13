import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean; // Indica si hay un error asociado al input
}

export function Input({ className, error, ...rest }: InputProps) {
  const baseStyles =
    'block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 px-3';
  const errorStyles = 'ring-red-500 focus:ring-red-500 bg-red-50'; // Estilos para errores
  const normalStyles = 'ring-gray-300 focus:ring-indigo-600'; // Estilos normales

  return (
    <input
      className={`${className ?? ''} ${baseStyles} ${
        error ? errorStyles : normalStyles
      }`}
      {...rest}
    />
  );
}
