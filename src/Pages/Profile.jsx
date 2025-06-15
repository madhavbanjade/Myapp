import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Profile = () => {
  const profile = {
    name: "Madhav Banjade",
  };

  return (
    <div className="bg-gradient-to-br">
      <div
        id="home"
        className="flex flex-col lg:flex-row items-center justify-between p-8 lg:px-24 pt-12 lg:pt-20 gap-10"
      >
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 ">
            Hello, I'm{" "}
            <span className="text-blue-600 uppercase">{profile.name}</span>
          </h1>
          <h2 className="text-2xl lg:text-3 font-semibold mb-4">
            MERN Stack Developer
          </h2>
          <p className="leading-7 text-lg">
            I am a full-time MERN Developer specializing in building modern,
            responsive, and scalable web applications. Proficient in MongoDB,
            Express.js, React.js, and Node.js, I deliver seamless user
            experiences and robust server-side functionality.
          </p>

          {/* Let's Talk Button */}
          <div className="flex justify-center lg:justify-start mt-8">
            <a
              href="tel:+977-9749344926"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="font-semibold bg-blue-500 hover:bg-blue-600 hover:scale-105 text-white px-6 py-2 rounded-full shadow-md transition duration-300">
                Let's talk
              </button>
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center lg:justify-start gap-6 mt-6">
            <a
              href="https://www.instagram.com/banjade.m/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-blue-400 p-3 text-blue-400 hover:text-white hover:bg-blue-500 transition"
            >
              <FaInstagram className="text-2xl" />
            </a>
            <a
              href="https://github.com/madhavbanjade"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-blue-400 p-3 text-blue-400 hover:text-white hover:bg-blue-500 transition"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/madhavbanjade/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-blue-400 p-3 text-blue-400 hover:text-white hover:bg-blue-500 transition"
            >
              <FaLinkedin className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Right Image or Animation */}
        <div
          data-aos="fade-left"
          className="hidden lg:flex lg:w-1/2 justify-center"
        >
          <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-blue-200 shadow-lg">
            <img
              src="/IMG_5187.jpg"
              alt="Madhav Banjade"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
