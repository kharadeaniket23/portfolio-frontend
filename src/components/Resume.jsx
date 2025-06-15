import React from "react";

const Resume = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">Resume</h1>

      {/* Summary */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Summary</h2>
        <p className="text-gray-700">
          Enthusiastic and results-driven full-stack developer with a passion for
          building user-centric web applications. Skilled in React, Node.js,
          PostgreSQL, and cloud services like AWS and Render.
        </p>
      </section>

      {/* Education */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Education</h2>
        <div>
          <h3 className="text-lg font-semibold">B.E. in Computer Engineering</h3>
          <p className="text-gray-700">NBN Sinhgad School of Engineering, Pune – 2024</p>
        </div>
      </section>

      {/* Experience */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Experience</h2>
        <div>
          <h3 className="text-lg font-semibold">Full Stack Intern – ABC Tech</h3>
          <p className="text-gray-700">
            Built StayFinder, an Airbnb-like app using React, Node.js, PostgreSQL.
            Implemented listing, booking, and admin modules. Integrated with Render & Vercel.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Skills</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Frontend: React, Tailwind CSS, Next.js</li>
          <li>Backend: Node.js, Express.js, Sequelize</li>
          <li>Database: PostgreSQL, MySQL</li>
          <li>Deployment: Render, Vercel, GitHub</li>
        </ul>
      </section>

      {/* Download Button */}
      <div className="mt-6">
        <a
          href="/resume.pdf" // 🔁 Replace with actual path or external link
          download
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Download Resume (PDF)
        </a>
      </div>
    </div>
  );
};

export default Resume;
