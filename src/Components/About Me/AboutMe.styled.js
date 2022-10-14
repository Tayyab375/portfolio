import styled from "styled-components";
import {
  drakBgColor,
  headingColor,
  linkColor,
  linkHoverColor,
  white,
} from "../Reusable/Colors";

export const AboutParentDiv = styled.div`
  background: ${drakBgColor};
  padding: 6% 5.5% 0% 4%;
  display: flex;
  align-items: flex-start;
  gap: 7%;

  @media screen and (max-width: 710px) {
    gap: 5.5%;
    padding-right: 3%;
    padding-left: 3%;
  }

  @media screen and (max-width: 650px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ImgDiv = styled.div`
  position: relative;
  height: 294px;
  max-width: 280px;
  min-width: 280px;

  img {
    position: absolute;
    top: 26px;
    left: 0;
    width: 255px;
    z-index: 1;
  }
`;

export const BorderDiv = styled.div`
  position: absolute;
  top: 0;
  left: 26px;
  width: 255px;
  height: 268.156px;
  border: 4.5px ${headingColor} solid;
`;

export const ContentDiv = styled.div`
  @media screen and (max-width: 650px) {
    width: 80%;
    margin-top: 5%;
  }

  @media screen and (max-width: 470px) {
    width: 90%;
  }

  @media screen and (max-width: 420px) {
    width: 95%;
  }

  h1 {
    color: ${headingColor};

    @media screen and (max-width: 1200px) {
      font-size: 1.6rem;
    }
  }

  p {
    color: ${white};
    text-align: justify;
    padding: 3px 0;

    @media screen and (max-width: 1200px) {
      font-size: 0.875rem;
    }
  }

  span {
    color: ${headingColor};
    font-weight: 500;
    text-transform: uppercase;
  }

  a {
    text-decoration: none;
    color: ${linkColor};

    :hover {
      color: ${linkHoverColor};
      text-decoration: underline;
    }
  }
`;

export const Headingh1 = styled.h1`
  color: ${headingColor};
  text-align: center;
  text-transform: uppercase;
  margin-top: 6%;
  margin-bottom: 4%;

  @media screen and (max-width: 1200px) {
    font-size: 1.6rem;
  }
`;
