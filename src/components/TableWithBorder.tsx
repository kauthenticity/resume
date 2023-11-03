import React from "react";
import styled from "styled-components";

type TableWithBorderProps = {
  tableElements: { label: string; description: string; url: string }[];
};

export const TableWithBorder = ({ tableElements }: TableWithBorderProps) => {
  return (
    <Table>
      <thead />
      <Tbody>
        {tableElements.map(({ label, description, url }) => (
          <Tr key={label}>
            <Td className="label">{label}</Td>
            <Td className="desc">
              <a href={url} target="_blank" rel="noreferrer">
                {description}
              </a>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};
const Tr = styled.tr`
  //border-bottom: 1px solid hsla(0, 0%, 0%, 0.12);
`;

const Td = styled.td`
  padding: 0.8125rem 0 0.8125rem 0.8125rem;

  &.label {
    font-weight: 600;
    width: 8rem;
  }

  &.desc {
    color: var(--gray600);
  }

  a {
    color: inherit;
  }
`;
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1.66rem;
`;

const Tbody = styled.tbody`
  tr {
    &:first-child {
      //border-top: 1px solid hsla(0, 0%, 0%, 0.12);
    }
  }
`;
