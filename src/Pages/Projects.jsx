import React from "react";

const Projects = () => {
  // Example project data
  const projectList = [
    {
      id: 1,
      title: "Real-State Platform",
      description:
        "The Real estate platform leverages the power of the MERN stack, Firebase, and Redux to deliver a seamless experience.",
      image: "/reaakstate2.webp",
      link: "https://gharjagga-nepal.onrender.com/",
    },
    {
      id: 2,
      title: "Portfolio",
      description:
        "This is my portfolio where I am showing my skills project using ReactJs and TailwindCss.",
      image: "/canva-green-modern-portfolio-cover-page-g9xqBFDoldA.jpg",
      link: "#",
    },
  ];

  return (
    <section
    
    data-aos=""
    className=" py-20 px-4 lg:px-24 mt-4 ">
      {/* Header Section */}
      <div className="text-center lg:text-left mb-12">
        <h1 className="text-4xl font-bold">
          See My Works That Will <span className="text-blue-400">Amaze</span> You!
        </h1>
        <p className="text-lg ">
          I develop high-quality websites that serve long-term purposes.  
          Well-documented, clean, and elegant interfaces ensure ease for all clients.
        </p>
      </div>

      {/* Projects Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {projectList.map((project) => (
          <div
            key={project.id}
            className="rounded-lg   overflow-hidden shadow-md hover:shadow-4xl transform transition-all duration-300 hover:scale-105"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover"
            />
            <div className=" p-4">
              <h2 className="text-xl font-bold mb-2 uppercase underline">{project.title}</h2>
              <p className=" mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline hover:text-blue-500 font-semibold"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
