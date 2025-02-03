import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Profile = () => {
  const profile = {
    name: "Madhav Banjade",
  };
  const image = {
    src: "/IMG_4232.jpg",
  };
  return (
    <div>
      <div
        id="home"
        className="flex flex-col lg:flex-row items-center justify-between p-8 lg:px-24 pt-12 lg:pt-16"
      >
        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-extrabold  mb-4">
            Hello, I'm{" "}
            <span className="text-blue-600 uppercase">{profile.name}</span>
          </h1>
          <h2 className="text-2xl lg:text-3xl text-blue-400 font-medium mb-4">
            Mern-stack Developer
          </h2>
          <p className=" leading-7 text-lg">
            I am a full-time MERN Developer specializing in building modern,
            responsive, and scalable web applications. Proficient in MongoDB,
            Express.js, React.js, and Node.js, I deliver seamless user
            experiences and robust server-side functionality.
          </p>
          <div className="flex justify-center lg:justify-start mt-8">
            <a
              href="tel:+977-9749344926"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="font-medium bg-blue-400 hover:bg-sky-600 hover:text-white text-white px-6 py-2 rounded-full shadow-md cursor-pointer transition duration-300">
                Let's talk
              </button>
            </a>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center lg:justify-start gap-6 mt-6">
            <a
              href="https://www.instagram.com/banjade.m/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-blue-400 p-3 text-blue-400 hover:text-white hover:bg-blue-400 transition"
            >
              <FaInstagram className="text-2xl" />
            </a>
            <a
              href="https://github.com/madhavbanjade"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-blue-400 p-3 text-blue-400 hover:text-white hover:bg-blue-400 transition"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/madhavbanjade/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-blue-400 p-3 text-blue-400 hover:text-white hover:bg-blue-400 transition"
            >
              <FaLinkedin className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div
          data-aos="fade-left"
          className="hidden lg:flex lg:w-1/2 justify-center"
        >
          <img
            src={image.src}
            alt="Profile"
            className="w-72 lg:w-[60%] h-auto object-cover rounded-xl shadow-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
