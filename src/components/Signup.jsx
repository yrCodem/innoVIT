import React from "react";
import { SignedOut, SignUp, SignedIn } from "@clerk/clerk-react";
import { dark } from "@clerk/themes";
import { motion } from "framer-motion";

import "../index.css";

const Signup = () => {
  return (
    <div className="relative top-[13vh]">
      <SignedOut>
      <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
        <div className="flex w-[100vw] h-[87vh] items-center flex-col">
          <h1 className="m-8 text-4xl font-black ">Sign Up</h1>
          <SignUp
            appearance={{
              variables: {
                colorPrimary: "#F0ECE5",
                colorText: "#F0ECE5",
                colorTextSecondary: "#F0ECE5",
                colorTextOnPrimaryBackground: "black",
                colorBackground: "#080912",
                colorNeutral: "#F0ECE5",
                colorInputText: "#F0ECE5",
                colorInputBackground: "#0e0f1a",
              },
              baseTheme: dark,
            }}
            signInUrl="/sign-in"
          />
        </div>
        </motion.div>
      </SignedOut>
      

      <SignedIn></SignedIn>
    </div>
  );
};

export default Signup;
