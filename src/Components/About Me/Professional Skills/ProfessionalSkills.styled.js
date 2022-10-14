import styled from "styled-components";

import { headingColor, lightBgColor, white } from "../../Reusable/Colors";

export const SkillParentDiv = styled.div`
  background: ${lightBgColor};
  padding: 4% 4% 2% 4%;
  display: flex;
  flex-wrap: wrap;
  gap: 6%;
  width: 100%;

  @media screen and (max-width: 600px) {
    padding: 6% 6% 4% 6%;
  }
`;

export const BarDiv = styled.div`
  color: ${white};
  width: 47%;
  margin-bottom: 2.5%;

  @media screen and (max-width: 650px) {
    margin-bottom: 5%;
    width: 100%;
  }

  p {
    text-transform: uppercase;
    font-size: 0.9rem;
  }

  div {
    width: 100%;
    height: 4px;
    background-color: rgb(6 15 24);
    position: relative;

    span {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: ${(props) => props.percentage};
      background: ${headingColor};
      border-radius: 0 15px 15px 0;
    }

    span::before {
      content: "";
      position: absolute;
      top: -2px;
      right: 0;
      height: 8px;
      width: 8px;
      border-radius: 100%;
      background: ${headingColor};
    }

    span::after {
      content: "${(props) => props.percentage}";
      position: absolute;
      bottom: 7px;
      right: -12px;
      font-size: 0.875rem;
    }
  }
`;
