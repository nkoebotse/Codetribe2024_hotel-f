import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

/**
 * ProtectedRoute component to handle protected routes with optional admin checks.
 * @param {ReactNode} children - The component(s) to render if conditions are met.
 * @param {boolean} requireAdmin - If true, restrict access to admin users only.
 */
const ProtectedRoute = ({ children, requireAdmin = false }) => {
  const { user, isAdmin } = useSelector((state) => state.auth);

  // Redirect to login if no user is authenticated
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Redirect to home if admin access is required but the user is not an admin
  if (requireAdmin && !isAdmin) {
    return <Navigate to="/" replace />;
  }

  // Render the children if all checks pass
  return children;
};

export default ProtectedRoute;
