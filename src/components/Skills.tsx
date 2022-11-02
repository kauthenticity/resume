import React from "react"
import styled from "styled-components"
import { SkillDetail } from "./SkillDetail"
import { TableWithBorder } from "./TableWithBorder"

const LanguageContents = ["Javascript, Typescript", "Python", "C"]
const FrontendContents = ["React, React-Native"]
const BackendContents = ["Express", "MongoDB, Mongoose"]

export const Skills = () => {
  return (
    <section className="container">
      <h1>Skills</h1>
      <section className="subContainer">
        <h2>React</h2>
        <ul>
          <li>
            - React Hook 및 dependency를 이해해서 능숙하게 사용할 수 있어요.
          </li>
          <li>
            - 재사용 가능한 컴포넌트를 통한 코드의 간결성 및 유지 보수의
            효율성을 지향해요.
          </li>
          <li>
            - React Query, Redux Toolkit과 같은 상태 관리 라이브러리 사용에
            익숙해요.
          </li>
        </ul>
      </section>
      <section className="subContainer">
        <h2>React Native</h2>
        <ul>
          <li>
            - 코어 컴포넌트와 애니메이션을 사용해서 원하는 UI/UX를 구현할 수
            있어요.
          </li>
          <li>- 모바일 환경을 고려한 navigation 구조를 설계할 수 있어요.</li>
        </ul>
      </section>
      <section className="subContainer">
        <h2>Javascript, Typescript</h2>
        <ul>
          <li>- es6 문법을 사용해서 원하는 코드를 편하게 작성할 수 있어요.</li>
          <li>
            - React에서 객체에 타입을 지정해서 코드를 빠르게 작성하고 에러를
            방지할 수 있어요.
          </li>
        </ul>
      </section>
      <section className="subContainer">
        <h2>Python</h2>
        <ul>
          <li>- 알고리즘 문제를 python을 사용해서 풀 수 있어요.</li>
          <li>
            - colab을 활용하여 Linear Regression, PCA 문제 등을 해결할 수
            있어요.{" "}
          </li>
        </ul>
      </section>
    </section>
  )
}

const ImageContainer = styled.div`
  display: flex;
  margin-top: 1rem;
  margin-bottom: 2rem;
`
const Image = styled.img`
  width: 3rem;
  height: 3rem;
  margin-right: 1rem;
  border-radius: 0.8rem;
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.15);

  &:last-child {
    margin-right: 0;
  }
`
