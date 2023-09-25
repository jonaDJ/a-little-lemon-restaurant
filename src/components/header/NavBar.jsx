import React from "react";
import "./NavBar.scss";
import navLinks from "./NavLinks";

const NavBar = () => {
  return (
    <nav>
      <ul>
        {navLinks.map((link, index) => (
          <li key={index}>
            <a href={link.url}>{link.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
