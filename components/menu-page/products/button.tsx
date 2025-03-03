import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ children, className, onClick }) => {
  return (
    <button className={`px-4 py-1 rounded-md ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;
