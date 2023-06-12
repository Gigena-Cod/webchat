import styled from "styled-components";

const Container = styled.div`
  user-select: none;
  z-index: 09999999;
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 48px;
  height: 48px;
  transition: transform 167ms cubic-bezier(0.33, 0, 0, 1) 0s;
  transform-origin: center center;
`;
const WrapperButton = styled.div`
  position: absolute;
  bottom: 0px;
  right: 0px;
  background: rgb(0, 87, 255);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  backface-visibility: hidden;
  overflow: hidden;
  -webkit-font-smoothing: antialiased;

  &:hover {
    transition: all 250ms cubic-bezier(0.33, 0, 0, 1) 0s;
    transform: scale(1.1);
  }
`;

const ButtonChat = styled.div<{ isActive: boolean }>`
  user-select: none;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
  transition: transform 0.16s linear 0s, opacity 0.08s linear 0s;
  opacity: 1;
  transform: rotate(0deg) scale(1);
  transform: ${(props) =>
    props.isActive ? "rotate(180deg);" : "rotate(0deg);"};
  opacity: ${(props) => (props.isActive ? "0" : "1")};
  > svg {
    width: 24px;
    height: 24px;

    > path {
      fill: rgb(255, 255, 255);
    }
  }
`;
const ButtonArrow = styled.div<{ isActive: boolean }>`
  user-select: none;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
  transition: transform 0.16s linear 0s, opacity 0.08s linear 0s;
  opacity: 1;
  transform: ${(props) =>
    props.isActive ? "rotate(0deg);" : "rotate(180deg);"};
  opacity: ${(props) => (props.isActive ? "1" : "0")};

  > svg {
    width: 24px;
    height: 24px;

    > path {
      fill: rgb(255, 255, 255);
    }
  }
`;

interface BubbleButtonProps {
  isActive: boolean;
  handleClick: () => void;
}

export default function BubbleButton(bubbleButtonProps: BubbleButtonProps) {
  const { handleClick, isActive } = bubbleButtonProps;

  return (
    <Container onClick={handleClick}>
      <WrapperButton>
        <ButtonChat isActive={isActive}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 32">
            <path d="M28 32s-4.714-1.855-8.527-3.34H3.437C1.54 28.66 0 27.026 0 25.013V3.644C0 1.633 1.54 0 3.437 0h21.125c1.898 0 3.437 1.632 3.437 3.645v18.404H28V32zm-4.139-11.982a.88.88 0 00-1.292-.105c-.03.026-3.015 2.681-8.57 2.681-5.486 0-8.517-2.636-8.571-2.684a.88.88 0 00-1.29.107 1.01 1.01 0 00-.219.708.992.992 0 00.318.664c.142.128 3.537 3.15 9.762 3.15 6.226 0 9.621-3.022 9.763-3.15a.992.992 0 00.317-.664 1.01 1.01 0 00-.218-.707z"></path>
          </svg>
        </ButtonChat>
        <ButtonArrow isActive={isActive}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.601 8.39897C18.269 8.06702 17.7309 8.06702 17.3989 8.39897L12 13.7979L6.60099 8.39897C6.26904 8.06702 5.73086 8.06702 5.39891 8.39897C5.06696 8.73091 5.06696 9.2691 5.39891 9.60105L11.3989 15.601C11.7309 15.933 12.269 15.933 12.601 15.601L18.601 9.60105C18.9329 9.2691 18.9329 8.73091 18.601 8.39897Z"
              fill="white"
            ></path>
          </svg>
        </ButtonArrow>
      </WrapperButton>
    </Container>
  );
}
