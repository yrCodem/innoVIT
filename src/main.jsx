import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { ClerkProvider } from "@clerk/clerk-react";
import ReactDOM from "react-dom/client";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ClerkProvider
        publishableKey={PUBLISHABLE_KEY}
        afterSignOutUrl="/"
        appearance={{
          variables: {
            colorPrimary: "#F0ECE5",
            colorText: "#F0ECE5",
            colorTextSecondary: "#F0ECE5",
            colorTextOnPrimaryBackground: "#F0ECE5",
            colorBackground: "#080912",
            colorNeutral: "#F0ECE5",
            colorInputText: "#F0ECE5",
            colorInputBackground: "#0e0f1a",
          },

          elements: {
            button: {
              fontFamily: "Arial, sans-serif", // Custom font family
              fontWeight: "bold", // Set font weight to bold globally
            },
          },
        }}
      >
        <App />
      </ClerkProvider>
    </BrowserRouter>
  </React.StrictMode>
);
