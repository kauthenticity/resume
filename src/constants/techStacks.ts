import type { TTechStack } from "types/SideProjectCard.type";

export const TECH_STACKS: { [name in string]: TTechStack } = {
  REACT: {
    text: "React",
    className: "chip__react",
  },
  TYPESCRIPT: {
    text: "Typescript",
    className: "chip__typescript",
  },
  REDUX_TOOLKIT: {
    text: "Redux-Toolkit",
    className: "chip__redux__toolkit",
  },
  REACT_QUERY: {
    text: "React-Query",
    className: "chip__react__query",
  },
  REACT_NATIVE: {
    text: "React-Native",
    className: "chip__react",
  },
  STYLED_COMPONENT: {
    text: "Styled-Component",
    className: "chip__styled__components",
  },
  HTML5: {
    text: "HTML5",
    className: "chip__html5",
  },
  CSS: {
    text: "CSS",
    className: "chip__css",
  },
  JQUERY: {
    text: "JQuery",
    className: "chip__jquery",
  },
  VUE: {
    text: "Vue",
    className: "chip__vue",
  },
  JAVASCRIPT: {
    text: "Javascript",
    className: "chip__javascript",
  },
};
