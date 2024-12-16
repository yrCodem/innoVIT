import React from "react";

const NotLoggedIn = () => {
  return (
    <div className="flex h-[86vh] min-h-[86vh] max-h-[86vh] w-full justify-center items-center flex-col">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="100px"
        viewBox="0 -960 960 960"
        width="100px"
        fill="#F0ECE5"
      >
        <path d="M480-120q-33 0-56.5-23.5T400-200q0-33 23.5-56.5T480-280q33 0 56.5 23.5T560-200q0 33-23.5 56.5T480-120Zm-80-240v-480h160v480H400Z" />
      </svg>
      <h3 className="w-[50%] text-[2rem] font-bold tracking-wide mb-4 text-center">
        Please Login First to view Content...!
      </h3>
    </div>
  );
};

export default NotLoggedIn;
