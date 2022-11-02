import React from "react"
import styled from "styled-components"
import { TableWithBorder } from "./TableWithBorder"
export const Introduce = () => {
  return (
    <section className="container">
      <h1>프론트엔드 개발자 강진실입니다.</h1>
      <Description>
        시각적인 정보와 트렌드에 예민합니다. 동시에 분석하는 것을 좋아합니다.
        <br />
        누구나 읽기 좋고 고쳐 사용할 수 있는 코드를 작성하고자 노력합니다.
        <br />
        주변에 좋은 프론트엔드 개발자라고 하면 강진실이 떠오를 수 있도록 매일
        배워나가고 있습니다.
      </Description>
      <TableWithBorder
        tableElements={[
          {
            label: "Github",
            description: "https://github.com/kauthenticity",
            isLink: true,
          },
          { label: "Email", description: "kauthenticity@gmail.com" },
          { label: "Mobile", description: "010-2229-7345" },
        ]}
      />
    </section>
  )
}

const Description = styled.div`
  color: var(--gray700);
  font-size: 1.25rem;
  line-height: 32px;
`
