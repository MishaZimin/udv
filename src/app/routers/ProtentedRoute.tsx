import { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { getFromLocalStorage, saveToLocalStorage } from "src/shared/lib";
import { Loader } from "src/shared/ui";
import { useProfile } from "src/widgets/profile-info/api/queryes/use-profile";

export const ProtectedRoutes = () => {
  const token = getFromLocalStorage("token");
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);

  if (!token) {
    return <Navigate to="/auth" replace />;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { profile, error, isLoading } = useProfile();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (profile && token) {
      console.log(profile.administration);
      saveToLocalStorage("isAdministrator", profile.administration);
      setIsAdmin(Boolean(profile.administration));
    }
  }, [profile, token]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <p>error</p>;
  }

  if (isAdmin === null) {
    return null;
  }

  return isAdmin ? <Outlet /> : <Navigate to="/" replace />;
};
