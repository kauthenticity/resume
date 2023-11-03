import styled from "styled-components";

type TColoredChipProps = {
  text: string;
} & React.HTMLAttributes<HTMLDivElement>;

function ColoredChip({ text, ...props }: TColoredChipProps) {
  return <Container {...props}>{text}</Container>;
}

export default ColoredChip;

const Container = styled.div`
  padding: 4px;
  font-size: 10px;
  line-height: 100%;
  border-radius: 4px;

  &.react {
    background-color: #e3f2fb;
    color: #193347;
  }

  &.typescript {
    background-color: #ecf4fe;
    color: #235a96;
  }

  &.redux__toolkit {
    background-color: #e8deee;
    color: #412454;
  }

  &.styled__components {
    background-color: #f4e8ed;
    color: #4c2337;
  }

  &.react__query {
    background-color: #fadec9;
    color: #4a280d;
  }
`;
