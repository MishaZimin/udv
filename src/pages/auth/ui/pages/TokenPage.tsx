import { getFromLocalStorage, saveToLocalStorage } from "src/shared/lib";
import { useAuth } from "../../api/queryes/use-user-auth";
import { useProfile } from "src/widgets/profile-info/api/queryes/use-profile";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Loader } from "src/shared/ui";

export const TokenPage = () => {
  const navigate = useNavigate();

  const pathSegments = window.location.pathname.split("/");
  const urlToken = pathSegments[pathSegments.length - 1];

  const { token, error, isLoading } = useAuth(urlToken);

  const [isTokenSaved, setIsTokenSaved] = useState(false);

  const {
    profile,
    error: profileError,
    isLoading: isProfileLoading,
  } = useProfile();

  useEffect(() => {
    if (token && !isLoading) {
      saveToLocalStorage("token", token.success);
      setIsTokenSaved(true);

      console.log("saved token:", getFromLocalStorage("token"));
    }
  }, [token, isLoading]);

  useEffect(() => {
    if (isTokenSaved && profile && !isProfileLoading) {
      console.log("profile", profile.administration);
      saveToLocalStorage("isAdministrator", profile.administration);
      navigate("/");
    }
  }, [isTokenSaved, profile, isProfileLoading, navigate]);

  if (isLoading || isProfileLoading) return <Loader />;
  if (error) return <>error: {error.message}</>;
  if (profileError) return <>error: {profileError.message}</>;

  return <></>;
};
