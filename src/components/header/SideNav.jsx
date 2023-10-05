import React from "react";
import "./SideNav.scss";
import navLinks from "./NavLinks";
import { NavLink } from "react-router-dom";

const SideNav = ({ isOpen, closeNav }) => {
  const linkTabIndex = isOpen ? "0" : "-1";
  return (
    <nav className={`side-nav ${isOpen ? "open" : ""}`}>
      <ul>
        {navLinks.map((link, index) => (
          <li key={index}>
            {link.url.startsWith("/") ? (
              <NavLink
                to={link.url}
                className={({ isActive }) => (isActive ? "active" : "inactive")}
                aria-current={
                  link.url === window.location.pathname ? "page" : undefined
                }
                exact
              >
                {link.text}
              </NavLink>
            ) : (
              <a href={link.url}>{link.text}</a>
            )}
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
