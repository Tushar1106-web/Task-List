import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { routes } from "./Routes";

const ProtectedRoute = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return isAuthenticated ? <Navigate to={routes.Todo} replace/> : <Outlet />;
};

export default ProtectedRoute;
