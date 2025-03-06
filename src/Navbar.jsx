import React, { useState } from "react";
import { Link } from "react-router-dom"

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar_side">
    <ul className="navbar_menu">
          <Link to='/'className="nav-link">Home</Link>
          <Link to='/about' className="nav-link">About Me</Link>
          <Link to='/tour' className="nav-link">Tour</Link>
          <Link to='/resume' className="nav-link">Resume</Link>
    </ul>
     

    </nav>
  );
};

export default Navbar