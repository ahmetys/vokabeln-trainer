import { Navigate } from "react-router-dom";

function PrivateRoutes({ isLoggedIn, children }) {
  if (!isLoggedIn) {
    console.log(isLoggedIn);

    return <Navigate to="/login" replace></Navigate>;
  }
  console.log(isLoggedIn);

  return <>{children}</>;
}

export default PrivateRoutes;
