import React from "react";
import styled from "styled-components";
import { Project } from "./Project";

export const WorkExperience = () => {
  return (
    <Container>
      <h1>
        <span className="underline">Work Experience</span>
      </h1>
      <Project
        name="한입"
        duration="2022.05 - 2022.07"
        introduce="팬들을 위한 굿즈 나눔 플랫폼"
        role="프론트엔드 개발 및 ios 배포"
        techStack="React-Native, Typescript, Redux-Toolkit, React-Query, Firebase"
        contribution="90%"
      />
      <Project
        name="한입"
        duration="2022.05 - 2022.07"
        introduce="팬들을 위한 굿즈 나눔 플랫폼"
        role="프론트엔드 개발 및 ios 배포"
        techStack="React-Native, Typescript, Redux-Toolkit, React-Query, Firebase"
        contribution="90%"
        style={{ marginTop: "1rem" }}
      />
    </Container>
  );
};

const Container = styled.section``;
const PrjContainer = styled.section``;
