import { Navigate } from "react-router-dom";

function PrivateRoutes({ isLoggedIn, children }) {
  if (!isLoggedIn) {
    return <Navigate to="/login" replace></Navigate>;
  }

  return <>{children}</>;
}

export default PrivateRoutes;
