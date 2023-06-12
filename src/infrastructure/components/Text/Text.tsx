import styled from "styled-components";

interface TextProps {
  fontWeight?: FontWeight;
  fontSize?: TextSize;
  fontColor?: string;
  value: string;
}

type TextSize =
  | "text-xs"
  | "text-sm"
  | "text-base"
  | "text-lg"
  | "text-xl"
  | "text-2xl"
  | "text-3xl"
  | "text-4xl";

type FontWeight = "font-normal" | "font-semibold" | "font-bold";

const Container = styled.p<{
  fontSize?: TextSize;
  fontWeight?: FontWeight;
  fontColor?: string;
}>`
  color: ${(props) => props.fontColor ?? "#FFF"};
  margin: unset;
  display: flex;

  ${(props) => {
    switch (props.fontSize) {
      case "text-xs":
        return `
          font-size: 0.75rem;
          line-height: 1rem;
        `;
      case "text-sm":
        return `
          font-size: 0.875rem;
          line-height: 1.25rem;
        `;
      case "text-base":
        return `
          font-size: 1rem;
          line-height: 1.5rem;
        `;
      case "text-lg":
        return `
          font-size: 1.125rem;
          line-height: 1.75rem;
        `;
      case "text-xl":
        return `
          font-size: 1.25rem;
          line-height: 1.75rem;
        `;
      case "text-2xl":
        return `
          font-size: 1.5rem;
          line-height: 2rem;
        `;
      case "text-3xl":
        return `
          font-size: 1.875rem;
          line-height: 2.25rem;
        `;
      case "text-4xl":
        return `
          font-size: 2.25rem;
          line-height: 2.5rem;
        `;
      default:
        return `
          font-size: 1rem;
          line-height: 1.5rem;
        `;
    }
  }}

  ${(props) => {
    switch (props.fontWeight) {
      case "font-normal":
        return `
          font-weight: 400;
        `;
      case "font-semibold":
        return `
          font-weight: 600;
        `;
      case "font-bold":
        return `
          font-weight: 700;
        `;
      default:
        return `
          font-weight: 400;
        `;
    }
  }}
`;

export default function Text(textProps: TextProps) {
  const { value, fontColor, fontSize, fontWeight } = textProps;

  return (
    <Container
      fontWeight={fontWeight}
      fontColor={fontColor}
      fontSize={fontSize}
    >
      {value}
    </Container>
  );
}
