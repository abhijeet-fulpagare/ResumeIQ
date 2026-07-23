import React, { useRef } from "react";
import useAuth from "../hooks/auth.hooks";
import { Link } from "react-router";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";



const Login = () => {

  const navigate = useNavigate();
  const { loading, handleLogin } = useAuth();

  const inputRef = useRef({});

  const submitHandler=async(e) => {
    e.preventDefault();

    const email = inputRef.email.value;
    const password = inputRef.password.value;

    await handleLogin({ email, password });
    toast.success("User Login Successfully");
    navigate('/');
  }

  

  return (
    <div className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_50%_-30%,#20232c_0,#0b0d11_43%,#080a0d_100%)] px-4 py-10">
      <div className="w-full max-w-md rounded-[14px] border border-[#2a313a] bg-[#14181d]/95 p-8 shadow-[0_22px_70px_rgba(0,0,0,.28)]">
        <h1 className="text-center text-3xl font-bold text-white">
          Welcome <span className="bg-gradient-to-r from-[#f00059] to-[#c276e8] bg-clip-text text-transparent">Back</span>
        </h1>
        <p className="mt-2 text-center text-[#8c929b]">
          Sign in to continue
        </p>

        <form className="mt-8 space-y-5" onSubmit={submitHandler}>
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-[#e2e4e8]"
            >
              Email
            </label>
            <input
              ref={(e)=>{inputRef.email = e}}
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-[#3c444e] bg-[#1d222a] px-4 py-3 text-white placeholder-[#6f757e] outline-none transition focus:border-[#f00059] focus:ring-2 focus:ring-[#f00059]/20"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-[#e2e4e8]"
            >
              Password
            </label>
            <input
              ref={(e) => { inputRef.password = e }}
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border border-[#3c444e] bg-[#1d222a] px-4 py-3 text-white placeholder-[#6f757e] outline-none transition focus:border-[#f00059] focus:ring-2 focus:ring-[#f00059]/20"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-gradient-to-r from-[#ee0057] to-[#ed075f] py-3 font-semibold text-white shadow-[0_8px_22px_rgba(240,0,89,.22)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_26px_rgba(240,0,89,.34)] active:translate-y-0"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-[#8c929b]">
          Don't have an account?{" "}
          <span className="cursor-pointer font-medium text-[#f00059] hover:text-[#c276e8]">
            <Link to={'/register'}>Sign Up</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;