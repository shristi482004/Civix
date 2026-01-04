import { NavLink, useNavigate } from "react-router-dom";
import { MapPin } from "lucide-react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase.js";
import { useAuth } from "/Users/shristishristi/Desktop/civix/Civix/src/context/Authcontext.jsx";
import toast from "react-hot-toast";



const Navbar = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
      toast.success("Logged out successfully");
    navigate("/login");
  };

  return (
    <nav className="w-full bg-[#E6F4F1] px-6 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-500">
            <MapPin className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-semibold text-gray-900">
            Civix
          </span>
        </div>

        {/* Center: Navigation */}
        <div className="hidden md:flex items-center gap-2 rounded-full bg-[#D9EFEB] px-2 py-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `rounded-full px-4 py-1.5 text-sm font-medium transition
              ${
                isActive
                  ? "bg-[#C7E7E1] text-teal-700"
                  : "text-gray-700 hover:bg-[#C7E7E1]"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/browse"
            className={({ isActive }) =>
              `rounded-full px-4 py-1.5 text-sm font-medium transition
              ${
                isActive
                  ? "bg-[#C7E7E1] text-teal-700"
                  : "text-gray-700 hover:bg-[#C7E7E1]"
              }`
            }
          >
            Browse Issues
          </NavLink>

          {user && (
            <NavLink
              to="/report"
              className={({ isActive }) =>
                `rounded-full px-4 py-1.5 text-sm font-medium transition
                ${
                  isActive
                    ? "bg-[#C7E7E1] text-teal-700"
                    : "text-gray-700 hover:bg-[#C7E7E1]"
                }`
              }
            >
              Report Issue
            </NavLink>


              
          )}

          {user && (
  <NavLink
    to="/profile"
    className={({ isActive }) =>
      `rounded-full px-4 py-1.5 text-sm font-medium transition
      ${
        isActive
          ? "bg-[#C7E7E1] text-teal-700"
          : "text-gray-700 hover:bg-[#C7E7E1]"
      }`
    }
  >
    My Reports
  </NavLink>
)}

        </div>

        

        {/* Right: Auth Actions */}
        <div className="flex items-center gap-3">
          {!user ? (
            <>
              <NavLink
                to="/login"
                className="text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                Sign In
              </NavLink>

              <NavLink
                to="/signup"
                className="rounded-full bg-teal-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-teal-600"
              >
                Get Started
              </NavLink>
            </>
          ) : (
            <>
              <span className="text-sm text-gray-700">
                {user.email}
              </span>

              <button
                onClick={handleLogout}
                className="rounded-full border border-teal-500 px-4 py-2 text-sm font-semibold text-teal-600 transition hover:bg-teal-50"
              >
                Logout
              </button>
            </>
          )}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
