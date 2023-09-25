import React from "react";
import "./SideNav.scss";
import navLinks from "./NavLinks";

const SideNav = ({ isOpen, closeNav }) => {
  return (
    <nav className={`side-nav ${isOpen ? "open" : ""}`}>
      <ul>
        {navLinks.map((link, index) => (
          <li key={index}>
            <a href={link.url}>{link.text}</a>
          </li>
        ))}
      </ul>
      <button className="close-button" onClick={closeNav}>
        &times;
      </button>
    </nav>
  );
};

export default SideNav;
