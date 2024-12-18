import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import SkillsSection from './SkillsSection';
import ExperienceEducation from "./ExperienceEducation"

const Profile = () => {
  const { selectedColor } = useContext(ThemeContext); // Use selectedColor from ThemeContext
  const themeColor = selectedColor || '#8b5cf6'; // Fallback color

  return (
    <section className="flex flex-col min-h-screen bg-gray-900 w-screen text-white px-4 md:pr-[100px]">
      {/* Top Section - About Me Title */}
      <div className="text-center mb-8 md:mb-[100px] mt-6">
        <h1 className="text-3xl md:text-5xl font-bold">
          <span style={{ color: selectedColor }}>About</span> Me
        </h1>
      </div>

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row w-full justify-between space-y-12 md:space-y-0 px-4 md:px-16">
        {/* Personal Info Section */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-2xl font-semibold text-white">Personal Info</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-10 text-gray-300 text-base">
            <div>
              <p>
                <span className="font-bold text-white">First Name:</span> Tarak
              </p>
              <p>
                <span className="font-bold text-white">Age:</span> 23 Years
              </p>
              <p>
                <span className="font-bold text-white">Freelance:</span>{' '}
                <span style={{ color: selectedColor }}>Available</span>
              </p>
              <p>
                <span className="font-bold text-white">Phone:</span> +91 8008434124
              </p>
            </div>
            <div>
              <p>
                <span className="font-bold text-white">Last Name:</span> Achanta
              </p>
              <p>
                <span className="font-bold text-white">Nationality:</span> India
              </p>
              <p>
                <span className="font-bold text-white">Address:</span>
              </p>
              <p>
                <span className="font-bold text-white">Email:</span> achantatarak@gmail.com
              </p>
              <p>
                <span className="font-bold text-white">Languages:</span> Telugu, English
              </p>
            </div>
          </div>
          <button
            className="hover:scale-105 transform transition duration-300 text-white px-6 py-3 rounded-full mt-4 shadow-lg w-full sm:w-auto"
            style={{ backgroundColor: themeColor }}
            aria-label="Download CV"
          >
            <span>Download CV</span>
            <i className="fas fa-download ml-2"></i>
          </button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 gap-6 sm:gap-8 text-center w-full md:w-1/2">
          {[
            { value: '1+', label: 'Years of Experience' },
            { value: '10+', label: 'Completed Projects' },
            { value: '2+', label: 'Happy Customers' },
            { value: '5+', label: 'Certified' },
          ].map((stat, index) => (
            <div
              key={index}
              className="border border-gray-700 p-6 rounded-md hover:shadow-lg transition-transform transform hover:scale-105"
            >
              <h2 className="text-3xl md:text-4xl font-bold" style={{ color: themeColor }}>
                {stat.value}
              </h2>
              <p className="text-gray-400 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Skills Section */}
      <div className="mt-12 md:mt-16 px-4">
        <SkillsSection />
      </div>
      <div className="mt-12 md:mt-16 px-4">
        <ExperienceEducation />
      </div>
    </section>
  );
};

export default Profile;
