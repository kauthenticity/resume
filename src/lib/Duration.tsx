import styled from 'styled-components';

type TDurationProps = {
    duration: string;
};

export function Duration({duration}: TDurationProps) {
    return <DurationContainer>{duration}</DurationContainer>;
}

const DurationContainer = styled.div`
    font-size: 0.9rem;
    color: var(--gray600);

    margin-top: 0.3rem;
`;
