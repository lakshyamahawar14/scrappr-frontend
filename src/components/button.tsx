import React from "react";

interface ButtonProps {
  buttonText: string;
  buttonTheme: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  buttonText,
  buttonTheme,
  onClick,
}) => {
  return (
    <button
      type="button"
      className={`font-bold py-2 px-4 rounded text-[0.8rem] ${
        buttonTheme === "dark"
          ? "bg-slate-700 text-white hover:bg-slate-900"
          : "bg-slate-100 text-slate-700 hover:bg-slate-200"
      }`}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

export default Button;
