import React from "react";
import "./SideNav.scss";

const SideNav = ({ isOpen, closeNav, filteredLinks }) => {
  return (
    <nav className={`side-nav ${isOpen ? "open" : ""}`}>
      <ul>
        {filteredLinks.map((link, index) => (
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
