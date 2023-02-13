import "./NavbarStyle.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false)
  const changeColor = ()=> {
    if (window.scrollY >= 100){
      setColor(true);
    }
    else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <div className={color? "header header-bg" : "header"}>
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">
            <i class="fa-solid fa-house"></i>Home
          </Link>
        </li>
        <li>
          <Link to="/project">
            <i class="fa-solid fa-layer-group"></i>Projects
          </Link>
        </li>
        <li>
          <Link to="/about">
            <i class="fa-solid fa-circle-info"></i>About
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <i class="fa-solid fa-address-book"></i>Contact
          </Link>
        </li>
      </ul>
      <div className="humburger" onClick={handleClick}>

        {
            click? (<FaTimes size={30} style={{ color: "#fff" }} />) : (<FaBars size={30} style={{ color: "#fff" }} />)
        }
        
        
      </div>
    </div>
  );
};

export default Navbar;
