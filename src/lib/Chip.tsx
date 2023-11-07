import styled from 'styled-components';

type TChipProps = {
    text: string;
} & React.HTMLAttributes<HTMLDivElement>;

function Chip({text, ...props}: TChipProps) {
    return <StyledChip {...props}>{text}</StyledChip>;
}

export default Chip;

const StyledChip = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;

    padding: 4px 10px;
    border-radius: 16px;

    background: var(--gray100);
    color: var(--gray700);
    font-size: 0.8rem;
    line-height: 140%;

    transition: background 0.2s ease;

    &:hover {
        background: var(--gray200);
    }
`;
