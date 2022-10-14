import React, { useEffect } from "react";
import { AiOutlineRight } from "react-icons/ai";
import Aos from "aos";
import "aos/dist/aos.css";

// styling
import { BtnDiv, Card, ContentDiv, ImgDiv } from "./Card.styled";

const Dialog = (props) => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Card data-aos="fade-up" data-aos-duration="1000">
      <ImgDiv>
        <img src={props.img} alt="project" />
      </ImgDiv>

      <ContentDiv>
        <h3>{props.heading}</h3>
        <p>
          {props.beforeLink}
          <a href={props.link} target={"_blank"} rel="noreferrer">
            {props.linkName}
          </a>
          {props.afterLink}
        </p>

        <BtnDiv>
          <a href={props.hostedLink} target={"_blank"} rel="noreferrer">
            <button>
              <p>view</p> <AiOutlineRight />
            </button>
          </a>

          <a href={props.githubLink} target={"_blank"} rel="noreferrer">
            <button>
              <p>source</p> <AiOutlineRight />
            </button>
          </a>
        </BtnDiv>
      </ContentDiv>
    </Card>
  );
};

export default Dialog;
