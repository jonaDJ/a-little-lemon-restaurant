// Header.js
import React, { useState, useEffect } from "react";
import Logo from "../../assets/svg/Logo.svg";
import NavBar from "./NavBar";
import Wrapper from "../wrapper/Wrapper";
import SideNav from "./SideNav";
import "./Header.scss";
import { useLocation, Link } from "react-router-dom";
const Header = () => {
  const [showMenuButton, setShowMenuButton] = useState(false);
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.substring(1);

      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    } else if (location.pathname[0] === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

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

  return (
    <header className="header-content" role="banner">
      <Wrapper>
        <div className="header-inline">
          <Link to="/" tabIndex={-1}>
            <img src={Logo} alt="Little Lemon Logo" className="header-logo" />
          </Link>
          {showMenuButton ? (
            <button
              className="menu-button"
              onClick={toggleSideNav}
              aria-label="Toggle Navigation Menu"
            >
              &#9776;
            </button>
          ) : (
            <NavBar className="NavBar" />
          )}
        </div>
      </Wrapper>
      <SideNav isOpen={isSideNavOpen} closeNav={closeSideNav} />
    </header>
  );
};

export default Header;
