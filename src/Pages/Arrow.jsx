import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const Arrow = () => {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    setVisible(window.scrollY > 300);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    visible && (
      <div className="fixed animate-bounce bottom-4 right-4 sm:bottom-6 sm:right-6 md:right-8 lg:right-10 z-50">
        <button
          onClick={scrollToTop}
          className="bg-blue-600 text-white p-3 rounded-full shadow-md hover:bg-blue-500 transition-transform transform hover:scale-110 focus:outline-none focus:ring focus:ring-blue-300"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="w-5 h-5" />
        </button>
      </div>
    )
  );
};

export default Arrow;
