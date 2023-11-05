import type { TSideProject } from "../types/SideProjectCard.type";
import { TECH_STACKS } from "./techStacks";

export const SIDE_PROJECTS_DATA: TSideProject[] = [
  {
    imagePath: "/images/healthier.png",
    title: "헬시어",
    description: "증상 감별 및 건강 관리 서비스",
    url: "",
    techStacks: [
      TECH_STACKS.REACT,
      TECH_STACKS.TYPESCRIPT,
      TECH_STACKS.REDUX_TOOLKIT,
      TECH_STACKS.REACT_QUERY,
    ],
  },
  {
    imagePath: "/images/hannip.png",
    title: "한입",
    description: "스타의 팬들을 위한 굿즈 나눔 플랫폼",
    url: "https://www.notion.so/kauthenticity/74ccaf1f81f64fe194edad325ef3910e?pvs=4",
    techStacks: [
      TECH_STACKS.REACT,
      TECH_STACKS.TYPESCRIPT,
      TECH_STACKS.REDUX_TOOLKIT,
      TECH_STACKS.REACT_QUERY,
    ],
  },
  {
    imagePath: "/images/bobta.png",
    title: "밥타",
    description: "AI 기반 식사 모임 매칭 서비스",
    url: "https://kauthenticity.notion.site/906deec27e424c1bb4e6d51b212602e0?pvs=4",
    techStacks: [
      TECH_STACKS.REACT,
      TECH_STACKS.TYPESCRIPT,
      TECH_STACKS.REACT_QUERY,
      TECH_STACKS.STYLED_COMPONENT,
    ],
  },
];
