import React, { useContext, useState } from "react";
import { ThemeContext } from "../ThemeContext";
import { Link } from "react-router-dom"; // Import Link from React Router
import { VscSettings } from "react-icons/vsc";
import { RxCross2 } from "react-icons/rx";
import { FaHome, FaUser, FaFolder, FaEnvelope } from "react-icons/fa"; // Import React Icons

const Sidebar = ({ children }) => {
  const { selectedColor, changeColor } = useContext(ThemeContext); // Access context
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeIcon, setActiveIcon] = useState(null); // Track active icon

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Handle icon click to set active icon
  const handleIconClick = (iconName) => {
    setActiveIcon(iconName);
  };

  return (
    <div className="flex h-full relative overflow-auto" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
    {/* Hides scrollbar for Chrome, Safari */}
    <style>
      {`
        ::-webkit-scrollbar {
          display: none;
        }
      `}
    </style>
      {/* Sidebar */}
      <div className=" fixed  w-16 flex flex-col items-center  pb-4">
        {/* Sidebar Header */}
        <button
          onClick={openModal}
          className="py-2 rounded-lg "
          style={{
            color: selectedColor,
          
            marginLeft: "20px",
           
          }}
        >
          <VscSettings size={25} />
        </button>
        
        {/* Icon Buttons on Right Side */}
        <div className=" fixed right-10 top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-4">
          {["", "user", "folder", "contact"].map((icon) => {
            let IconComponent;

            // Assign the correct icon based on the string
            switch (icon) {
              case "":
                IconComponent = FaHome;
                break;
              case "user":
                IconComponent = FaUser;
                break;
              case "folder":
                IconComponent = FaFolder;
                break;
              case "contact":
                IconComponent = FaEnvelope;
                break;
              default:
                IconComponent = FaHome; // Default icon
            }

            return (
              <Link to={`/${icon}`} key={icon}>
                <button
                  className={`rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:w-24 `}
                  style={{
                    background: activeIcon === icon ? selectedColor : "white", // Active background
                    color: activeIcon === icon ? "white" : "gray", // Active text color
                    width: "48px",
                    height: "48px",
                    transition: "all 0.3s ease-in-out", // Smooth transition
                  }}
                  onClick={() => handleIconClick(icon)} // Set active icon on click
                  // onMouseEnter={(e) => {
                  //   e.target.style.background = selectedColor // Hover background color
                  //   e.target.style.color = "white"; // Hover text color
                  //   e.target.style.width = "100px"; // Increase width on hover
                  // }}
                  // onMouseLeave={(e) => {
                  //   e.target.style.background =
                  //     activeIcon === icon ? selectedColor : "white"; // Reset to active or default
                  //   e.target.style.color =
                  //     activeIcon === icon ? "white" : ""; // Reset text color
                  //   e.target.style.width = "48px"; // Reset width
                  // }}
                >
                  <IconComponent size={24} />
                  <span
                    className="ml-2 text-sm opacity-0 transition-all duration-300 hover:opacity-100"
                    style={{ display: "none" }}
                  >
                    {icon.charAt(0).toUpperCase() + icon.slice(1)} {/* Example text */}
                  </span>
                </button>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex-1 flex items-center justify-center">{children}</div>

      {/* Color Picker Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-start left-10 top-10"
          onClick={closeModal}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header with Close Button aligned to the right */}
            <div className="flex justify-end">
              <button onClick={closeModal} className="rounded-lg">
                <RxCross2 />
              </button>
            </div>

            {/* Color Palette */}
            <div className="flex space-x-4 mt-4">
              {["#4F46E5", "#E11D48", "#10B981", "#F59E0B"].map((color) => (
                <button
                  key={color}
                  onClick={() => changeColor(color)} // Update global color
                  style={{ backgroundColor: color }}
                  className="w-10 h-10 rounded-full"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
