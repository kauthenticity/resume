import React from "react"
import styled from "styled-components"

type TableWithBorderProps = {
  tableElements: { label: string; description: string; isLink?: boolean }[]
}

export const TableWithBorder = ({ tableElements }: TableWithBorderProps) => {
  return (
    <Table>
      <thead></thead>
      <Tbody>
        {tableElements.map(({ label, description, isLink }) => (
          <Tr>
            <Td className="label">{label}</Td>
            <Td>
              {isLink ? <a href={description}>{description}</a> : description}
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}
const Tr = styled.tr`
  border-bottom: 1px solid hsla(0, 0%, 0%, 0.12);
`

const Td = styled.td`
  padding: 0.8125rem 0;

  &.label {
    font-weight: 700;
  }
`
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1.66rem;
`

const Tbody = styled.tbody`
  tr {
    &:first-child {
      border-top: 1px solid hsla(0, 0%, 0%, 0.12);
    }
  }
`
