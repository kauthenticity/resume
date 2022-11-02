import React from "react"
import styled from "styled-components"
import { BsGithub } from "react-icons/bs"
import * as colors from "../styles/colors"
import Velog from "../static/images/velog.png"
export const Footer = () => {
  return <FooterContainer></FooterContainer>
}
const IconImage = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 12px;
`
const FooterContainer = styled.footer`
  height: 8rem;
`
const IconsContainer = styled.div`
  display: flex;
  padding: 2rem 0 6rem 0;
  justify-content: flex-end;
  align-items: center;
`
const IconButton = styled.button`
  background-color: transparent;
  border: none;
`
