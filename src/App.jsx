import React from "react";
import Hero from './Hero.jsx'
import Navbar from './Navbar.jsx'
import Home from "./Home.jsx";
import AboutMe from "./AboutMe.jsx";
import Tour from "./Tour.jsx"; 
import Resume from "./Resume.jsx";
import { Routes, Route } from "react-router-dom";




function App() {
  return(
    <>
     <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>

    </>
    
  );
}


export default App
