import React from "react";
import styled from "styled-components";
import ProjectCard from "./projectCard";
import TravelSiteImg from "../images/Travelsite.JPG";
import UsaFitnessImg from "../images/UsaFitness.JPG";

const ProjectDiv = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const ProjectsLayout = styled.div`
  text-align: center;
  // margin: auto;
`;

const ProjectsTitle = styled.h1``;

const ProjectsTextDiv = styled.div`
  margin: 80px;
`;

const ProjectCardDiv = styled.div`
  display: flex;
  width: 100vw;
  margin: auto;
  justify-content: space-evenly;
  flex-wrap: wrap;
  // @media (max-width: 600px) {
  //   display: flex;
  //   flex-direction: column;
  // } ;
`;

function Projects() {
  return (
    <ProjectDiv>
      <ProjectsLayout>
        <ProjectsTextDiv>
          <ProjectsTitle>Projects</ProjectsTitle>
        </ProjectsTextDiv>
        <ProjectCardDiv>
          <ProjectCard
            backgroundColor="rgba(184, 35, 35, .5)"
            color="white"
            href="https://test.zachhall.me/"
            src={UsaFitnessImg}
            alt="Local Gym Website"
            title="Local Gym Website"
            info="Redesigned Local Gym Website"
          />
          <ProjectCard
            backgroundColor="rgb(255, 255, 255, .5)"
            color="rgb(58, 139, 231, 1)"
            href="https://infallible-wiles-01b8f6.netlify.app/"
            src={TravelSiteImg}
            alt="Basic Travel Site"
            title="Basic Travel Site"
            info="Travel themed website. Made using Gatsby."
          />
        </ProjectCardDiv>
      </ProjectsLayout>
    </ProjectDiv>
  );
}

export default Projects;
