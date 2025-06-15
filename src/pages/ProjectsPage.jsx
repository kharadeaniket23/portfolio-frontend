import React from "react";
import ProjectList from "../components/ProjectList";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-700 mb-8">Projects</h1>
        <ProjectList />
      </div>
    </div>
  );
};

export default ProjectsPage;
