import React from "react";
import Hero from './Hero.jsx'
import Navbar from './Navbar.jsx'
import Home from "./Home.jsx";
import AboutMe from "./AboutMe.jsx";
import Blog from "./Blog.jsx"; 
import Contact from "./Contact.jsx";
import Aurora from './Aurora.jsx'
import { Routes, Route } from "react-router-dom";


function App() {
  return(
    <>
     <Navbar />
     <Aurora
  colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
  blend={0.5}
  amplitude={1.0}
  speed={2.0}
/>

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </>
    
  );
}


export default App
