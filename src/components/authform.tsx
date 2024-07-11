import React from "react";
import Button from "./button";

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
      <div className="bg-white p-8 rounded-lg w-full max-w-sm border-[1px]">
        <h1 className="text-2xl font-bold mb-6 text-center">{buttonText}</h1>
        <form className="space-y-6" onSubmit={onSubmit}>
          {fields.map((field, index) => (
            <div key={index}>
              <label
                htmlFor={field.name}
                className="flex text-sm font-medium text-gray-700 items-center py-1"
              >
                {field.label}
                <span className="text-red-500">*</span>
              </label>
              <input
                type={field.type}
                id={field.name}
                name={field.name}
                placeholder={field.placeholder}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 outline-none"
                required
              />
            </div>
          ))}
          <div className="flex flex-col md:flex-row lg:flex-row justify-between items-start">
            {extraLinks &&
              extraLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-sm text-blue-600 hover:underline my-1"
                >
                  {link.text}
                </a>
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
