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

  width: 36px;
  height: 36px;
  border-radius: 50%;

  background: var(--gray200);

  cursor: pointer;

  transition: background 0.2s ease;
  &:hover {
    background: var(--gray300);
  }
`;
