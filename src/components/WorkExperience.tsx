import { Project } from "./Project";
import WorkExperienceIcon from "../static/images/WorkExperience.png";

export const WorkExperience = () => {
  return (
    <section className="container">
      <h1>
        <img className="icon" src={WorkExperienceIcon} alt="" /> Work
        Experiences
      </h1>
      <Project
        name="(주) 퀄리소프트"
        duration="2021.12 - 2022.06"
        introduce="Dynamics365 기반 커스텀 CRM 개발"
        role="프론트엔드 인턴"
        techStacks={["Javascript", "HTML5", "CSS", "JQuery", "Vue"]}
        description={[
          "고객사의 요구에 맞는 CRM 구축 및 개발",
          "데모 CRM 구축 과정 간소화",
          "소스코드 서버 migration",
        ]}
        outcome={[
          "Git을 통한 협업 시작에 따른 형상 관리 및 유지 보수 활성화, 보다 안정적인 서버 확보",
          "데모 CRM 사이트 생성 시간 단축",
          "소스 코드 저장소 변경에 따른 작업 시간 단축 및 생산성 향상",
        ]}
      />
      {/* <Project
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
        outcome={[
          "Apple App Store, Google Play Store 등록",
          "데모데이를 통한 서비스 시연",
        ]}
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
        outcome={["200명 사용자 확보", "서비스 사용자의 프로젝트 합류 요청"]}
      />
      */}
      <Project
        name="네이버파이낸셜"
        duration="2023.01 - 2023.03"
        introduce="팀내 협업 도구 개발"
        role="프론트엔드 인턴"
        techStacks={["React", "Typescript", "Styled-Components"]}
        style={{ marginTop: "1rem" }}
        description={[
          "기획, 디자인, 개발 총괄 1인 프로젝트",
          "Github API를 사용한 협업 도구 개발",
          "Github Projects를 통한 개발 일정 관리",
        ]}
        outcome={[
          "함수형 프로그래밍을 통한 산발적 데이터 가공",
          "협업에서 가독성을 위한 클린 코드 작성법",
        ]}
      />
    </section>
  );
};
