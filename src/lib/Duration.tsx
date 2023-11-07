import styled from 'styled-components';

type TDurationProps = {
    duration: string;
};

export function Duration({duration}: TDurationProps) {
    return <DurationContainer>{duration}</DurationContainer>;
}

const DurationContainer = styled.div`
    color: var(--gray600);
    margin-top: 0.75rem;
`;
