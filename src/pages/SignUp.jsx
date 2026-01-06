import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.js";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async () => {
    if (!email || !password) {
      toast.error("Email and password are required");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Account created successfully!");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FDFCFB] px-6">
      <div className="w-full max-w-md rounded-[32px] border border-gray-200 bg-white p-10 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)] transition hover:-translate-y-1">

        {/* Eyebrow */}
        <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-teal-600/70 text-center mb-6">
          Join Civix
        </p>

        {/* Heading */}
        <h2 className="text-3xl font-serif font-bold text-gray-900 text-center">
          Create your account.
        </h2>

        <p className="mt-3 text-sm text-gray-600 text-center">
          Be part of the community improving public spaces.
        </p>

        {/* Form */}
        <form className="mt-10 space-y-5">
          <input
            type="text"
            placeholder="Full name"
            className="w-full rounded-xl border px-5 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
          />

          <input
            type="text"
            placeholder="Username"
            className="w-full rounded-xl border px-5 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
          />

          <input
            type="email"
            placeholder="Email address"
            className="w-full rounded-xl border px-5 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border px-5 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
          />

          <button
            type="button"
            onClick={handleSignUp}
            className="mt-2 w-full rounded-full bg-teal-900 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-teal-800"
          >
            Create account
          </button>
        </form>

        {/* Footer */}
        <p className="mt-10 text-sm text-center text-gray-600">
          Already a member?{" "}
          <Link
            to="/login"
            className="font-medium text-teal-700 hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
