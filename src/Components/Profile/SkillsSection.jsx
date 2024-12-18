import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { motion } from "framer-motion";


const skills = [
  { name: "HTML", percentage: 25 },
  { name: "JavaScript", percentage: 89 },
  { name: "CSS", percentage: 70 },
  { name: "Tailwind.css", percentage: 80 },
  { name: "React.js", percentage: 90 },
  { name: "Next.js", percentage: 65 },
  { name: "Node.js", percentage: 50 },
  { name: "Python", percentage: 60 },
];

const SkillsSection = () => {
  const { selectedColor } = useContext(ThemeContext);
  const themeColor = selectedColor || "#f472b6"; // Default pink color

  return (
    <section className="min-h-screen bg-gray-900 text-white p-10">
      <motion.h1
        className="text-center text-4xl md:text-5xl font-bold mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-gray-300">My</span>{" "}
        <span style={{ color: themeColor }}>Skills</span>
      </motion.h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 place-items-center">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="w-24 md:w-32"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.1, rotate: 2 }} // Hover Effect
          >
            <CircularProgressbar
              value={skill.percentage}
              text={`${skill.percentage}%`}
              styles={buildStyles({
                textColor: "#fff",
                pathColor: themeColor,
                trailColor: "#333",
              })}
            />
            <motion.p
              className="text-center mt-4 text-gray-300 font-medium"
              whileHover={{ color: themeColor }}
            >
              {skill.name}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
