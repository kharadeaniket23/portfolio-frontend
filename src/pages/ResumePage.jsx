import React from "react";
import Resume from "../components/Resume"; // Adjust path if needed

const ResumePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-700 mb-8 text-center">My Resume</h1>
        <Resume />
      </div>
    </div>
  );
};

export default ResumePage;
