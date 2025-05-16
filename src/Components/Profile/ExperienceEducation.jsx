import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext'; // Import ThemeContext

const ExperienceEducation = () => {
  const { selectedColor } = useContext(ThemeContext); // Use selectedColor dynamically

  const experienceEducationData = [
    { year: '2023 - PRESENT', title: 'Frontend Developer', company: 'Algoman', type: 'work' },
    { year: '2022', title: 'B.Sc Chemistry', company: 'MVN JS and RVR Degree College', type: 'education' },
    { year: '2022 - 2023', title: 'Frontend Developer(intern)', company: 'sky Scanner', type: 'intern' },
  ];

  return (
    <section className="w-full min-h-screen py-8 px-4 sm:px-6 md:px-12 text-gray-700">
      {/* Section Title */}
      <h2
        className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12"
        style={{ color: selectedColor }} // Dynamic color for title
      >
        Experience & Education
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {experienceEducationData.map((item, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 "
          >
            {/* Icon Section */}
            <div
              className="w-10 h-10 flex items-center justify-center rounded-full text-white flex-shrink-0"
              style={{ backgroundColor: selectedColor }} // Dynamic icon background
            >
              {item.type === 'work' ? (
                <i className="fas fa-briefcase text-lg"></i>
              ) : (
                <i className="fas fa-graduation-cap text-lg"></i>
              )}
            </div>

            {/* Content Section */}
            <div>
              <p className="text-gray-500 text-xs sm:text-sm font-semibold">{item.year}</p>
              <h3
                className="text-sm sm:text-base md:text-lg font-bold"
                style={{ color: selectedColor }} // Dynamic heading color
              >
                {item.title}{' '}
                <span className="text-gray-500 font-medium">— {item.company}</span>
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceEducation;
