import React from "react";
import Button from "./button";
import Link from "next/link";

interface Field {
  type: string;
  name: string;
  label: string;
  placeholder: string;
}

interface AuthFormProps {
  fields: Field[];
  buttonText: string;
  onSubmit: () => void;
  extraLinks?: { text: string; href: string }[];
}

const AuthForm: React.FC<AuthFormProps> = ({
  fields,
  buttonText,
  onSubmit,
  extraLinks,
}) => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="p-8 rounded-lg w-full max-w-sm border-[2px] border-slate-200 dark:border-slate-800">
        <h1 className="text-2xl font-bold mb-6 text-center text-slate-900 dark:text-slate-200">
          {buttonText}
        </h1>
        <form className="space-y-6" onSubmit={onSubmit}>
          {fields.map((field, index) => (
            <div key={index}>
              <label
                htmlFor={field.name}
                className="flex text-sm font-medium dark:text-slate-200 text-slate-900 items-center py-1"
              >
                {field.label}
                <span className="text-red-500">*</span>
              </label>
              <input
                type={field.type}
                id={field.name}
                name={field.name}
                placeholder={field.placeholder}
                className="mt-1 p-2 block text-[0.9rem] w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-800 rounded-md shadow-sm focus:ring-slate-500 dark:focus:rign-slate-600 focus:border-slate-500 dark:focus:border-slate-600 text-slate-800 dark:text-slate-300 outline-none"
                required
              />
            </div>
          ))}
          <div className="flex flex-col md:flex-row lg:flex-row justify-between items-start">
            {extraLinks &&
              extraLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-sm text-blue-500 dark:text-sky-400 hover:underline my-1"
                >
                  {link.text}
                </Link>
              ))}
          </div>
          <Button
            buttonText={buttonText}
            buttonTheme="dark"
            onClick={onSubmit}
          />
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
