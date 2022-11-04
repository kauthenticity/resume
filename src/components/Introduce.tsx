import React from "react"
import styled from "styled-components"
import { TableWithBorder } from "./TableWithBorder"
export const Introduce = () => {
  return (
    <section className="container">
      <h1>
        깔끔함을 추구하는
        <br />
        프론트엔드 개발자 강진실입니다.
      </h1>
      <Description>
        패션, 미디어와 같은 라이프스타일에 관심이 많습니다.
        <br />
        UI 디자인 및 구현 경험을 통해 사용자 인터렉션에 대한 이해도가 높습니다.
        <br />
        누구나 쉽게 읽을 수 있을 수 있는 코드를 작성하고자 노력합니다.
      </Description>
      <TableWithBorder
        tableElements={[
          {
            label: "Github",
            description: "https://github.com/kauthenticity",
            isLink: true,
          },
          { label: "Email", description: "kauthenticity@gmail.com" },
          {
            label: "Velog",
            description: "https://velog.io/@kauthenticity",
            isLink: true,
          },
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
