import styled from "styled-components";
import {
  headingColor,
  lightBgColor,
  linkColor,
  linkHoverColor,
  white,
} from "../../Reusable/Colors";

export const Card = styled.div`
  width: 340px;
  height: 368px;
  background-color: ${lightBgColor};
  margin-bottom: 2%;
`;

export const ImgDiv = styled.div`
  height: 195px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const ContentDiv = styled.div`
  padding: 9px 20px;

  h3 {
    font-size: 18px;
    color: ${headingColor};
    letter-spacing: 1.5px;
  }

  p {
    font-size: 15px;
    text-align: justify;
    color: ${white};
    height: 90px;

    a {
      text-decoration: none;
      color: ${linkColor};

      :hover {
        color: ${linkHoverColor};
        text-decoration: underline;
      }
    }
  }
`;

export const BtnDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
    background-color: ${headingColor};
    transition: 0.55s ease;
    padding: 6px 15px;
    color: ${white};
    border: 0;
    display: flex;
    align-items: center;
    gap: 3px;

    p {
      color: ${white};
      text-transform: uppercase;
      font-size: 12px;
      height: auto;
    }

    :hover {
      opacity: 0.7;
    }
  }
`;
