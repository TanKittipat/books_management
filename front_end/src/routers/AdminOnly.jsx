import { useAuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

const AdminOnly = ({ children }) => {
  const { user } = useAuthContext();
  if (!user) {
    return <Navigate to="/signin" />;
  }
  if (user.roles.includes("ROLES_ADMIN")) {
    return children;
  }
  return <Navigate to="/store" />;
};

export default AdminOnly;
