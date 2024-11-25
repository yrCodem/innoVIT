import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SubjectDetails = () => {
  const { subjectName } = useParams();
  const [subject, setSubject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubject = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/subjects`);
        const subjectData = response.data.find(
          (sub) => sub.mainTitle === subjectName
        );
        setSubject(subjectData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching subject details:", error);
      }
    };

    fetchSubject();
  }, [subjectName]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!subject) {
    return <div>Subject not found.</div>;
  }

  return (
    <>
      <div className="study-content-wrapper h-[86vh] min-h-[86vh] max-h-[86vh] w-full flex flex-col ">
        <div className="w-full bg-secondary rounded-[20px] ml-2 mr-2 mb-2 min-h-fit overflow-x-hidden overflow-y-scroll hide-scrollbar p-4 pl-8">
          <h1 className="text-[2rem] font-bold">{subject.mainTitle}</h1>
        </div>
        <div className="flex flex-col w-full h-fill bg-secondary rounded-[20px] ml-2 mr-2 overflow-x-hidden overflow-y-scroll hide-scrollbar p-8">
          {subject.sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-[2rem] font-bold tracking-widest mb-2">
                {section.heading}
              </h2>
              <p className="tracking-wide ml-16 mb-4">{section.content}</p>
              {section.listItems.length > 0 && (
                <ul className="list-disc tracking-wide ml-16 mb-4">
                  {section.listItems.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SubjectDetails;