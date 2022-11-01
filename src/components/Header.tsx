import React from "react"
import styled from "styled-components"
export const Header = () => {
  return (
    <Container>
      <Title>강진실의 포트폴리오</Title>
    </Container>
  )
}

const Container = styled.header`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  max-width: 720px;
  margin: auto;
  background-color: rgba(255, 255, 255, 0.8);
`
const Title = styled.div`
  padding: 1.5rem 0;
  font-weight: 400;
`
