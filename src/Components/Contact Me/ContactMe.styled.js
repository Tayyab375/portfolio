import styled from "styled-components";

import {
  drakBgColor,
  headingColor,
  lightBgColor,
  white,
} from "../Reusable/Colors";

export const ContactParentDiv = styled.div`
  h1 {
    color: ${headingColor};
    text-transform: uppercase;
    margin: 4% 0;
    text-align: center;

    @media screen and (max-width: 1200px) {
      font-size: 1.6rem;
    }
  }
`;

export const FormDiv = styled.div`
  padding: 0% 5%;

  @media screen and (max-width: 700px) {
    padding: 0% 15%;
  }

  & .name,
  .email,
  .message {
    outline: 0cm;
    color: ${white};
    background-color: ${lightBgColor};
    font-size: 1.1rem;
    display: block;

    @media screen and (max-width: 700px) {
      font-size: 0.9rem;
    }
  }

  & .name {
    width: 100%;
    border: 0;
    padding: 7px 10px;
  }

  & .email {
    width: 100%;
    border: 0;
    padding: 7px 10px;
  }

  & .message {
    width: 100%;
    height: 250px;
    resize: none;
    border: 0;
    padding: 7px 10px;
  }
`;

export const FlexInputDiv = styled.div`
  width: 100%;
  display: flex;
  gap: 1.5%;

  @media screen and (max-width: 700px) {
    flex-direction: column;
  }

  & .input {
    width: 50%;
    margin-bottom: 1.5%;

    @media screen and (max-width: 700px) {
      width: 100%;
    }
  }
`;

// --------------------error of name styling---------------------------

export const ErrorNameDiv = styled.div`
  p {
    color: red;
    margin-top: 5px;
    font-size: 15px;
    display: none;
    text-align: left;

    &.nshow {
      display: block;
    }
  }
`;

// --------------------error of email styling---------------------------

export const ErrorEmailDiv = styled.div`
  p {
    color: red;
    margin-top: 5px;
    font-size: 15px;
    display: none;
    text-align: left;

    &.eshow {
      display: block;
    }
  }
`;

// --------------------error of message styling---------------------------

export const ErrorMessageDiv = styled.div`
  p {
    color: red;
    margin-top: 5px;
    font-size: 15px;
    display: none;
    text-align: left;

    &.mshow {
      display: block;
    }
  }
`;

export const BtnDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;

  & .submit {
    display: block;
    cursor: pointer;
    background-color: transparent;
    color: ${headingColor};
    border: 1.5px solid ${headingColor};
    font-size: 1rem;
    transition: 0.55s ease;
    padding: 6px 15px;

    :hover {
      background-color: ${headingColor};
      color: ${drakBgColor};
      border: 1.5px solid ${headingColor};
    }
  }
`;
