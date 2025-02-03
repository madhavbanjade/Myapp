import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#303030] w-full mt-6">
      <div className="flex flex-col md:flex-row items-center justify-between md:px-16 px-6 py-4 space-y-4 md:space-y-0">
        {/* Portfolio Title */}
        <span className="text-2xl font-bold text-blue-400">
          Portfolio
        </span>

        {/* Copyright Text */}
        <p className="text-white text-sm md:text-base text-center">
          © {year} codewithmadhav. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
