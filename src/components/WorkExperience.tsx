import React from "react"
import styled from "styled-components"
import { Project } from "./Project"

export const WorkExperience = () => {
  return (
    <section className="container">
      <h1>Work Experience</h1>
      <Project
        name="(주) 퀄리소프트"
        duration="2021.12 - 2022.06"
        introduce="Microsoft사의 Dynamics365를 바탕으로 한 CRM 개발"
        role="프론트엔드 인턴"
        techStack="Vanila.JS, HTML5, Vue, Angular"
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
      <Project
        name="밥타"
        duration="2022.08 - 2022.09"
        introduce="에브림타임 시간표를 입력 받아 모임의 공통된 시간을 찾아주는 서비스"
        role="기획, UI/UX 디자인, 프론트엔드 개발 및 배포"
        techStack="React, Typescript, React-Query, Google Analytics, AWS S3"
        contribution="100%"
        style={{ marginTop: "1rem" }}
      />
    </section>
  )
}
