import React from 'react';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export function Label({ children, ...props }: LabelProps) {
  return (
    <label
      className="block text-sm font-medium leading-6 text-gray-900"
      {...props}
    >
      {children}
    </label>
  );
}
