import { Link, useNavigate } from "react-router";
import { useRef } from "react";
import useAuth from "../hooks/auth.hooks";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();
  const { loading, handleRegister } = useAuth();

  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const username = usernameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;


    try {
      await handleRegister(
        {username,email,password}
      );

      toast.success("User created successfully");
      navigate("/");
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Registration failed"
      );
    }
  };

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_50%_-30%,#20232c_0,#0b0d11_43%,#080a0d_100%)]">
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#f00059] border-t-transparent"></div>

          <h1 className="text-xl font-semibold text-white">
            Signing you in...
          </h1>

          <p className="text-[#8c929b]">
            Please wait a moment.
          </p>
        </div>
      </main>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_50%_-30%,#20232c_0,#0b0d11_43%,#080a0d_100%)] px-4 py-10">
      <div className="w-full max-w-md rounded-[14px] border border-[#2a313a] bg-[#14181d]/95 p-8 shadow-[0_22px_70px_rgba(0,0,0,.28)]">
        <h1 className="text-center text-3xl font-bold text-white">
          Create <span className="bg-gradient-to-r from-[#f00059] to-[#c276e8] bg-clip-text text-transparent">Account</span>
        </h1>

        <p className="mt-2 text-center text-[#8c929b]">
          Register to get started
        </p>

        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="username"
              className="mb-2 block text-sm font-medium text-[#e2e4e8]"
            >
              Username
            </label>

            <input
              ref={usernameRef}
              type="text"
              id="username"
              placeholder="Enter your username"
              required
              className="w-full rounded-lg border border-[#3c444e] bg-[#1d222a] px-4 py-3 text-white placeholder-[#6f757e] outline-none transition focus:border-[#f00059] focus:ring-2 focus:ring-[#f00059]/20"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-[#e2e4e8]"
            >
              Email
            </label>

            <input
              ref={emailRef}
              type="email"
              id="email"
              placeholder="Enter your email"
              required
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
              ref={passwordRef}
              type="password"
              id="password"
              placeholder="Create a password"
              required
              className="w-full rounded-lg border border-[#3c444e] bg-[#1d222a] px-4 py-3 text-white placeholder-[#6f757e] outline-none transition focus:border-[#f00059] focus:ring-2 focus:ring-[#f00059]/20"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-gradient-to-r from-[#ee0057] to-[#ed075f] py-3 font-semibold text-white shadow-[0_8px_22px_rgba(240,0,89,.22)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_26px_rgba(240,0,89,.34)] active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-[#8c929b]">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-[#f00059] hover:text-[#c276e8]"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;