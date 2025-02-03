import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div  className=" py-4 px-4 lg:px-24">
      {/* Heading */}
      <div className="text-center lg:text-left mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Excited to Learn About Your{" "}
          <span className="text-blue-400 uppercase">Project</span>?
        </h1>
        <p className="text-lg ">
          Let's connect! I’d love to hear how I can help. Get in touch, and I'll
          respond as soon as possible.
        </p>
      </div>

      {/* Contact Information */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Address */}
        <div className="flex items-start space-x-4">
          <FaMapMarkerAlt className="text-3xl text-blue-400" />
          <div>
            <h2 className="text-lg font-bold">Address:</h2>
            <p>Kathmandu, Nepal</p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start space-x-4">
          <FaPhoneAlt className="text-3xl text-blue-400" />
          <div>
            <h2 className="text-lg font-bold">Phone:</h2>
            <p>+977-9749344926</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start space-x-4">
          <FaEnvelope className="text-3xl text-blue-400" />
          <div>
            <h2 className="text-lg font-bold">Email:</h2>
            <p>info@madhavbanjade.com.np</p>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="mt-12 flex justify-center lg:justify-start space-x-6">
        <a
          href="https://wa.me/9749344926"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-gray-700 hover:bg-blue-400 p-3 text-blue-400 hover:text-white transition duration-300"
        >
          <FaWhatsapp className="text-2xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/madhav-banjade-153828328/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-gray-700 hover:bg-blue-400 p-3 text-blue-400 hover:text-white transition duration-300"
        >
          <FaLinkedin className="text-2xl" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
