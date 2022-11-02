import React from "react"
import styled from "styled-components"
import { Duration } from "./Duration"

export const Etc = () => {
  return (
    <section className="container">
      <h1>Etc.</h1>
      <section className="subContainer">
        <h2>서강대학교 컴퓨터공학과 부학생회장</h2>
        <Duration duration="2018.11 - 2020.02" />
      </section>
      <section className="subContainer">
        <h2> 수익형 서비스 런칭 동아리 CMC 10기</h2>
        <Duration duration="2022.05 - 2020.07" />
      </section>
      <section className="subContainer">
        <h2>TOEIC 935</h2>
        <Duration duration="2021.08.29" />
      </section>
    </section>
  )
}
