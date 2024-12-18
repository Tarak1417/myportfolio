import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext'; // Import ThemeContext

const Home = () => {
  const { selectedColor } = useContext(ThemeContext); // Use selectedColor from ThemeContext

  return (
    <section
      className="flex flex-col md:flex-row items-center justify-between h-screen bg-gray-900 text-white p-6"
      // Apply the theme color globally as the background
    >
      {/* Left Section - Profile Image */}
      {/* <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="" // Add your image URL here
          alt="Profile"
          className="rounded-lg shadow-lg w-80 h-80 object-cover"
        />
      </div> */}

      {/* Right Section - Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-6 mt-6 md:mt-0">
        <h1 className="text-4xl md:text-5xl font-bold">
          {/* Apply selected color dynamically */}
          <span style={{ color: selectedColor }}>I'm Achanta Tarak.</span>
          <br /> Web Designer
        </h1>
        <p className="text-gray-300 text-lg md:text-l">
          I'm a Tunisian-based web designer & front-end developer focused on
          crafting clean & user-friendly experiences. I am passionate about
          building excellent software that improves the lives of those around
          me.
        </p>
        <div>
          <a
            href="/user"
            className="hover:bg-opacity-90 text-white px-6 py-3 rounded-full shadow-md transition duration-300"
            style={{
              backgroundColor: selectedColor, // Dynamic button background
            }}
          >
            More About Me →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
