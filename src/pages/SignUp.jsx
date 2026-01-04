import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          Create your Civix account
        </h2>
        <p className="text-sm text-gray-500 text-center mt-1">
          Be a part of improving your community
        </p>

        <form className="mt-6 space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />

          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />

          <input
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />

          <button
            type="button"
            className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-lg font-medium transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-6">
          Already a user?{" "}
          <Link
            to="/login"
            className="text-teal-600 hover:underline font-medium"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
