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
        description={[
          "SM C&C, 율촌 등 CRM 구축 및 개발",
          "브라우저 렌더링 과정 이해를 바탕으로 커스텀 CRM 삽입",
        ]}
      />
      <Project
        name="한입"
        duration="2022.05 - 2022.07"
        introduce="팬들을 위한 굿즈 나눔 플랫폼"
        role="프론트엔드 개발 및 ios 배포"
        techStack="React-Native, Typescript, Redux-Toolkit, React-Query, Firebase"
        contribution="90%"
        style={{ marginTop: "1rem" }}
        github="https://github.com/cmc-glory/hannib-frontend"
        notion="https://kauthenticity.notion.site/74ccaf1f81f64fe194edad325ef3910e"
        appStore="https://apps.apple.com/kr/app/%ED%95%9C%EC%9E%85-hannip/id1635377027"
        playStore="https://play.google.com/store/apps/details?id=com.hannib"
      />
      <Project
        name="밥타"
        duration="2022.08 - 2022.09"
        introduce="에브림타임 시간표를 입력 받아 모임의 공통된 시간을 찾아주는 서비스"
        role="기획, UI/UX 디자인, 프론트엔드 개발 및 배포"
        techStack="React, Typescript, React-Query, Google Analytics, AWS S3"
        contribution="100%"
        style={{ marginTop: "1rem" }}
        notion="https://kauthenticity.notion.site/906deec27e424c1bb4e6d51b212602e0"
        url="http://bob-ta.com/index"
        github="https://github.com/kauthenticity/bob-ta"
      />
    </section>
  )
}
