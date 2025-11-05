import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (userData) => {
    setCurrentUser(userData);
    setIsAuthenticated(true);
    // Simple localStorage for demo
    localStorage.setItem("currentUser", JSON.stringify(userData));
  };

const logout = () => {
  setCurrentUser(null);
  setIsAuthenticated(false);
  localStorage.removeItem('currentUser');
  localStorage.removeItem('isAuthenticated');
  localStorage.removeItem('token');
};

//   const logout = () => {
//     setCurrentUser(null);
//     setIsAuthenticated(false);
//     localStorage.removeItem("currentUser");
//   };

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


// import React, { createContext, useState, useContext, useEffect } from "react";

// const AuthContext = createContext();

// export const useAuth = () => useContext(AuthContext);

// export const AuthProvider = ({ children }) => {
//   const storedUser = localStorage.getItem("currentUser");
//   const storedAuthStatus = localStorage.getItem("isAuthenticated");

//   const [currentUser, setCurrentUser] = useState(
//     storedUser ? JSON.parse(storedUser) : null
//   );
//   const [isAuthenticated, setIsAuthenticated] = useState(
//     storedAuthStatus === "true" // Convert stored string value to boolean
//   );

//   useEffect(() => {
//     // Whenever currentUser or isAuthenticated changes, store them in localStorage
//     if (currentUser && isAuthenticated) {
//       localStorage.setItem("currentUser", JSON.stringify(currentUser));
//       localStorage.setItem("isAuthenticated", "true");
//     } else {
//       localStorage.removeItem("currentUser");
//       localStorage.removeItem("isAuthenticated");
//     }
//   }, [currentUser, isAuthenticated]);

//   const login = (userData) => {
//     setCurrentUser(userData);
//     setIsAuthenticated(true);
//   };


//   const logout = () => {
//     setCurrentUser(null);
//     setIsAuthenticated(false);
//   };

//   const value = {
//     currentUser,
//     isAuthenticated,
//     login,
//     logout,
//   };

//   return (
//     <AuthContext.Provider value={value}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
