import React from 'react';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export function Link({ children, ...props }: LinkProps) {
  return (
    <a
      href="#"
      className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
      {...props}
    >
      {children}
    </a>
  );
}
