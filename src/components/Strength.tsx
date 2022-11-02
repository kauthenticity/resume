import React from "react"
import styled from "styled-components"

export const Strength = () => {
  return (
    <section className="container">
      <h1>Strength</h1>
      <section className="subContainer">
        <h2>흐름을 읽는 능력</h2>
        <Ul>
          <Li>
            - 변화를 타인보다 빨리 캐치해요. 특히 패션, 미디어와 같은 시각적
            정보에 민감해요.
          </Li>
          <Li>
            - 저만의 트렌드를 읽는 능력을 바탕으로 뒤쳐지지 않는 프론트엔드
            개발자가 될 자신이 있어요!
          </Li>
        </Ul>
      </section>
      <section className="subContainer">
        <h2>깔끔한 코드</h2>
        <Ul>
          <Li>- 정돈하는 것을 좋아해서, 코드마저 정리해 버려요</Li>
          <Li>
            - 처음 보는 사람이라도 최소한 흐름을 이해할 수 있도록 친절하고,
            재사용 가능한 코드 작성을 지향해요
          </Li>
          <Li>- 코드 리뷰 할 때마다 항상 깔끔한 코드라는 말을 들어요</Li>
        </Ul>
      </section>
      <section>
        <h2>팀을 부드럽게 만드는 힘</h2>
        <Ul>
          <Li>
            - 다양한 가치관을 수용할 줄 알지만, 저만의 주관은 뚜렷해요. 저만의
            존중과 웃음을 바탕으로 팀을 부드럽게 만들어요.
          </Li>
          <Li>
            - 제게 주어진 일을 못 끝내본 적이 없어요. 추진력과 책임감은 저의
            뚜렷한 장점이에요.
          </Li>
          <Li>
            - 항상 프로젝트 팀원에게 새로운 프로젝트를 제안 받기에, 저 스스로가
            좋은 동료라고 생각해요!
          </Li>
        </Ul>
      </section>
    </section>
  )
}

const Ul = styled.ul``

const Li = styled.li``
