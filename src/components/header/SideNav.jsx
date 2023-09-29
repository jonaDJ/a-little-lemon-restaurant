import React from "react";
import "./SideNav.scss";
import navLinks from "./NavLinks";

const SideNav = ({ isOpen, closeNav }) => {
  const linkTabIndex = isOpen ? "0" : "-1";
  return (
    <nav className={`side-nav ${isOpen ? "open" : ""}`}>
      <ul>
        {navLinks.map((link, index) => (
          <li key={index}>
            <a href={link.url} tabIndex={linkTabIndex}>
              {link.text}
            </a>
          </li>
        ))}
      </ul>
      <button
        className="close-button"
        onClick={closeNav}
        tabIndex={linkTabIndex}
      >
        &times;
      </button>
    </nav>
  );
};

export default SideNav;
