import * as React from "react";
import { Navigate, Route, useLocation } from "react-router-dom";

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  let auth = false;
  let location = useLocation();

  if (!auth) {
    return <Navigate to="/signup" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
