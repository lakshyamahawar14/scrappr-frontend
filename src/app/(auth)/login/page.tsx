"use client";

import AuthForm from "@/components/authform";

const loginFields = [
  {
    type: "email",
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
  },
  {
    type: "password",
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
  },
];

const LogIn = () => {
  return (
    <main>
      <div className="relative flex flex-col justify-center items-center h-full min-h-[100vh] md:h-[100vh] lg:h-[100vh] w-full p-6 pt-[75px] text-slate-700 dark:bg-black">
        <AuthForm
          fields={loginFields}
          buttonText="Log In"
          onClick={() => {}}
          extraLinks={[
            { text: "Forgot Password?", href: "/forgot-password" },
            { text: "Don't have an account? Sign Up", href: "/signup" },
          ]}
        />
      </div>
    </main>
  );
};

export default LogIn;
