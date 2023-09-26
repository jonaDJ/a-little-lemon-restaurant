import React from "react";
import { NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll"; // Import ScrollLink from react-scroll
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
              <ScrollLink to={link.url} smooth={true} activeClassName="active">
                {link.text}
              </ScrollLink>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
