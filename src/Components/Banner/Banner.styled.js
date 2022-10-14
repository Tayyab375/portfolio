import styled from "styled-components";
import { white } from "../Reusable/Colors";

import bannerImg from "./Assets/Images/banner.jpg";

export const BannerParentDiv = styled.div`
  height: 92vh;
  width: 100%;
  background: linear-gradient(
      90deg,
      rgba(67, 186, 118, 0.8) 0%,
      rgba(59, 233, 221, 0.8) 100%
    ),
    url(${bannerImg});
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
`;

export const ContentDiv = styled.div`
  color: ${white};
  margin-left: 5.5%;
  background: none;

  h1 {
    font-size: 3.5rem;
    font-weight: 300;
  }

  span {
    font-weight: 300;
  }

  h2 {
    font-size: 2.6rem;
    font-weight: 500;
  }

  p {
    font-size: 1.3rem;
  }
`;
