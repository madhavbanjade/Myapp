import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about-me" element={<About />} />
          <Route path="/skill" element={<Skills />} />
          <Route path="/my-project" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
