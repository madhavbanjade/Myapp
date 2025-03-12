import React from "react";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Arrow from "./Pages/Arrow";
import Profile from "./Pages/Profile";

const Home = () => {
  return (
    <div className="min-h-screen">

      <div id="home">
        <Profile />
      </div>

      <div id="about" className="">
        <About />
      </div>
      <div id="skills" className="">
        <Skills />
      </div>
      <div id="projects" className="">
        <Projects />
      </div>
      <div id="contact" className="">
        <Contact />
      </div>
      <Arrow />
    </div>
  );
};

export default Home;
