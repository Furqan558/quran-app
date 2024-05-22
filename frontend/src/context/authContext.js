import React, { createContext, useContext, useState } from "react";
import loginWithMockUser from "../utils/login";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
    loginWithMockUser();
  };

  const logout = () => {
    setIsAuthenticated(false);
    // Remove token from local storage
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
