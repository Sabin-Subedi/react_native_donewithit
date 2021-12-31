import React, { useContext } from "react";
import AuthConxtext from "../auth/context";
import authStorage from "../auth/storage";
import jwtDecode from "jwt-decode";

export default function useAuth() {
  const { user, setUser } = useContext(AuthConxtext);

  const handleLogout = () => {
    setUser(null);
    authStorage.removeToken();
  };

  const handleLogin = (authToken) => {
    const user = jwtDecode(authToken);
    authStorage.storeToken(authToken);
    setUser(user);
  };

  return { user, setUser, handleLogout, handleLogin };
}
