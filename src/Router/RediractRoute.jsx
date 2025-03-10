import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { routes } from "./Routes";

const RediractRoute = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return !isAuthenticated ? <Navigate to={routes.Login} /> : <Outlet />;
};

export default RediractRoute;
