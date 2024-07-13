import React from "react";

interface InputProps {
  inputType: string;
  inputId: string;
  inputName: string;
  placeholder: string;
  isRequired: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  inputType,
  inputId,
  inputName,
  placeholder,
  isRequired,
  onChange,
}) => {
  return (
    <input
      type={inputType}
      id={inputId}
      name={inputName}
      placeholder={placeholder}
      className="p-2 block text-[0.9rem] w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-800 rounded-md shadow-sm focus:ring-slate-500 dark:focus:ring-slate-600 focus:border-slate-500 dark:focus:border-slate-600 text-slate-800 dark:text-slate-300 outline-none"
      required={isRequired}
      onChange={onChange}
    />
  );
};

export default Input;
