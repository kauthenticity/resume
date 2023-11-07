import styled from 'styled-components';

export const Title = styled.h2`
    margin-top: 1.6rem;
    margin-bottom: 0.8rem;
`;

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;

    font-family: 'Lexend-Variable';
    letter-spacing: 0.3px;

    li {
        display: inline-flex;
        align-items: center;
        gap: 6px;

        margin-right: 3rem;

        font-size: 0.9rem;
        font-weight: 600;
        color: var(--gray700);

        svg {
            color: var(--gray900);
            margin-top: 0;
        }

        a {
            color: currentcolor;
            text-decoration: underline;
        }
    }
`;
