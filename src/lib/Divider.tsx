import styled from 'styled-components';

function Divider() {
    return <StyledDivider />;
}

export default Divider;

const StyledDivider = styled.div`
    width: 100%;
    height: 1px;
    background: var(--gray200);
    margin-top: 3rem;
    margin-bottom: 1rem;
`;
