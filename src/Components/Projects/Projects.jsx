import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

//styling
import { ProjectsDiv, ProjectsParentDiv } from "./Projects.styled";

// data
import { ProjectData } from "./Project Cards/Project Data";

// components
import Card from "./Project Cards/Card";

const Projects = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <ProjectsParentDiv id="projects">
      <h1 data-aos="fade-right" data-aos-duration="1000">
        Projects
      </h1>

      <ProjectsDiv>
        {ProjectData.map((data) => {
          return (
            <Card
              key={data.id}
              img={data.img}
              heading={data.heading}
              link={data.link}
              beforeLink={data.beforeLink}
              afterLink={data.afterLink}
              linkName={data.linkName}
              hostedLink={data.hostedLink}
              githubLink={data.githubLink}
            />
          );
        })}
      </ProjectsDiv>
    </ProjectsParentDiv>
  );
};

export default Projects;
