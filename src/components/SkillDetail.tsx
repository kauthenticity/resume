import React from "react"
import styled from "styled-components"
import C from "../static/images/c.png"
import Javascript from "../static/images/javascript.png"
import Typescript from "../static/images/typescript.png"

type SkillDetailProps = {
  name: string
  contents: string[]
}
export const SkillDetail = ({ name, contents }: SkillDetailProps) => {
  return (
    <section>
      <h2>{name}</h2>
      {/* <ul>
        {contents.map((content) => (
          <li>- {content}</li>
        ))}
      </ul> */}
    </section>
  )
}
const ImageContainer = styled.div`
  display: flex;
`
const Image = styled.img`
  width: 3rem;
  height: 3rem;
  margin-right: 1rem;

  &:last-child {
    margin-right: 0;
  }
`
