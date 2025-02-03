import React from "react";
import { FaJs, FaReact, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: <FaJs className="text-yellow-300" /> },
  { name: "React", icon: <FaReact className="text-blue-500" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-300" /> },
  { name: "Express", icon: <SiExpress className="text-gray-700" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },

];

const Skills = () => {
  return (
    <div
    className=" py-8 px-8 lg:flex lg:space-x-10">
      {/* Heading Section */}
      <div className="max-w-3xl mx-auto lg:flex flex-col justify-center lg:mt-4 lg:text-left text-center">
        <h1 className="text-4xl font-bold mb-4">
          What My <span className="text-blue-400">Programming</span> Skills
          Include?
        </h1>
        <p className="text-lg leading-relaxed">
          I develop intuitive, responsive user interfaces that provide seamless
          user experiences. I excel in front-end technologies like React.js and
          Tailwind CSS, and backend tools like Node.js and Express.js, crafting
          efficient and secure APIs.
        </p>
      </div>

      {/* Skills Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105"
          >
            <div className="text-4xl mb-2">{skill.icon}</div>
            <span className="text-sm font-semibold text-gray-800">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
