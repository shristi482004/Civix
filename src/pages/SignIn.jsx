import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.js";
import toast from "react-hot-toast";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Signed in successfully!");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FDFCFB] px-6">
      <div className="-mt-30 relative w-full max-w-md rounded-[32px] border border-gray-200 bg-white p-10 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)] transition hover:-translate-y-1">
        
        <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-teal-600/70 text-center mb-6">
          Civix Access
        </p>

        <h2 className="text-3xl font-serif font-bold text-gray-900 text-center">
          Welcome back.
        </h2>

        <p className="mt-3 text-sm text-gray-600 text-center">
          Continue contributing to the public civic record.
        </p>

        <div className="mt-10 space-y-5">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border px-5 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border px-5 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
          />

          <button
            onClick={handleSignIn}
            className="mt-2 w-full rounded-full bg-teal-900 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-teal-800"
          >
            Sign in
          </button>
        </div>

        <p className="mt-10 text-sm text-center text-gray-600">
          New to Civix?{" "}
          <Link to="/signup" className="font-medium text-teal-700 hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
