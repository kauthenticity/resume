import styled from 'styled-components';

export const Title = styled.h2`
    margin-top: 1rem;
    margin-bottom: 0.5rem;
`;

export const ListItem = styled.li`
    display: flex;
    align-items: center;

    padding-inline-start: 0.25rem;

    font-size: 0.9rem;
    line-height: 200%;
    color: var(--gray700);

    svg {
        color: var(--gray900);
        margin-top: 0;
    }

    a {
        color: currentcolor;

        transition: color 0.2s ease;
        &:hover {
            color: var(--gray600);
        
    }
`;

export const LabelWrapper = styled.div`
    width: 6rem;

    display: flex;
    align-items: center;
    gap: 8px;

    font-family: 'Lexend Variable';
    letter-spacing: -0.2px;
    color: var(--gray900);
    font-weight: 700;
`;
