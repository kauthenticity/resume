import styled from "styled-components";
import { TbBrandGithub, TbMail } from "react-icons/tb";
import ExternalLinkButton from "@lib/ExternalLinkButton";

function Introduce() {
  return (
    <section className="container">
      <h1>
        더 나은 사용자 경험을 고민하는
        <br />
        프론트엔드 개발자 강진실입니다.
      </h1>
      <Description>
        기술이 바꾸는 라이프스타일에 관심이 많습니다.
        <br />
        누구나 쉽게 읽을 수 있는 코드를 작성하고자 합니다.
      </Description>
      <ContactButtonList>
        <li className="button__list">
          <ExternalLinkButton
            href="https://github.com/kauthenticity"
            icon={
              <TbBrandGithub
                className="contact__icon"
                size="20px"
                color="var(--gray50)"
              />
            }
          />
        </li>

        <li className="button__list">
          <ExternalLinkButton
            href="mailto:kauthenticity@gmail.com"
            icon={
              <TbMail
                className="contact__icon"
                size="20px"
                color="var(--gray50)"
                strokeWidth="1.75"
              />
            }
          />
        </li>
      </ContactButtonList>
    </section>
  );
}

export default Introduce;

const Description = styled.div`
  color: var(--gray700);
  font-size: 1.125rem;
  line-height: 160%;
`;

const ContactButtonList = styled.ul`
  display: flex;
  align-items: center;
  gap: 12px;

  margin-top: 16px;
  margin-bottom: 0;
`;
