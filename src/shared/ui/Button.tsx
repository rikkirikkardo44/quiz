import React, { PropsWithChildren } from 'react';

/**
 * Компонент-кнопка
 * @returns - jsx.element
 */
export const Button: React.FC<
  PropsWithChildren<
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >
  >
> = ({ children, className, ...rest }) => {
  return (
    <button
      className={`rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${className ?? ''}`.trim()}
      {...rest}
    >
      {children}
    </button>
  );
};
