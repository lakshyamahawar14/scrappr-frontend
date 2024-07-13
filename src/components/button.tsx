"use client";

import React from "react";

interface ButtonProps {
  buttonText: string;
  buttonTheme: string;
  isDisabled: boolean;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  buttonText,
  buttonTheme,
  isDisabled,
  onClick,
}) => {
  return (
    <button
      type="button"
      className={`font-bold py-2 px-4 rounded text-[0.8rem] ${
        buttonTheme === "dark"
          ? "bg-slate-700 text-white hover:bg-slate-800"
          : "bg-white text-black hover:bg-slate-200"
      }`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {buttonText}
    </button>
  );
};

export default Button;
