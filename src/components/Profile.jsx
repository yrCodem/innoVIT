import React, { useState, useEffect } from "react";
import { useAuth } from "../utils/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import {
  User,
  Lock,
  Camera,
  LogOut,
  Save,
  X,
  Shield,
  Mail,
  CheckCircle,
  RefreshCw,
  AlertCircle,
  HelpCircle,
  Loader2
} from 'lucide-react';
import { Button } from "../components/ui/Button.jsx";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card.jsx";
import { Input } from "../components/ui/Input.jsx";

const Profile = () => {
  const { user, logout, isAuthenticated, updateUser, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const API_URL = import.meta.env.MODE === 'development'
    ? 'http://localhost:5000'
    : 'https://innovit-backend.onrender.com';

  // State for profile management
  const [isEditing, setIsEditing] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [profileData, setProfileData] = useState({
    username: "",
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [profilePicture, setProfilePicture] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);

  // Initialize profile data once auth is loaded and user data is available
  useEffect(() => {
    if (!authLoading) {
      if (user) {
        setProfileData(prev => ({
          ...prev,
          username: user.username || "",
          email: user.email || "user.reg@vitbhopal.ac.in"
        }));
        generateRandomAvatar();
      }
      setPageLoading(false);
    }
  }, [authLoading, user]);

  // Generate random avatar like Reddit
  const generateRandomAvatar = () => {
    const colors = [
      '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7',
      '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9',
      '#F8C471', '#82E0AA', '#F1948A', '#85C1E9', '#D7BDE2'
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const initials = user?.username ? user.username.charAt(0).toUpperCase() : 'U';

    // Create SVG avatar
    const svg = `
      <svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <rect width="120" height="120" fill="${randomColor}" rx="60"/>
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
              fill="white" font-family="Arial, sans-serif" font-size="48" font-weight="bold">
          ${initials}
        </text>
      </svg>
    `;
    setProfilePicture(`data:image/svg+xml;base64,${btoa(svg)}`);
  };

  // Handle logout confirmation
  const handleLogoutClick = () => {
    setShowLogoutConfirm(true);
  };

  // Handle confirmed logout
  const handleConfirmLogout = async () => {
    setIsLoggingOut(true);
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
        toast.success(response.data.message || "Logged out successfully!");
        navigate("/login");
      }
    } catch (error) {
      console.error("Logout error:", error);
      // Even if API call fails, clear local storage and context
      logout();
      toast.success("Logged out successfully!");
      navigate("/login");
    } finally {
      setIsLoggingOut(false);
      setShowLogoutConfirm(false);
    }
  };

  // Cancel logout
  const handleCancelLogout = () => {
    setShowLogoutConfirm(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleUsernameUpdate = async (e) => {
    e.preventDefault();
    if (!profileData.username.trim()) {
      toast.error("Username cannot be empty");
      return;
    }

    setIsLoading(true);
    try {
      // Call your backend API to update username
      const response = await axios.put(
        `${API_URL}/api/auth/update-profile`,
        { username: profileData.username },
        {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        }
      );

      if (response.data.success) {
        // Update user context with new username
        updateUser({ username: profileData.username });

        toast.success("Username updated successfully!");
        setIsEditing(false);
      }
    } catch (error) {
      console.error('Update username error:', error);
      toast.error(error.response?.data?.message || "Failed to update username");
    } finally {
      setIsLoading(false);
    }
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();

    if (profileData.newPassword !== profileData.confirmPassword) {
      toast.error("New passwords do not match");
      return;
    }

    if (profileData.newPassword.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }

    setIsLoading(true);
    try {
      // Call your backend API to change password
      const response = await axios.put(
        `${API_URL}/api/auth/change-password`,
        {
          currentPassword: profileData.currentPassword,
          newPassword: profileData.newPassword
        },
        {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        }
      );

      if (response.data.success) {
        toast.success("Password updated successfully!");
        setIsChangingPassword(false);
        setProfileData(prev => ({
          ...prev,
          currentPassword: "",
          newPassword: "",
          confirmPassword: ""
        }));
      }
    } catch (error) {
      console.error('Change password error:', error);
      toast.error(error.response?.data?.message || "Failed to update password");
    } finally {
      setIsLoading(false);
    }
  };

  const resetForms = () => {
    setIsEditing(false);
    setIsChangingPassword(false);
    setProfileData(prev => ({
      ...prev,
      currentPassword: "",
      newPassword: "",
      confirmPassword: ""
    }));
  };

  // Show loading screen while auth is initializing
  if (authLoading || pageLoading) {
    return (
      <div className="relative top-[13vh] min-h-[87vh] bg-background flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
          <p className="text-muted-foreground">Loading profile...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="relative top-[13vh] max-h-[87vh] min-h-[87vh] w-[95vw] mx-auto bg-secondary flex items-center justify-center">
        <Card className="w-96 text-center">
          <CardContent className="pt-6">
            <User className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
            <h2 className="text-2xl font-bold mb-2">Authentication Required</h2>
            <p className="text-muted-foreground mb-6">
              Please log in to view your profile.
            </p>
            <Button onClick={() => navigate("/login")} className="w-full">
              Go to Login
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="relative top-[13vh] min-h-[87vh] bg-background">
      {/* Logout Confirmation Modal */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-red-100 rounded-full">
                <HelpCircle className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Confirm Logout
              </h3>
            </div>

            <p className="text-gray-600 mb-6">
              Are you sure you want to log out? You'll need to sign in again to access your account.
            </p>

            <div className="flex gap-3 justify-end">
              <Button
                variant="outline"
                onClick={handleCancelLogout}
                disabled={isLoggingOut}
                className="px-4 py-2 bg-gray-500 hover:bg-gray-800"
              >
                Cancel
              </Button>
              <Button
                variant="destructive"
                onClick={handleConfirmLogout}
                disabled={isLoggingOut}
                className="px-4 py-2 flex items-center gap-2 bg-red-400 hover:bg-red-600"
              >
                {isLoggingOut ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    Logging out...
                  </>
                ) : (
                  <>
                    <LogOut className="w-4 h-4" />
                    Logout
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Header Section */}
      <div className="bg-secondary border-b border-border">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div className="flex items-center gap-6">
              <div className="relative">
                <img
                  src={profilePicture}
                  alt="Profile"
                  className="w-20 h-20 rounded-full border-4 border-primary shadow-lg"
                />
                <button
                  onClick={generateRandomAvatar}
                  className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground p-2 rounded-full shadow-lg hover:bg-primary/90 transition-colors"
                  title="Generate new avatar"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
              </div>
              <div>
                <h1 className="text-3xl font-black text-textColor">
                  {user?.username || "User"}
                </h1>
                <p className="text-muted-foreground flex items-center gap-2 mt-1">
                  <Mail className="w-4 h-4" />
                  {user?.email || profileData.email}
                </p>
                {/* Privacy Disclaimer */}
                <div className="flex items-center gap-2 mt-2 text-xs text-amber-600 bg-amber-50 px-3 py-1 rounded-full w-fit">
                  <AlertCircle className="w-3 h-3" />
                  <span>For privacy, avoid using your real name as username</span>
                </div>
              </div>
            </div>
            <Button
              onClick={handleLogoutClick}
              variant="destructive"
              className="flex items-center gap-2 px-6 py-3"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      {/* Profile Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Account Settings Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" />
                Account Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Username Update Section */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">Username</h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      This is your public display name
                    </p>
                  </div>
                  {!isEditing ? (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setIsEditing(true)}
                    >
                      Change
                    </Button>
                  ) : (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={resetForms}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  )}
                </div>

                {!isEditing ? (
                  <p className="text-lg font-medium text-textColor p-3 bg-muted rounded-lg">
                    {user?.username || "No username set"}
                  </p>
                ) : (
                  <form onSubmit={handleUsernameUpdate} className="space-y-3">
                    <Input
                      type="text"
                      name="username"
                      value={profileData.username}
                      onChange={handleInputChange}
                      placeholder="Enter new username"
                      className="w-full"
                    />
                    <div className="flex gap-2">
                      <Button
                        type="submit"
                        disabled={isLoading}
                        className="flex items-center gap-2"
                      >
                        {isLoading ? (
                          <RefreshCw className="w-4 h-4 animate-spin" />
                        ) : (
                          <Save className="w-4 h-4" />
                        )}
                        Save
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={resetForms}
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                )}
              </div>

              {/* Email Section (Read-only) */}
              <div className="space-y-2">
                <h3 className="font-semibold flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email Address
                </h3>
                <p className="text-muted-foreground p-3 bg-muted rounded-lg">
                  {user?.email || profileData.email}
                </p>
                <p className="text-xs text-muted-foreground">
                  University email cannot be changed
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Security Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Security
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Password Change Section */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">Password</h3>
                  {!isChangingPassword ? (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setIsChangingPassword(true)}
                    >
                      Change
                    </Button>
                  ) : (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={resetForms}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  )}
                </div>

                {!isChangingPassword ? (
                  <div className="p-3 bg-muted rounded-lg">
                    <p className="text-muted-foreground">••••••••</p>
                  </div>
                ) : (
                  <form onSubmit={handlePasswordChange} className="space-y-3">
                    <Input
                      type="password"
                      name="currentPassword"
                      value={profileData.currentPassword}
                      onChange={handleInputChange}
                      placeholder="Current password"
                      className="w-full"
                      required
                    />
                    <Input
                      type="password"
                      name="newPassword"
                      value={profileData.newPassword}
                      onChange={handleInputChange}
                      placeholder="New password"
                      className="w-full"
                      required
                    />
                    <Input
                      type="password"
                      name="confirmPassword"
                      value={profileData.confirmPassword}
                      onChange={handleInputChange}
                      placeholder="Confirm new password"
                      className="w-full"
                      required
                    />
                    <div className="flex gap-2">
                      <Button
                        type="submit"
                        disabled={isLoading}
                        className="flex items-center gap-2"
                      >
                        {isLoading ? (
                          <RefreshCw className="w-4 h-4 animate-spin" />
                        ) : (
                          <Lock className="w-4 h-4" />
                        )}
                        Update Password
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={resetForms}
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                )}
              </div>

              {/* Privacy Section */}
              <div className="space-y-3">
                <h3 className="font-semibold flex items-center gap-2">
                  <Camera className="w-4 h-4" />
                  Profile Picture
                </h3>
                <p className="text-sm text-muted-foreground">
                  Your profile picture is randomly generated to maintain anonymity.
                  Click the refresh button to get a new one!
                </p>
                <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                  <img
                    src={profilePicture}
                    alt="Current avatar"
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-medium">Random Avatar</p>
                    <p className="text-xs text-muted-foreground">
                      Protects your identity
                    </p>
                  </div>
                  <CheckCircle className="w-5 h-5 text-green-500 ml-auto" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stats Card */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Profile Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-muted rounded-lg">
                  <p className="text-2xl font-bold text-gray-500">0</p>
                  <p className="text-sm text-muted-foreground">Posts</p>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <p className="text-2xl font-bold text-green-500">0</p>
                  <p className="text-sm text-muted-foreground">Comments</p>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <p className="text-2xl font-bold text-blue-500">0</p>
                  <p className="text-sm text-muted-foreground">Likes</p>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <p className="text-2xl font-bold text-purple-500">0</p>
                  <p className="text-sm text-muted-foreground">Challenges</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;


// import React from "react";
// import { useAuth } from "../utils/AuthContext.jsx";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { toast } from "react-toastify";

// const Profile = () => {
//   const { currentUser, logout, isAuthenticated } = useAuth();
//   const navigate = useNavigate();
//   const API_URL =
//     import.meta.env.VITE_NODE_ENV === "production"
//       ? "https://innovit-server.onrender.com"
//       : "http://localhost:5000";

//   const handleLogout = async () => {
//     try {
//       const response = await axios.post(
//         `${API_URL}/api/auth/logout`,
//         {},

//         {
//           withCredentials: true,
//         }
//       );

//       if (response.status === 200) {
//         logout();
//         toast.success(response.data.message);
//         navigate("/login");
//       }
//     } catch (error) {
//       toast.error("Error during logout.");
//     }
//   };

//   return (
//     <div className="relative top-[13vh] max-h-[87vh] min-h-[87vh] w-[95vw] mx-auto bg-secondary">
//       <div className="bg-secondary border-b border-tertiary p-8">
//         <div>
//           {isAuthenticated ? (
//             <div className="flex flex-row justify-between items-center">
//               <h1 className="text-4xl font-black text-textColor m-1">
//                 {currentUser}
//               </h1>
//               <div>
//                 <button
//                   onClick={handleLogout}
//                   className="px-8 py-3 font-semibold rounded-md bg-red-400 text-gray-900"
//                 >
//                   Logout
//                 </button>
//               </div>
//             </div>
//           ) : (
//             <div className="flex flex-col items-start">
//               <h1 className="my-3 text-4xl font-bold text-textColor">
//                 Please log in to view your profile.
//               </h1>
//             </div>
//           )}
//         </div>
//       </div>
//       <div className="w-full h-64 flex items-center justify-center text-4xl text-center font-black ">
//         Profile Actions like Change Password, Change Profile Picture will go
//         here...
//       </div>
//     </div>
//   );
// };

// export default Profile;
