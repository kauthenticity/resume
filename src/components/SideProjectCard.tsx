import styled from "styled-components";
import FlexBox from "../lib/FlexBox";
import ColoredChip from "../lib/ColoredChip";
import type { TTechStack } from "../types/SideProjectCard";

type TSideProjectCardProps = {
  imagePath: string;
  title: string;
  description: string;
  techStacks: TTechStack[];
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

function SideProjectCard({
  imagePath,
  title,
  description,
  techStacks,
  ...props
}: TSideProjectCardProps) {
  return (
    <a {...props} target="_blank">
      <div>
        <ImageWrapper>
          <Image src={imagePath} />
        </ImageWrapper>

        <Title>
          <p className="project__title">{title}</p>
        </Title>

        <Description>
          <p className="project__description">{description}</p>
        </Description>

        <FlexBox gap="4px" mt="8px" flexWrap="wrap">
          {techStacks.map((techStack) => (
            <ColoredChip
              key={techStack.text}
              text={techStack.text}
              className={techStack.className}
              style={{ marginBottom: "2px" }}
            />
          ))}
        </FlexBox>
      </div>
    </a>
  );
}

export default SideProjectCard;

const Description = styled.div`
  margin-top: 2px;

  .project__description {
    font-size: 0.875rem;
    color: var(--gray600);
  }
`;

const Title = styled.div`
  margin-top: 16px;

  .project__title {
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 140%;
  }
`;

const Image = styled.img`
  max-width: 100%;

  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const ImageWrapper = styled.div`
  width: 270px;
  height: 180px;

  overflow: hidden;
  border-radius: 1rem;
`;
