"use client";

import React from "react";
import Button from "./button";
import Link from "next/link";
import Heading from "./heading";
import Input from "./input";

interface Field {
  type: string;
  name: string;
  label: string;
  placeholder: string;
}

interface AuthFormProps {
  fields: Field[];
  buttonText: string;
  onClick: () => void;
  extraLinks?: { text: string; href: string }[];
}

const AuthForm: React.FC<AuthFormProps> = ({
  fields,
  buttonText,
  onClick,
  extraLinks,
}) => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="flex flex-col justify-center items-center p-8 w-full max-w-sm customBorder">
        <Heading
          headingText={buttonText}
          headingSize={"small"}
          textCenter={true}
        />
        <form className="space-y-6 w-full">
          {fields.map((field, index) => (
            <div key={index}>
              <label
                htmlFor={field.name}
                className="flex text-sm font-medium dark:text-slate-200 text-black items-center py-1"
              >
                {field.label}
                <span className="text-red-500">*</span>
              </label>
              <Input
                inputType={field.type}
                inputId={field.name}
                inputName={field.name}
                placeholder={field.placeholder}
                isRequired={true}
                onChange={() => {}}
              />
            </div>
          ))}
          <div className="flex flex-col md:flex-row lg:flex-row justify-between items-start gap-8">
            {extraLinks &&
              extraLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-[0.8rem] text-blue-500 dark:text-sky-400 hover:underline"
                >
                  {link.text}
                </Link>
              ))}
          </div>
          <Button
            buttonText={buttonText}
            buttonTheme={"dark"}
            isDisabled={false}
            onClick={onClick}
          />
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
