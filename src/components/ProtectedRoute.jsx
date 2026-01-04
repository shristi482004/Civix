import { Navigate } from "react-router-dom";
import { useAuth } from "/Users/shristishristi/Desktop/civix/Civix/src/context/Authcontext.jsx";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
