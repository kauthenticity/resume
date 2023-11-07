import styled from 'styled-components';

type TColoredChipProps = {
    text: string;
} & React.HTMLAttributes<HTMLDivElement>;

function ColoredChip({text, ...props}: TColoredChipProps) {
    return <Container {...props}>{text}</Container>;
}

export default ColoredChip;

const Container = styled.div`
    border-radius: 4px;
    padding: 2px 4px;

    font-family:
        Lexend Variable,
        sans-serif;
    font-weight: 400;
    font-size: 10px;
    line-height: 100%;
`;
