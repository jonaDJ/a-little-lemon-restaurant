// Header.js
import React, { useState, useEffect } from "react";
import Logo from "../../assets/svg/Logo.svg";
import NavBar from "./NavBar";
import Wrapper from "../wrapper/Wrapper";
import SideNav from "./SideNav";
import "./Header.scss";
import { useLocation } from "react-router-dom";
import navLinks from "./NavLinks";

const Header = () => {
  const [showMenuButton, setShowMenuButton] = useState(false);
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 940) {
        setShowMenuButton(true);
      } else {
        setShowMenuButton(false);
        setIsSideNavOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  const closeSideNav = () => {
    setIsSideNavOpen(false);
  };

  const filteredLinks = navLinks.filter((link) => {
    if (location.pathname === "/reservation") {
      return link.url === "/home";
    }
    return true;
  });

  return (
    <header className="header-content">
      <Wrapper>
        <div className="header-inline">
          <img src={Logo} alt="Logo" className="header-logo" />
          {showMenuButton ? (
            <button className="menu-button" onClick={toggleSideNav}>
              &#9776;
            </button>
          ) : (
            <NavBar className="NavBar" filteredLinks={filteredLinks} />
          )}
        </div>
      </Wrapper>
      <SideNav
        isOpen={isSideNavOpen}
        closeNav={closeSideNav}
        filteredLinks={filteredLinks}
      />
    </header>
  );
};

export default Header;
