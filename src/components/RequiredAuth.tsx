import * as React from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store";
import { useLocation } from "react-router-dom";

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const auth = useAuthStore((state) => state.loggedIn);
  const location = useLocation();

  if (!auth) {
    return <Navigate to="/signup" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
