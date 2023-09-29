// NavBar.js
import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.scss";
import navLinks from "./NavLinks";

const NavBar = () => {
  return (
    <nav>
      <ul>
        {navLinks.map((link, index) => (
          <li key={index}>
            {link.url.startsWith("/") ? (
              <NavLink to={link.url} activeClassName="active">
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
