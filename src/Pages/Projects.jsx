import React from "react";

const Projects = () => {
  // Example project data
  const projectList = [
    {
      id: 1,
      title: "Real-State Platform",
      description:
        "The Real estate platform leverages the power of the MERN stack to deliver a seamless experience.",
      image: "/reaakstate2.webp",
      link: "https://gharjagganep.onrender.com/",
    },

    {
      id: 4,
      title: "A E-commerce Platform",
      description: "The project is made by pure react + vite.",
      image: "/e-app.webp",
      link: "https://app1-orcin.vercel.app/",
    },
  ];

  return (
    <section data-aos="" className=" py-20 px-4 lg:px-24 mt-4 ">
      <div className="text-center lg:text-left mb-12">
        <h1 className="text-4xl font-bold">
          See My Works That Will <span className="text-blue-400">Amaze</span>{" "}
          You!
        </h1>
        <p className="text-lg ">
          I develop high-quality websites that serve long-term purposes.
          Well-documented, clean, and elegant interfaces ensure ease for all
          clients.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {projectList.map((project) => (
          <div
            key={project.id}
            className="rounded-lg bg-slate-800   overflow-hidden shadow-md hover:shadow-4xl transform transition-all duration-300 hover:scale-105"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover"
            />
            <div className=" p-4">
              <h2 className="text-xl font-bold mb-2 uppercase underline">
                {project.title}
              </h2>
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
