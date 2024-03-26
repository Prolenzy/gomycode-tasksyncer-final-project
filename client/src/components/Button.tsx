import React, { ReactNode } from 'react';
import clsx from "clsx";

interface ButtonProps {
    icon?: ReactNode; // Define the icon prop as ReactNode
    className?: string;
    label: string;
    type?: 'button' | 'submit' | 'reset'; // Specify the type prop to accept only specified values
    onClick?: () => void;
  }

const Button: React.FC<ButtonProps> = ({ icon, className, label, type = 'button', onClick = () => {}}) => {
  return (
    <button
    type={type || "button"} className={clsx("px-3 py-2 outline-none", className)} 
    onClick={onClick} // Use the onClick handler
    >
        <span>{label}</span>
        {icon && icon}
    </button>
  )
}

export default Button;