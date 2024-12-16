import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const storedUser = localStorage.getItem("currentUser");
  const storedAuthStatus = localStorage.getItem("isAuthenticated");

  const [currentUser, setCurrentUser] = useState(
    storedUser ? JSON.parse(storedUser) : null
  );
  const [isAuthenticated, setIsAuthenticated] = useState(
    storedAuthStatus === "true" // Convert stored string value to boolean
  );

  useEffect(() => {
    // Whenever currentUser or isAuthenticated changes, store them in localStorage
    if (currentUser && isAuthenticated) {
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
      localStorage.setItem("isAuthenticated", "true");
    } else {
      localStorage.removeItem("currentUser");
      localStorage.removeItem("isAuthenticated");
    }
  }, [currentUser, isAuthenticated]);

  const login = (userData) => {
    setCurrentUser(userData);
    setIsAuthenticated(true);
  };
  

  const logout = () => {
    setCurrentUser(null);
    setIsAuthenticated(false);
  };

  const value = {
    currentUser,
    isAuthenticated,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
