import React from "react";
// import {ClerkProvider, RedirectToSignIn, SignedIn, SignedOut, SignIn, SignUp} from '@clerk/clerk-react';  
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { Routes, Route } from "react-router-dom";  
import '../index.css'

const Login = () => {
  return (
    <header >
      <SignedOut>
        {/* <RedirectToSignIn /> */}
        {/* <SignInButton className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4 relative " /> */}
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
}


export default Login;
