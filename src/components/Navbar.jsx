import { NavLink, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase.js";
import { useAuth } from "../context/Authcontext.jsx";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, isAdmin } = useAuth();
  const navigate = useNavigate();

  const displayName =
    user?.displayName ||
    user?.email?.split("@")[0] ||
    "Citizen";

  const handleLogout = async () => {
    await signOut(auth);
    toast.success("Logged out successfully");
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="relative mx-auto max-w-7xl px-6 py-5 flex items-center">

        {/* LEFT — LOGO */}
        <NavLink to="/" className="flex-shrink-0">
          <span className="text-2xl font-serif font-bold text-gray-900 tracking-tight">
            civix<span className="text-teal-600">.</span>
          </span>
        </NavLink>

        {/* CENTER — EDITORIAL NAV (TRUE CENTER) */}
        <nav className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-12">
          {[
            { to: "/", label: "HOME" },
            { to: "/browse", label: "ISSUES FEED" },
            user && { to: "/report", label: "REPORT ISSUE" },
            user && { to: "/profile", label: "MY REPORTS" },
            isAdmin && { to: "/admin", label: "ADMIN" }
          ]
            .filter(Boolean)
            .map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `
                  relative text-xs font-semibold tracking-[0.25em] uppercase
                  transition-colors duration-200
                  ${
                    isActive
                      ? "text-gray-900"
                      : "text-gray-500 hover:text-gray-900"
                  }
                  after:absolute after:-bottom-2 after:left-0 after:h-[2px]
                  after:w-full after:bg-teal-500 after:origin-left
                  after:scale-x-0 after:transition-transform after:duration-300
                  hover:after:scale-x-100
                `
                }
              >
                {label}
              </NavLink>
            ))}
        </nav>

        {/* RIGHT — USER / CTA (EQUAL VISUAL WEIGHT TO LOGO) */}
        <div className="ml-auto flex items-center gap-4">
          {!user ? (
            <NavLink
              to="/signup"
              className="rounded-full px-6 py-2.5 text-sm font-semibold
                         text-teal-900 bg-teal-100 border border-teal-200
                         transition hover:bg-teal-200 hover:shadow-md"
            >
              JOIN THE PLATFORM
            </NavLink>
          ) : (
            <>
              {/* USER CHIP */}
              <NavLink
                to="/profile"
                className="group flex items-center gap-2 rounded-full
                           border border-gray-200 px-4 py-2
                           transition hover:bg-gray-50"
              >
                <div className="h-7 w-7 rounded-full bg-teal-100
                                flex items-center justify-center
                                text-xs font-bold text-teal-800">
                  {displayName.charAt(0).toUpperCase()}
                </div>

                <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                  {displayName}
                </span>
              </NavLink>

              <button
                onClick={handleLogout}
                className="rounded-full px-4 py-2 text-sm font-semibold
                           text-teal-900 border border-teal-200
                           transition hover:bg-teal-50"
              >
                Logout
              </button>
            </>
          )}
        </div>

      </div>
    </header>
  );
};

export default Navbar;
