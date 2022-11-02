import styled from "styled-components"

type DurationProps = {
  duration: string
}

export const Duration = ({ duration }: DurationProps) => {
  return <DurationContainer>{duration}</DurationContainer>
}

const DurationContainer = styled.div`
  color: var(--gray600);
  margin-top: 0.75rem;
`
