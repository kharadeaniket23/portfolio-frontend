import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-4">
          Hi, I'm Aniket 👋
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          I'm a Full Stack Developer passionate about building beautiful and scalable web applications.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/resume"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            View Resume
          </Link>
          <Link
            to="/projects"
            className="bg-gray-200 text-gray-800 px-6 py-2 rounded hover:bg-gray-300 transition"
          >
            My Projects
          </Link>
        </div>

        {/* Optional profile image */}
        <div className="mt-10">
          <img
            src="/profile.png" // place your image in `public/profile.png`
            alt="Aniket"
            className="mx-auto w-40 h-40 rounded-full shadow-md object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
