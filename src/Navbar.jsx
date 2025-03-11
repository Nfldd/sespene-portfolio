import React, { useState } from "react";
import { Link } from "react-router-dom"

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (

    <nav className="navbar_side">
    <ul className="navbar_menu">
          <Link to='/'className="nav-link">𝙷𝙾𝙼𝙴</Link>
          <Link to='/about' className="nav-link">𝙰𝙱𝙾𝚄𝚃 𝙼𝙴</Link>
          <Link to='/tour' className="nav-link">𝚃𝙾𝚄𝚁</Link>
          <Link to='/resume' className="nav-link">𝚁𝙴𝚂𝚄𝙼𝙴</Link>       
    </ul>
    </nav>
    
  );
};

export default Navbar