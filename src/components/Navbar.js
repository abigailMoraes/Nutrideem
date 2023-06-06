import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import "./Navbar.css";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="nav-logo-container">
            <HashLink to="/#hero" className="navbar-logo">
              <img
                src={require("./../assets/logo-white-nobg.png")}
                className="nav-logo"
              />
            </HashLink>
          </div>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <HashLink
                smooth
                to="/#hero"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                <img
                  src={require("../assets/home-transparent-white.png")}
                  className="nav-link-text"
                />
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink
                smooth
                to="/#about"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                <img
                  src={require("../assets/about-transparent-white.png")}
                  className="nav-link-text-about"
                />
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink
                smooth
                to="/#donate"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                <img
                  src={require("../assets/donate-transparent-white.png")}
                  className="nav-link-text"
                />
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink
                smooth
                to="/#order"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                <img
                  src={require("../assets/order-white-transparent.png")}
                  className="nav-link-text"
                />
              </HashLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
