import styled from "styled-components";
import Text from "../Text/Text";

const Container = styled.div<{ backgroundColor: string; alignment: string }>`
  background-color: ${(props) => props.backgroundColor};
  padding: 0.5rem 1rem;
  display: flex;
  flex-wrap: wrap;
  border-radius: 0.5rem;
  ${(props) => props.alignment}
`;

interface MessageProps {
  text: string;
  userType: string;
}
export default function Message(messageProps: MessageProps) {
  const { text, userType } = messageProps;

  const fontColor = userType === "bot" ? "#222" : "#FFF";

  const backgroundColor =
    userType === "bot" ? "rgb(242, 242, 242)" : "rgb(0, 87, 255)";

  const alignment =
    userType === "bot"
      ? " margin-left: 0; margin-right: auto; text-align: left"
      : " margin-left: auto; margin-right: 0;text-align: right";

  return (
    <Container alignment={alignment} backgroundColor={backgroundColor}>
      <Text value={text} fontColor={fontColor} />
    </Container>
  );
}
