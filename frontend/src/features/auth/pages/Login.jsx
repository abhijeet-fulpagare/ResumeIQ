import React, { use, useRef } from "react";
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

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-zinc-900">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

          <h1 className="text-xl font-semibold text-white">
            Signing you in...
          </h1>

          <p className="text-zinc-400">
            Please wait a moment.
          </p>
        </div>
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-zinc-800 rounded-2xl shadow-xl border border-zinc-700 p-8">
        <h1 className="text-3xl font-bold text-white text-center">
          Welcome Back
        </h1>
        <p className="text-zinc-400 text-center mt-2">
          Sign in to continue
        </p>

        <form className="mt-8 space-y-5" onSubmit={submitHandler}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-zinc-300 mb-2"
            >
              Email
            </label>
            <input
              ref={(e)=>{inputRef.email = e}}
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-zinc-600 bg-zinc-900 px-4 py-3 text-white placeholder-zinc-500 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-zinc-300 mb-2"
            >
              Password
            </label>
            <input
              ref={(e) => { inputRef.password = e }}
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border border-zinc-600 bg-zinc-900 px-4 py-3 text-white placeholder-zinc-500 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-[0.98]"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-zinc-400">
          Don't have an account?{" "}
          <span className="cursor-pointer font-medium text-blue-500 hover:text-blue-400">
            <Link to={'/register'}>Sign Up</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;