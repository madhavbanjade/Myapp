import React from "react";

const About = () => {
  return (
    <div
      className="p-8 space-y-6  text-center lg:text-left  py-24
    "
    >
      {/* Flex container for image and text */}
      <div
        data-aos="fade-right"
        className="flex flex-col lg:flex-row items-center lg:space-x-20 "
      >
        {/* Image Section */}
        <div className=" w-full flex ">
          <img
            src="/IMG_5187.jpg"
            alt="Madhav Banjade"
            className=" object-contain rounded-xl"
          />
        </div>

        {/* Text Section */}
        <div data-aos="fade-left" className="mt-12 lg:mt-0 space-y-4">
          <h1 className="text-3xl font-semibold">
            Need a <span className="uppercase text-blue-500">Creative</span>{" "}
            Product? I <br />
            Can Help You!
          </h1>
          <p className="text-md ">
            My journey in web development has been fueled by a love for
            problem-solving and creating Impactful user experiences. I thrive on
            turning ideas into robust, scalable applications, whether it's
            developing dynamic front-end interfaces or implementing efficient
            back-end systems. Beyond coding, I am interested in
            DIGITAL-MARKETING, SEO, and many more. Let's get in touch and I will
            explain more about me with a cup of coffee. Coffee on me😊
          </p>

          <div className="">
            <a
              href="/Madhav Banjade.pdf" 
              download="MadhavBanjade.pdf"
              className=" bg-blue-500 hover:bg-blue-600 text-white px-8 py-2 rounded-lg uppercase transition-all duration-300 "
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
