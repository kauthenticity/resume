import styled from 'styled-components';

type TColoredChipProps = {
    text: string;
} & React.HTMLAttributes<HTMLDivElement>;

function ColoredChip({text, ...props}: TColoredChipProps) {
    return <Container {...props}>{text}</Container>;
}

export default ColoredChip;

const Container = styled.div`
    padding: 4px;
    font-size: 10px;
    line-height: 100%;
    border-radius: 4px;
`;
