import { Navigate } from "react-router-dom";
import { useAuth } from "../context/Authcontext";

const AdminRoute = ({ children }) => {
  const { user, role, loading } = useAuth();

  if (loading) return null;

  if (!user || role !== "admin") {
    return <Navigate to="/" />;
  }

  return children;
};

export default AdminRoute;
