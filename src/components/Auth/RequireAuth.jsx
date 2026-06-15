import React from "react";
import { useUser } from "../../context/UserContext";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const { isLoggedIn } = useUser();
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAuth;
