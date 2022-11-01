import React from "react"
import styled from "styled-components"

type ProjectProps = {
  name: string
  duration: string
  introduce: string
  role: string
  techStack: string
  contribution: string
  style?: React.CSSProperties
}

export const Project = ({
  name,
  duration,
  introduce,
  role,
  techStack,
  contribution,
  style,
}: ProjectProps) => {
  return (
    <section style={style}>
      <h2>{name}</h2>
      <Duration>{duration}</Duration>
      <Table>
        <thead></thead>
        <Tbody>
          <Tr>
            <Td className="label">소개</Td>
            <Td>{introduce}</Td>
          </Tr>
          <Tr>
            <Td className="label">역할</Td>
            <Td>{role}</Td>
          </Tr>
          <Tr>
            <Td className="label">기술 스택</Td>
            <Td>{techStack}</Td>
          </Tr>
          <Tr>
            <Td className="label">기여도</Td>
            <Td>{contribution}</Td>
          </Tr>
        </Tbody>
      </Table>
    </section>
  )
}
const Duration = styled.div`
  color: var(--gray600);
  margin-top: 0.75rem;
`
const Table = styled.table`
  margin-top: 1rem;
`
const Td = styled.td`
  &.label {
    color: var(--gray600);
  }
  padding: 0.4rem 0;
`

const Tr = styled.tr``
const Tbody = styled.tbody``
