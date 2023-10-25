// Header.js
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Cristina Nevelits</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">About Me</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
