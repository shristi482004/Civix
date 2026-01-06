import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase.js";
import { useAuth } from "../context/Authcontext.jsx";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, isAdmin } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const displayName =
    user?.displayName ||
    user?.email?.split("@")[0] ||
    "Citizen";

  const handleLogout = async () => {
    await signOut(auth);
    toast.success("Logged out successfully");
    navigate("/login");
  };

  const links = [
    { to: "/", label: "HOME" },
    { to: "/browse", label: "ISSUES FEED" },
    user && { to: "/report", label: "REPORT ISSUE" },
    user && { to: "/profile", label: "MY REPORTS" },
    isAdmin && { to: "/admin", label: "ADMIN" }
  ].filter(Boolean);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-5 py-4 flex items-center justify-between">

        {/* LOGO */}
        <NavLink to="/" className="text-2xl font-serif font-bold text-gray-900">
          civix<span className="text-teal-600">.</span>
        </NavLink>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `text-xs font-semibold uppercase tracking-[0.25em] transition
                 ${isActive ? "text-gray-900" : "text-gray-500 hover:text-gray-900"}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* RIGHT */}
        <div className="flex items-center gap-3">
          {!user ? (
            <NavLink
              to="/signup"
              className="hidden md:inline rounded-full px-5 py-2 text-sm font-semibold
                         bg-teal-100 text-teal-900 border border-teal-200"
            >
              JOIN
            </NavLink>
          ) : (
            <div className="hidden md:flex items-center gap-3">
              <NavLink
                to="/profile"
                className="flex items-center gap-2 border px-4 py-2 rounded-full"
              >
                <div className="h-7 w-7 rounded-full bg-teal-100 flex items-center justify-center text-xs font-bold text-teal-800">
                  {displayName[0].toUpperCase()}
                </div>
                <span className="text-sm">{displayName}</span>
              </NavLink>

              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm border rounded-full"
              >
                Logout
              </button>
            </div>
          )}

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden border-t bg-white px-6 py-6 space-y-5">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className="block text-sm font-semibold uppercase tracking-widest text-gray-800"
            >
              {label}
            </NavLink>
          ))}

          {user && (
            <button
              onClick={handleLogout}
              className="mt-4 w-full text-left text-sm font-semibold text-teal-700"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;

