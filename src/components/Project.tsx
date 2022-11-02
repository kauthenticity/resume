import React from "react"
import styled from "styled-components"
import { SiNotion } from "react-icons/si"
import { BsGithub } from "react-icons/bs"
import { RiAppStoreFill } from "react-icons/ri"
import { IoLogoGooglePlaystore } from "react-icons/io5"
import { BiLink } from "react-icons/bi"
import { Duration } from "./Duration"
import * as colors from "../styles"
import { Table, Td } from "../styles"

type ProjectProps = {
  name: string
  duration: string
  introduce: string
  role: string
  techStack: string
  contribution?: string
  style?: React.CSSProperties
  notion?: string
  github?: string
  url?: string
  appStore?: string
  playStore?: string
  description?: string[]
}

export const Project = ({
  name,
  duration,
  introduce,
  role,
  techStack,
  contribution,
  description,
  style,
  url,
  github,
  notion,
  appStore,
  playStore,
}: ProjectProps) => {
  return (
    <section style={style} className="subContainer">
      <h2>{name}</h2>
      <Duration duration={duration}></Duration>
      <Table>
        <tbody>
          <tr>
            <Td className="label">소개</Td>
            <Td>{introduce}</Td>
          </tr>
          <tr>
            <Td className="label">역할</Td>
            <Td>{role}</Td>
          </tr>
          <tr>
            <Td className="label">기술 스택</Td>
            <Td>{techStack}</Td>
          </tr>
          {contribution && (
            <tr>
              <Td className="label">기여도</Td>
              <Td>{contribution}</Td>
            </tr>
          )}
          {description && (
            <tr>
              <Td className="label">상세</Td>
              <Td>
                <ul style={{ margin: 0 }}>
                  {description.map((desc) => (
                    <li style={{ color: "var(--gray900)" }}>{desc}</li>
                  ))}
                </ul>
              </Td>
            </tr>
          )}
        </tbody>
      </Table>
      <LinkContainer>
        {url && (
          <LinkButton>
            <a href={url} target="_blank">
              <BiLink size={16} color={colors.gray700} />
            </a>
          </LinkButton>
        )}
        {notion && (
          <LinkButton>
            <a href={notion} target="_blank">
              <SiNotion size={16} color={colors.gray700} />
            </a>
          </LinkButton>
        )}
        {github && (
          <LinkButton>
            <a href={github} target="_blank">
              <BsGithub size={16} color={colors.gray700} />
            </a>
          </LinkButton>
        )}
        {appStore && (
          <LinkButton>
            <a href="" target="_blank">
              <RiAppStoreFill size={16} color={colors.gray700} />
            </a>
          </LinkButton>
        )}
        {playStore && (
          <LinkButton>
            <a href="" target="_blank">
              <IoLogoGooglePlaystore size={16} color={colors.gray700} />
            </a>
          </LinkButton>
        )}
      </LinkContainer>
    </section>
  )
}
const LinkButton = styled.button`
  padding: 0.3rem 1.2rem;
  border-radius: 0.4rem;
  background-color: var(--gray200);

  border: none;

  margin-right: 0.5rem;
  cursor: pointer;
`
const LinkContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

// const Table = styled.table`
//   margin: 0.75rem 0;
//   border-collapse: collapse;
// `
// const Td = styled.td`
//   &.label {
//     color: var(--gray600);
//     min-width: 6rem;
//   }
//   padding: 0.3rem 0;
// `
