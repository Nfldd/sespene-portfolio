import React, { useState } from "react";
import { Link } from "react-router-dom"

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (

    <nav className="navbar_side">
    <ul className="navbar_menu">
          <Link to='/'className="nav-link">𝙷𝙾𝙼𝙴</Link>
          <Link to='/about' className="nav-link">𝙰𝙱𝙾𝚄𝚃 𝙼𝙴</Link>
          <Link to='/blog' className="nav-link">BLOG</Link>
          <Link to='/contact' className="nav-link">CONTACT</Link>       
    </ul>
    </nav>
    
  );
};

export default Navbar