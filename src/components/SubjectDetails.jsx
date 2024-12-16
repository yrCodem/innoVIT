import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import NotLoggedIn from "./NotLoggedin.jsx";
import axios from "axios";

const SubjectDetails = () => {
  const { subjectCode } = useParams();
  const [subject, setSubject] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeModule, setActiveModule] = useState(null);

  const moduleRefs = useRef([]);

  const API_URL =
    import.meta.env.VITE_NODE_ENV === "production"
      ? "https://innovit-server.onrender.com"
      : "http://localhost:5000";

  useEffect(() => {
    const fetchSubject = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/api/subjects/${subjectCode}`,
          {
            withCredentials: true,
          }
        );
        setSubject(response.data.subject);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching subject details:", error.message);
        setLoading(false);
        setErrorMsg(error.response?.data?.message);
      }
    };

    fetchSubject();
  }, [subjectCode]);

  const handleModuleClick = (moduleIndex) => {
    setActiveModule((prevIndex) =>
      prevIndex === moduleIndex ? null : moduleIndex
    );

    setTimeout(() => {
      if (moduleRefs.current[moduleIndex]) {
        moduleRefs.current[moduleIndex].scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!subject) {
    return <NotLoggedIn />;
  }

  return (
    <div className="study-content-wrapper h-[86vh] min-h-[86vh] max-h-[86vh] w-full flex flex-col">
      <div className="w-full bg-secondary rounded-[20px] ml-2 mr-2 mb-2 min-h-fit overflow-x-hidden overflow-y-scroll hide-scrollbar p-4 pl-8">
        <h1 className="text-[2rem] font-bold text-textColor">
          {subject.mainTitle}
        </h1>
      </div>
      <div className="flex flex-col w-full h-fill bg-secondary rounded-[20px] ml-2 mr-2 overflow-x-hidden overflow-y-scroll hide-scrollbar p-4">
        {subject.modules.map((module, moduleIndex) => (
          <div
            key={moduleIndex}
            ref={(el) => (moduleRefs.current[moduleIndex] = el)}
          >
            <button
              className="text-[1.5rem] font-bold tracking-widest mb-2 w-full text-left bg-secondary hover:bg-primary text-textColor p-4 rounded-xl flex justify-between items-center border border-gray-600"
              onClick={() => handleModuleClick(moduleIndex)}
            >
              {module.name}
              <svg
                className={`transform transition-transform ${
                  activeModule === moduleIndex ? "-rotate-90" : "rotate-90"
                } text-tertiary group-hover:text-primary`}
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 -960 960 960"
                width="20px"
                fill="currentColor"
              >
                <path d="M490-480 301-669l83-83 272 272-272 272-83-83 189-189Z" />
              </svg>
            </button>

            {activeModule === moduleIndex && (
              <div className="ml-4 mt-4">
                {module.topics.map((topic, topicIndex) => (
                  <div key={topicIndex}>
                    <h2 className="text-[2rem] font-bold tracking-widest mb-4 text-textColor">
                      {topic.heading}
                    </h2>
                    <p className="tracking-wide ml-16 mb-4 text-textColor text-lg">
                      {topic.content}
                    </p>
                    {topic.listItems.length > 0 && (
                      <ul className="list-disc tracking-wide ml-16 mb-4 text-textColor text-lg">
                        {topic.listItems.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubjectDetails;
