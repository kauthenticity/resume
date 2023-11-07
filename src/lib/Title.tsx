import styled from 'styled-components';

type TTitleProps = {
    text: string;
};

function Title({text}: TTitleProps) {
    return (
        <H1>
            {text}
            <Highlight />
        </H1>
    );
}

export default Title;

const H1 = styled.h1`
    position: relative;
`;

const Highlight = styled.span`
    width: 24px;
    height: 24px;
    border-radius: 50%;

    position: absolute;
    top: 3px;
    right: -15px;
    z-index: -1;

    background: var(--main100);
`;
