import React, { useState } from "react";

//import "./Navbar.css";
import {
  StyledNav,
  LogoDiv,
  NavUnorderList,
  ToggleIconDiv,
} from "./Navbar.styled.js";

function Navbar() {
  const [click, setIcon] = useState(false);
  const navIconChange = () => {
    setIcon(!click);
  };

  return (
    <>
      <div id="home" />
      <StyledNav>
        <LogoDiv>
          <h3>PORTFOLIO</h3>
        </LogoDiv>
        <NavUnorderList className={click ? "nav_active" : null}>
          <li>
            <a href="#home" onClick={navIconChange}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={navIconChange}>
              about
            </a>
          </li>
          <li>
            <a href="#projects" onClick={navIconChange}>
              projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={navIconChange}>
              contact
            </a>
          </li>
        </NavUnorderList>
        <ToggleIconDiv onClick={navIconChange} className="nav_toggler">
          <i
            className={
              click ? " fa-solid fa-xmark position" : "fa-solid fa-bars"
            }
          />
        </ToggleIconDiv>
      </StyledNav>
    </>
  );
}

export default Navbar;
