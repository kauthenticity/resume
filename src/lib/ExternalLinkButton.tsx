import styled from "styled-components";

interface IExternalLinkButton
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: React.ReactNode;
}

function ExternalLinkButton({ icon, ...props }: IExternalLinkButton) {
  return (
    <ExternalLink {...props} target="_blank" rel="noreferrer">
      {icon}
    </ExternalLink>
  );
}

export default ExternalLinkButton;

const ExternalLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 32px;
  height: 32px;
  border-radius: 50%;

  background: var(--gray800);

  cursor: pointer;

  transition: background 0.2s ease;
  &:hover {
    background: var(--gray900);
  }
`;
