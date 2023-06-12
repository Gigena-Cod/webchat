import styled from "styled-components"; 
import { useState } from "react";
import Chat from "./Chat/Chat";
import BubbleButton from "./BubbleButton/BubbleButton";

const Container = styled.div`
  z-index: 9999999;
  position: fixed;
  bottom: 20px;
  right: 20px;
  transition: transform 167ms cubic-bezier(0.33, 0, 0, 1) 0s;
  transform-origin: center center;
`;


export default function BubbleChat() {
  const [isOpenChat, setIsOpenChat] = useState(false);

  const handleShowChat = () => {
    setIsOpenChat((oldValue) => !oldValue);
  };

  return (
    <Container>
      <Chat isOpen={isOpenChat} />
      {/* <Chat isOpen={true} /> */}
      <BubbleButton isActive={isOpenChat} handleClick={handleShowChat} />
    </Container>
  );
}
