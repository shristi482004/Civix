import React from "react";
import { Link } from "react-router-dom";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.js";
import { useNavigate } from "react-router-dom";
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
 // redirect to homepage
  } catch (error) {
    toast.error(err.message);

  }
};



  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          Sign in to Civix
        </h2>
        <p className="text-sm text-gray-500 text-center mt-1">
          Continue reporting civic issues
        </p>

        <form className="mt-6 space-y-4">
         <input
  type="email"
  placeholder="Email address"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
/>


        <input
  type="password"
  placeholder="Password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
/>


       <button
  type="button"
  onClick={handleSignIn}
  className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-lg font-medium transition"
>
  Sign In
</button>

        </form>

        <p className="text-sm text-center text-gray-600 mt-6">
          New to Civix?{" "}
          <Link
            to="/signup"
            className="text-teal-600 hover:underline font-medium"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
