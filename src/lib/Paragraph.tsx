import styled from 'styled-components';

type TParagraphProps = {lines: string[]} & React.HTMLAttributes<HTMLDivElement>;

function Paragraph({lines, ...props}: TParagraphProps) {
    return (
        <Container {...props}>
            {lines.map((line, idx) => (
                <Line key={idx}>{line}</Line>
            ))}
        </Container>
    );
}

export default Paragraph;

const Container = styled.div`
    margin-top: 0.8rem;
`;

const Line = styled.p`
    color: var(--gray800);

    font-size: 0.95rem;
`;
