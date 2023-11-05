import styled from "styled-components";
import WorkExperienceIcon from "../static/images/WorkExperience.png";
import SideProjectCard from "./SideProjectCard";
import { SIDE_PROJECTS_DATA } from "../constants/sideProjects";

export const Projects = () => {
  return (
    <section className="container">
      <h1>
        <img className="icon" src={WorkExperienceIcon} alt="" /> Side Projects
      </h1>

      <List>
        {SIDE_PROJECTS_DATA.map((data) => (
          <ListItem key={data.title}>
            <SideProjectCard {...data} href="/" />
          </ListItem>
        ))}
      </List>
    </section>
  );
};

const List = styled.ul`
  width: 100%;

  display: inline-flex;
  flex-wrap: wrap;

  gap: 12px;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const ListItem = styled.li``;