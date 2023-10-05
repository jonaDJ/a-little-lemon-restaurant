import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.scss";
import navLinks from "./NavLinks";

const NavBar = () => {
  return (
    <nav role="navigation">
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
    </nav>
  );
};

export default NavBar;
