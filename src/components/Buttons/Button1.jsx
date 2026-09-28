import React from 'react'

const Button1 = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`bg-primary text-white || ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button1;
