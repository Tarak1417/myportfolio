import React, { useState, useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const projects = [
  {
    id: 1,
    name: "Projects",
    color: "bg-gray-200", // Default color
    image: "https://i.imgur.com/pZiZJFh.png",
    details: "Professional team and portrait photography for branding.",
    link: "https://ship-rocket-project.vercel.app/" // Better link
  },
  {
    id: 2,
    name: "HR Dashboard",
    color: "bg-gray-200", // Default color
    image: "https://i.imgur.com/JgDz9K5.png",
    details: "HR Dashboard project to manage employees and tasks.",
    link: "https://tarak-t.vercel.app/walkover" // Better link
  },
  {
    id: 3,
    name: "Minimal Photography",
    color: "bg-gray-100", // Default color
    image: "https://i.imgur.com/NVUVuhI.png",
    details: "its an simple e-commers website",
    link: "https://rentalproject-six.vercel.app/" // Better link
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const { selectedColor } = useContext(ThemeContext);

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 w-screen text-white">
      {/* Header */}
      <h1 className="text-4xl text-center font-bold mb-8 mt-[100px]">
        My <span style={{ color: selectedColor }}>Portfolio</span>
      </h1>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto mt-[50px]">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.link} // Link to project
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg overflow-hidden cursor-pointer"
            style={{
              borderColor: selectedColor,
              borderWidth: "3px",
              height: "180px"
            }}
          >
            <div className="flex items-center justify-center h-full">
              <img
                src={project.image}
                alt={project.name}
                className="object-cover w-full h-full"
              />
            </div>
          </a>
        ))}
      </div>

      {/* Modal Section */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-lg">
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: selectedColor }}
            >
              {selectedProject.name}
            </h2>
            <p className="text-gray-700 mb-6">{selectedProject.details}</p>
            <img
              src={selectedProject.image}
              alt={selectedProject.name}
              className="w-full rounded mb-4"
            />
            <button
              className="text-white px-4 py-2 rounded"
              style={{ backgroundColor: selectedColor }}
              onClick={() => setSelectedProject(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
