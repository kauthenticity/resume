import {SIDE_PROJECTS_DATA} from '@constants/sideProjects';
import Divider from '@lib/Divider';
import Title from '@lib/Title';
import styled from 'styled-components';
import SideProjectCard from './SideProjectCard';

function SideProjects() {
    return (
        <section>
            <Title text="Side Projects" />

            <List>
                {SIDE_PROJECTS_DATA.map((data) => (
                    <ListItem key={data.title}>
                        <SideProjectCard {...data} href="/" />
                    </ListItem>
                ))}
            </List>

            <Divider />
        </section>
    );
}

export default SideProjects;

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
