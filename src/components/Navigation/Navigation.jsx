import React, { useState } from "react";
import { NavLink as Link } from "react-router-dom";
import "./navigation.scss";
import { FaBars } from 'react-icons/fa'
import Logo from "../../assets/images/NavLogo.png";



  const Navigation = () => {

    const [open, setOpenNavigation] = useState(false);
    const toggleClass = () => {
      setOpenNavigation(!open);
    };

  return (
    <nav>
      <img src={Logo} alt="logo" className={"logo"}></img>
      <button onClick={() => toggleClass()} className="burgerMenu">
        <FaBars />
      </button>
      <ul className={`nav-ul ${open === true ? "show" : ""}`}>
        <li className="link">
          <Link to="/frontpage">Forside</Link>
        </li>
        <li className="link">
          <Link to="/housepage">Boliger til salg</Link>
        </li>
        <li className="link">
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
    )
  }

  export { Navigation }
