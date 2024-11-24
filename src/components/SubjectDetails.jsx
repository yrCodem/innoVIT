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
    <div>
      <h1 className="text-3xl font-bold">{subject.mainTitle}</h1>
      {subject.sections.map((section, index) => (
        <div key={index}>
          <h2 className="text-2xl font-semibold mt-4">{section.heading}</h2>
          <p className="mt-2">{section.content}</p>
          {section.listItems.length > 0 && (
            <ul className="list-disc ml-6 mt-2">
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