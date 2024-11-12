import { Navigate, Outlet } from "react-router-dom";
import { getFromLocalStorage } from "src/shared/lib";

export const AdminRoute = () => {
  const isAdmin = getFromLocalStorage("isAdministrator");

  return isAdmin ? <Outlet /> : <Navigate to="/" replace />;
};
