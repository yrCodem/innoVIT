// src/utils/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react'
import { jwtDecode } from 'jwt-decode'

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

const isTokenValid = (token) => {
  if (!token) {
    console.log('No token provided')
    return null
  }
  try {
    const decoded = jwtDecode(token)
    return decoded.exp * 1000 > Date.now() ? decoded : null
  } catch (e) {
    console.log('Token validation error:', e)
    return null
  }
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  const login = (token, userData) => {
    setToken(token)
    setUser(userData)
    setIsAuthenticated(true)
    localStorage.setItem('token', token)
    localStorage.setItem('user', JSON.stringify(userData))
  }

  const logout = () => {
    setToken(null)
    setUser(null)
    setIsAuthenticated(false)
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }

  const getUserEmail = () => {
    return user?.email || null
  }

  const getUsername = () => {
    return user?.username || null
  }

  useEffect(() => {
    const savedToken = localStorage.getItem('token')
    const savedUser = localStorage.getItem('user')
    const decoded = isTokenValid(savedToken)

    if (decoded && savedUser) {
      setToken(savedToken)
      setUser(JSON.parse(savedUser))
      setIsAuthenticated(true)

      if (decoded.exp) {
        const timeout = decoded.exp * 1000 - Date.now()
        if (timeout > 0) {
          setTimeout(() => logout(), timeout)
        } else {
          logout()
        }
      }
    } else {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
    }

    setLoading(false)
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated,
        loading,
        login,
        logout,
        getUserEmail,
        getUsername,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  )
}
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
