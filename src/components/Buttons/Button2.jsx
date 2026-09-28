import React from 'react'

const Button2 = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`bg-white text-primary || ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button2;
