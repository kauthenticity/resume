import styled from 'styled-components';

export const Table = styled.table`
    margin: 0.75rem 0;
    border-collapse: collapse;
`;
export const Td = styled.td`
    &.label {
        width: 6rem;
        box-sizing: border-box;
        padding-left: 0.4rem;

        color: var(--gray500);

        vertical-align: top;
    }
    padding: 0.3rem 0;
`;
