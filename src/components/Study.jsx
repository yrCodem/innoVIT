import React from "react";
import OS from './content/OS.jsx'

const Study = () => {
  return (
    <div className="study-main-container flex overflow-x-hidden max-w-[100vw] font-sora">
      <div className="study-sidebar w-[20vw] min-w-[20rem] max-w-[20vw] h-[86vh] bg-secondary rounded-[20px] ml-2 mr-2 mb-2">
        <div className="study-sidebar-heading-wrapper m-2 overflow-x-hidden flex flex-col items-center mb-8">
          <div className="w-full">
          <h2 className="text-xl tracking-wider ml-1">Available Courses</h2>
          </div>
          <input type="text" className="w-full mt-2 p-[5px] rounded-md bg-[#1a1c2b] focus:outline-none mb-[1.2rem]" placeholder="Search Cources by Course Code" />
          <span className="min-w-[90%] border-b-[1px] border-gray-600 mb-[1.2rem]"></span>
        </div>
        
      </div>
      <div className="study-content-wrapper w-full h-[86vh] bg-secondary rounded-[20px] ml-2 mr-2 mb-2 overflow-x-hidden overflow-y-scroll hide-scrollbar p-8">
        <OS/>
      </div>
    </div>
  );
};

export default Study;
