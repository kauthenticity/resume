import React from "react";
import styled from "styled-components";
export const Introduce = () => {
  return (
    <Container>
      <H1>
        프론트엔드 개발자 <span className="highlight">강진실</span>입니다.
      </H1>
      <Description>
        시각적인 정보와 트렌드에 예민합니다. 동시에 분석하는 것을 좋아합니다.
        <br />
        누구나 읽기 좋고 고쳐 사용할 수 있는 코드를 작성하고자 노력합니다.
        <br />
        주변에 좋은 프론트엔드 개발자라고 하면 강진실이 떠오를 수 있도록 매일
        배워나가고 있습니다.
      </Description>
      <Table>
        <thead></thead>
        <Tbody>
          <Tr>
            <Td>Github</Td>
            <Td>
              <a href="https://github.com/kauthenticity" target="_blank">
                https://github.com/kauthenticity
              </a>
            </Td>
          </Tr>
          <Tr>
            <Td>Email</Td>
            <Td>kauthenticity@gmail.com</Td>
          </Tr>
          <Tr>
            <Td>Mobile</Td>
            <Td>010-2229-7345</Td>
          </Tr>
        </Tbody>
      </Table>
    </Container>
  );
};

const Tr = styled.tr``;

const Td = styled.td`
  padding: 0.8125rem 0;
`;
const Table = styled.table`
  width: 100%;
`;

const Tbody = styled.tbody``;

const Container = styled.section``;
const H1 = styled.h1``;
const Description = styled.div`
  color: var(--gray700);
  font-size: 20px;
  line-height: 32px;
`;
