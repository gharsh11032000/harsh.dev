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
    "font-bold uppercase tracking-wider py-4 px-8 rounded-lg transition-all duration-200 transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-yellow-500 cursor-pointer";

  const variants = {
    primary:
      "bg-yellow-500 text-black hover:bg-yellow-400 shadow-[0px_4px_0px_0px_#854d0e] hover:shadow-[0px_2px_0px_0px_#854d0e] hover:translate-y-[2px]",
    secondary:
      "bg-white text-black hover:bg-gray-100 shadow-[0px_4px_0px_0px_#a3a3a3] hover:shadow-[0px_2px_0px_0px_#a3a3a3] hover:translate-y-[2px]",
    outline:
      "border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black",
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
