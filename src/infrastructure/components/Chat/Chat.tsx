import styled from "styled-components";
import Text from "../Text/Text";
import Message from "../Message/Message";
import InputChat from "../InputChat/InputChat";

const Container = styled.div<{ isOpen: boolean }>`
  z-index: 2147483000;
  position: fixed;
  display: flex;
  flex-direction: column;
  bottom: 84px;
  right: 20px;
  height: ${(props) => (props.isOpen ? "min(704px, 100% - 104px)" : "0")};
  width: ${(props) => (props.isOpen ? "400px" : "0")};
  max-height: 704px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 5px 40px;
  border-radius: 16px;
  overflow: hidden;
  opacity: 1;
  transform-origin: right bottom;
  transition: width 200ms ease 0s, height 200ms ease 0s,
    max-height 200ms ease 0s, transform 300ms cubic-bezier(0, 1.2, 1, 1) 0s,
    opacity 83ms ease-out 0s;
  pointer-events: all;
`;

const Header = styled.div`
  padding: 1rem;
  height: 3.5rem;
  background-color: #0057ff;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const MessageContainer = styled.div`
  padding: 1rem;
  background-color: #ffffff;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: overlay;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #c7c7c7;
    border-radius: 20px;
    border: 3px solid #f1f1f1;
  }
`;

const IconWrapper = styled.div`
  width: 52px;
  height: 52px;

  & > img {
    border-radius: 50%;
    width: 52px;
    height: 52px;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
`;

const ActiveWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const Circle = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  background-color: #00c900;
  border-radius: 50%;
`;

interface ChatProps {
  isOpen: boolean;
}

const MESSAGE_LIST = [
  {
    text: "Buenas tardes",
    userType: "client",
  },
  {
    text: "¡Hola👋, aquí Rafael! ¿Qué te trae a Intercom hoy?",
    userType: "bot",
  },
  {
    text: "Vengo a mejorar omuni web chat?",
    userType: "client",
  },
  {
    text: "Puedo copiarte?",
    userType: "client",
  },
  {
    text: "mmmm... eso no nos gusta",
    userType: "bot",
  },
  {
    text: "Este mensaje es solo de prueba",
    userType: "bot",
  },
  {
    text: "Este mensaje es solo de prueba",
    userType: "client",
  },
  {
    text: "Este mensaje es solo de prueba",
    userType: "client",
  },
  {
    text: "Este mensaje es solo de prueba",
    userType: "bot",
  },
  {
    text: "Este mensaje es solo de prueba",
    userType: "client",
  },
  {
    text: "Este mensaje es solo de prueba",
    userType: "bot",
  },
];

export default function Chat(chatProps: ChatProps) {
  const { isOpen } = chatProps;

  return (
    <Container isOpen={isOpen}>
      <Header>
        <IconWrapper>
          <img
            src="https://static.intercomassets.com/avatars/6505925/square_128/RaphaelRoberts-3420-Edit-2-1682091893.jpg"
            alt="Raphael profile"
          />
        </IconWrapper>
        <TitleWrapper>
          <Text
            value="Omuni WebChat"
            fontWeight="font-bold"
            fontSize="text-xl"
          />

          <ActiveWrapper>
            <Circle />
            <Text
              value="Activo"
              fontSize="text-sm"
              fontColor="rgba(255, 255, 255, 0.7)"
            />
          </ActiveWrapper>
        </TitleWrapper>
      </Header>

      <MessageContainer>
        {MESSAGE_LIST.map((message,index) => (
          <Message key={index} {...message} />
        ))}
      </MessageContainer>
      <InputChat />
    </Container>
  );
}
