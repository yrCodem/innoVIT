import React from "react";
import { useAuth } from "../utils/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Profile = () => {
  const { currentUser, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const API_URL =
    import.meta.env.VITE_NODE_ENV === "production"
      ? "https://innovit-server.onrender.com"
      : "http://localhost:5000";

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        `${API_URL}/api/auth/logout`,
        {},

        {
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        logout();
        toast.success(response.data.message);
        navigate("/login");
      }
    } catch (error) {
      toast.error("Error during logout.");
    }
  };

  return (
    <div className="relative top-[13vh] max-h-[87vh] min-h-[87vh] w-[95vw] mx-auto bg-secondary">
      <div className="bg-secondary border-b border-tertiary p-8">
        <div>
          {isAuthenticated ? (
            <div className="flex flex-row justify-between items-center">
              <h1 className="text-4xl font-black text-textColor m-1">
                {currentUser}
              </h1>
              <div>
                <button
                  onClick={handleLogout}
                  className="px-8 py-3 font-semibold rounded-md bg-red-400 text-gray-900"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-start">
              <h1 className="my-3 text-4xl font-bold text-textColor">
                Please log in to view your profile.
              </h1>
            </div>
          )}
        </div>
      </div>
      <div className="w-full h-64 flex items-center justify-center text-4xl text-center font-black ">
        Profile Actions like Change Password, Change Profile Picture will go
        here...
      </div>
    </div>
  );
};

export default Profile;
