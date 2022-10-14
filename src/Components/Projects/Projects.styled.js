import styled from "styled-components";

import { headingColor } from "../Reusable/Colors";

export const ProjectsParentDiv = styled.div`
  h1 {
    margin-top: 6%;
    margin-bottom: 4%;
    text-align: center;
    text-transform: uppercase;
    color: ${headingColor};

    @media screen and (max-width: 1200px) {
      font-size: 1.6rem;
    }
  }
`;

export const ProjectsDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2.5%;

  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;
