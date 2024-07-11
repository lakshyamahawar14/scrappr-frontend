"use client";

import AuthForm from "@/components/authform";
import Header from "@/components/header";

const signupFields = [
  {
    type: "text",
    name: "username",
    label: "Username",
    placeholder: "Enter your username",
  },
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

const SignUp = () => {
  return (
    <main>
      <Header />
      <div className="relative flex flex-col justify-center items-center h-full min-h-[100vh] md:h-[100vh] lg:h-[100vh] w-full p-6 pt-[75px] text-slate-700">
        <AuthForm
          fields={signupFields}
          buttonText="Sign Up"
          onSubmit={() => {}}
          extraLinks={[
            { text: "Already have an account? Log In", href: "/login" },
          ]}
        />
      </div>
    </main>
  );
};

export default SignUp;
