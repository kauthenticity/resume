import {useCallback} from 'react';
import styled from 'styled-components';

function Header() {
    const onClickTitle = useCallback(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }, []);

    return (
        <Container>
            <Title onClick={onClickTitle}>강진실의 이력서</Title>
        </Container>
    );
}

export default Header;

const Container = styled.header`
    position: fixed;
    top: 0px;
    left: 0;
    right: 0px;
    box-sizing: inherit;
    max-width: var(--max-width);
    margin: auto;
    background-color: rgba(255, 255, 255, 0.8);
`;
const Title = styled.div`
    padding: 1.5rem 0;
    padding-left: 1.5rem;
    font-weight: 400;
    cursor: pointer;
`;
