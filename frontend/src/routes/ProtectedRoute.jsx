import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    alert("Please log in to access this page.");
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;