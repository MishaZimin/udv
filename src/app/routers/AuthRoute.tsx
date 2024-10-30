import { Outlet, Navigate } from "react-router-dom";

export const AuthRoutes = () => {
  const token = localStorage.getItem("token");

  if (token) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};
