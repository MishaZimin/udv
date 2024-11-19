import { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { getFromLocalStorage, saveToLocalStorage } from "src/shared/lib";
import { useProfile } from "src/widgets/profile-info/api/queryes/use-profile";

export const ProtectedRoutes = () => {
  const token = getFromLocalStorage("token");
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);

  const { profile, error, isLoading } = useProfile();

  useEffect(() => {
    if (profile && profile.administration !== null) {
      saveToLocalStorage("isAdministrator", profile.administration);
      setIsAdmin(Boolean(profile.administration));
    }
  }, [profile]);

  if (!token) {
    return <Navigate to="/auth" replace />;
  }

  if (isLoading || isAdmin === null) {
    return <div></div>;
  }

  if (error) {
    return <p>error</p>;
  }

  return <Outlet />;
};
