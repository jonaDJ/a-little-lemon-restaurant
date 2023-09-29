import React from "react";
import Wrapper from "../wrapper/Wrapper";
import "./Footer.scss";
import img from "../../assets/images/restaurant.jpg";
import navLinks from "../header/NavLinks";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const navSection = (
    <div className="footer-section">
      <div className="footer-nav">
        <h3>Navigation</h3>
        <ul>
          {navLinks.map((link, index) => (
            <li key={index}>
              {link.url.startsWith("/") ? (
                <NavLink
                  to={link.url}
                  className="footer-link"
                  activeClassName="active"
                >
                  {link.text}
                </NavLink>
              ) : (
                <a href={link.url}>{link.text}</a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  const contactSection = (
    <div className="footer-section">
      <div className="footer-contact">
        <h3>Contact</h3>
        <ul>
          <li>Address: 123 Main St</li>
          <li>Phone: (123) 456-7890</li>
          <li>Email: info@example.com</li>
        </ul>
      </div>
    </div>
  );

  const socialMediaSection = (
    <div className="footer-section">
      <div className="footer-social-media">
        <h3>Social Media</h3>
        <ul>
          <li>
            <a href="#fb">Meta</a>
          </li>
          <li>
            <a href="#twi">Twitter</a>
          </li>
          <li>
            <a href="#insta">Instagram</a>
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <footer className="footer-content">
      <Wrapper>
        <div className="footer-inline">
          <img src={img} alt="logo" className="footer-logo" />
          <div className="footer-grid">
            {navSection}
            {contactSection}
            {socialMediaSection}
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
