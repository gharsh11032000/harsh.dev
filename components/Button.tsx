import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  fullWidth = false,
  className = "",
  ...props
}) => {
  const baseStyles =
    "font-bold uppercase tracking-wider py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-yellow-500 cursor-pointer whitespace-nowrap touch-target text-sm sm:text-base";

  const variants = {
    primary:
      "bg-yellow-500 text-black hover:bg-yellow-400 shadow-lg hover:shadow-xl hover:-translate-y-1",
    secondary:
      "bg-white text-black hover:bg-neutral-200 shadow-lg hover:shadow-xl hover:-translate-y-1",
    outline:
      "glass-button text-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.1)] hover:shadow-[0_0_25px_rgba(234,179,8,0.2)] hover:-translate-y-1",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? "w-full" : ""} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
