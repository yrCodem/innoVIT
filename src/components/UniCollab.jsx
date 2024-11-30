import { SignedIn, SignedOut } from "@clerk/clerk-react";
import React from "react";
import { Link } from "react-router-dom";

const UniCollab = () => {
  return (
    <div className="max-w-[100vw] font-sora relative top-[13vh]">
      <SignedIn>
        <div>unicollab page</div>
      </SignedIn>

      <SignedOut>
        <div className="flex h-[86vh] min-h-[86vh] max-h-[86vh] w-full justify-center items-center flex-col">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="100px"
            viewBox="0 -960 960 960"
            width="100px"
            fill="#F0ECE5"
          >
            <path d="M479.91-120q-28.91 0-49.41-20.59-20.5-20.59-20.5-49.5t20.59-49.41q20.59-20.5 49.5-20.5t49.41 20.59q20.5 20.59 20.5 49.5t-20.59 49.41q-20.59 20.5-49.5 20.5ZM410-360v-480h140v480H410Z" />
          </svg>

          <h3 className="w-[50%] text-[2rem] font-semibold tracking-wide mb-4 text-center">
            <span className="font-black text-tertiary"> Oops! </span> Looks like
            you're not signed in. Please sign up or log in to access this
            feature!{" "}
          </h3>
          <Link to={"/sign-in"}>
            <div className="font-sora text-xl bg-textColor text-primary font-black p-4 pl-8 pr-8 rounded-full">
              Sign in
            </div>
          </Link>
        </div>
      </SignedOut>
    </div>
  );
};

export default UniCollab;
