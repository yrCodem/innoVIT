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
    <div className="flex flex-col">
      <h1 className="text-[3rem] font-bold mb-2">{subject.mainTitle}</h1>
      <span className="w-[90%] h-[1px] bg-gray-600 mb-4"></span>
      {subject.sections.map((section, index) => (
        <div key={index}>
          <h2 className="text-[2rem] font-bold tracking-widest mb-4">{section.heading}</h2>
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
  );

};

export default SubjectDetails;