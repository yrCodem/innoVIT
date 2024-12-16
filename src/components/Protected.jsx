import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Protected = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const validateToken = async () => {
      try {
        const response = await axios.get("https://innovit-server.onrender.com/api/auth/validate-token", { withCredentials: true });
        if (response.data.valid) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        setIsAuthenticated(false);
        navigate("/login"); 
      } finally {
        setLoading(false);
      }
    };

    validateToken();
  }, [navigate]);

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (!isAuthenticated) {
    return <div>You need to sign in to access this content.</div>; 
  }

  return (
    <div>
      {/* Protected content goes here */}
      <h1>Welcome to the protected content!</h1>
    </div>
  );
};

export default Protected;
