import React from "react"
import styled from "styled-components"
import { Table, Td } from "../styles"
export const Educations = () => {
  return (
    <section className="container">
      <h1>🎓 Educations</h1>
      <section className="subContainer">
        <h2>서강대학교 컴퓨터공학과</h2>
        <Duration>2018.02 - 2023.02 (예정)</Duration>
        <Table>
          <thead></thead>
          <tbody>
            <tr>
              <Td className="label" style={{ width: "6rem" }}>
                CGPA
              </Td>
              <Td>
                4.01/4.5
                <span style={{ color: "var(--gray500)" }}>
                  {" "}
                  (전공 4.16/4.5)
                </span>
              </Td>
            </tr>
          </tbody>
        </Table>
      </section>
    </section>
  )
}

const Duration = styled.div`
  color: var(--gray600);
  margin-top: 0.75rem;
`
