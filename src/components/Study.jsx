import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import axios from "axios";

const Study = () => {
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const API_URL =
    import.meta.env.VITE_NODE_ENV === "production"
      ? "https://innovit-server.onrender.com"
      : "http://localhost:5000";

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/subjects/subjectcode`);
        console.log(response.data);

        setSubjects(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching subjects:", error);
      }
    };

    fetchSubjects();
  }, []);

  const filteredSubjects = subjects.filter((subject) =>
    subject.subjectCode.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="study-main-container flex flex-col lg:flex-row max-w-[100vw] font-sora relative top-[13vh]">
      {/* Sidebar */}
      <div
        className={`study-sidebar ${
          isSidebarOpen ? "absolute" : "hidden"
        } lg:block lg:relative lg:w-[20vw] lg:min-w-[20rem] lg:h-[86vh] bg-secondary rounded-[20px] z-50 left-0 top-16 lg:top-0 lg:ml-2 lg:mr-2 mb-2 transition-transform duration-300 ease-in-out`}
      >
        <div className="study-sidebar-heading-wrapper m-2 flex flex-col items-center">
          {/* Sidebar Header */}
          <div className="w-full flex items-center justify-between lg:justify-start">
            <h2 className="text-xl tracking-wider ml-1">Available Courses</h2>
            {/* Close Button for Mobile */}
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="lg:hidden text-white p-2 rounded-md hover:bg-gray-700"
            >
              ✖
            </button>
          </div>

          {/* Search Bar */}
          <input
            type="text"
            className="w-full mt-2 p-[5px] rounded-md bg-[#1a1c2b] focus:outline-none mb-[1.2rem]"
            placeholder="Search Courses"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="min-w-[90%] border-b-[1px] border-gray-600"></span>
        </div>

        {/* Subjects List */}
       <div>
       <ul className="flex flex-col">
          {filteredSubjects.length > 0 ? (
            filteredSubjects.map((subject) => (
              <li
                key={subject._id}
                className="w-fill h-fill bg-secondary hover:bg-gray-800 flex items-center ml-2 mr-2 mt-2 rounded-lg p-1"
              >
                <svg
                  className="text-textColor group-hover:text-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  viewBox="0 -960 960 960"
                  width="20px"
                  fill="currentColor"
                >
                  <path d="M490-480 301-669l83-83 272 272-272 272-83-83 189-189Z" />
                </svg>
                <Link
                  to={`/study/${subject.subjectCode}`}
                  className="w-full h-full flex items-start justify-center px-2 mr-2 flex-col"
                >
                  <span className="text-sm font-bold ">
                    {subject.subjectCode}
                  </span>
                  <span className="text-[0.8rem] text-zinc-400">
                    {subject.mainTitle}
                  </span>
                </Link>
              </li>
            ))
          ) : (
            <li className="w-full text-center text-white mt-4">
              No subjects found
            </li>
          )}
        </ul>
       </div>
      </div>

      {/* Sidebar Toggle Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="lg:hidden fixed top-[13vh] left-2 z-50 bg-secondary text-white p-3 rounded-md"
      >
        ☰ Availabe Courses
      </button>

      {/* Main Content */}
      <div className="flex-grow mt-16 lg:mt-0">
        <Outlet />
      </div>
    </div>
  );
};

export default Study;
