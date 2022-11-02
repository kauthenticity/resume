import React from "react"
import styled from "styled-components"
export const Educations = () => {
  return (
    <section className="container">
      <h1>Educations</h1>
      <section className="subContainer">
        <h2>서강대학교 컴퓨터공학과</h2>
        <Duration>2018.02 - 2023.02 (예정)</Duration>
      </section>
    </section>
  )
}

const Duration = styled.div`
  color: var(--gray600);
  margin-top: 0.75rem;
`
