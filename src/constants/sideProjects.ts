import type { TSideProject } from "../types/SideProjectCard";

export const SIDE_PROJECTS_DATA: TSideProject[] = [
  {
    imagePath: "/images/healthier.png",
    title: "헬시어",
    description: "증상 감별 및 건강 관리 서비스",
    techStacks: [
      {
        text: "React",
        className: "react",
      },
      {
        text: "Typescript",
        className: "typescript",
      },
      {
        text: "Redux-Toolkit",
        className: "redux__toolkit",
      },
      {
        text: "React-Query",
        className: "react__query",
      },
    ],
  },
  {
    imagePath: "/images/hannip.png",
    title: "한입",
    description: "스타의 팬들을 위한 굿즈 나눔 플랫폼",
    techStacks: [
      {
        text: "React-Native",
        className: "react",
      },
      {
        text: "Typescript",
        className: "typescript",
      },
      {
        text: "Redux-Toolkit",
        className: "redux__toolkit",
      },
      {
        text: "React-Query",
        className: "react__query",
      },
    ],
  },
];
