import { Navigate } from "react-router-dom";
import React from 'react';

export const ProtectedRoute = ({ children }) => {
  if (!localStorage.getItem("currentUser")) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute