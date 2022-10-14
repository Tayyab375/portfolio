import styled from "styled-components";

import { drakNavColor, headingColor, white } from "../Reusable/Colors";

export const StyledNav = styled.nav`
  position: sticky;
  top: 0%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 8vh;
  background: ${drakNavColor};
  z-index: 100;
`;

export const LogoDiv = styled.div`
  display: flex;
  align-items: center;

  h3 {
    color: ${white};
    font-weight: 700;
    font-size: 1.15rem;
    letter-spacing: 0px;
  }
`;

export const NavUnorderList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 2.6rem;

  @media screen and (max-width: 600px) {
    position: fixed;
    z-index: 10000;
    top: 0vh;
    right: 0;
    width: 100%;
    height: 100vh;
    background-color: ${drakNavColor};
    flex-direction: column;
    transform: translateX(100%);
    transition: 0.3s ease-in;
    padding: 150px 0;
    font-size: 2rem;

    &.nav_active {
      transform: translateX(0%);
    }
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: ${white};
    transition: 0.45s ease-in;
    text-transform: uppercase;
    font-weight: 500;

    :hover {
      color: ${headingColor};
    }
  }
`;

export const ToggleIconDiv = styled.div`
  display: none;
  z-index: 20000;

  @media screen and (max-width: 600px) {
    display: block;
  }

  i {
    font-size: 25px;
    color: ${white};
  }

  & .position {
    position: fixed;
  }
`;
