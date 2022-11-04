import React from "react"
import { Duration } from "./Duration"
import { Table, Td } from "../styles"

export const Etc = () => {
  return (
    <section className="container">
      <h1>Etc.</h1>
      <section className="subContainer">
        <h2>서강대학교 컴퓨터공학과 부학생회장</h2>
        <Duration duration="2018.11 - 2020.02" />
      </section>
      <section className="subContainer">
        <h2>서강대학교 기초 컴퓨터 그래픽스 멘토</h2>
        <Duration duration="2021.03 - 2021.06" />
        <Table>
          <tbody>
            <tr>
              <Td className="label">상세</Td>
              <Td>openGL을 비롯한 그래픽스 관련 질의 응답 및 과제 채점</Td>
            </tr>
          </tbody>
        </Table>
      </section>
      <section className="subContainer">
        <h2>서강대학교 기초 인공지능 프로그래밍 멘토</h2>
        <Duration duration="2021.09 - 2021.12" />
        <Table>
          <tbody>
            <tr>
              <Td className="label">상세</Td>
              <Td>Python 언어 관련 질의 응답 및 과제 채점</Td>
            </tr>
          </tbody>
        </Table>
      </section>
      <section className="subContainer">
        <h2> 수익형 서비스 런칭 동아리 CMC 10기</h2>
        <Duration duration="2022.05 - 2022.07" />
        <Table>
          <tbody>
            <tr>
              <Td className="label">상세</Td>
              <Td>
                <ul style={{ margin: 0 }}>
                  <li style={{ color: "var(--gray900)" }}>
                    팬들을 위한 굿즈 나눔 플랫폼 "한입" 개발
                  </li>
                  <li style={{ color: "var(--gray900)" }}>
                    데모데이를 통한 서비스 시연
                  </li>
                </ul>
              </Td>
            </tr>
          </tbody>
        </Table>
      </section>
      <section className="subContainer">
        <h2>TOEIC 935</h2>
        <Duration duration="2021.08.29" />
      </section>
    </section>
  )
}