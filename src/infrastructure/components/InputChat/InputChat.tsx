import { useState } from "react";
import styled from "styled-components";

const Container = styled.div<{ isFocused: boolean }>`
  box-sizing: border-box;
  padding: 1rem 8rem 1rem 0.75rem;
  width: 100%;
  min-height: 6rem;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  font-weight: normal;
  background-color: rgb(255, 255, 255);
  white-space: pre-wrap;
  overflow-wrap: break-word;
  max-height: 10rem;
  position: relative;
  transition: all 167ms cubic-bezier(0.33, 0, 0, 1) 0s;
  box-shadow: ${(props) =>
    props.isFocused && "rgba(0, 0, 0, 0.1) 0px 0px 100px 0px;"};
`;

const Input = styled.textarea`
  color: #222;
  background-color: #ffffff;
  width: 100%;
  min-height: 3rem;
  max-height: 7rem;
  overflow-y: auto;
  resize: none;
  padding: 8px;
  border: none;
  outline: none;
  border-radius: 4px;
  font-family: Arial, sans-serif;
  font-size: 14px;

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

const ButtonsWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  margin: 0;
  right: 1rem;
  top: 0;
  bottom: 0;
  gap: 1rem;
`;

const GifIcon = styled.div`
  cursor: pointer;
`;

const EmojiPicker = styled.div`
  cursor: pointer;
`;

const AttachFilesIcon = styled.div`
  cursor: pointer;
`;

export default function InputChat() {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <Container isFocused={isFocused}>
      <Input
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder="Whrite a reply"
        rows={1}
      />
      <ButtonsWrapper>
        <GifIcon >
          <svg
            width="17"
            height="16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.223 3.3H14a.7.7 0 01.7.7v8a.7.7 0 01-.7.7H4.223a.7.7 0 01-.7-.7h-1.3a2 2 0 002 2H14a2 2 0 002-2V4a2 2 0 00-2-2H4.223a2 2 0 00-2 2h1.3a.7.7 0 01.7-.7z"
              fill="#757575"
            ></path>
            <path
              d="M5.658 7.1a1.883 1.883 0 00-.172-.671 1.735 1.735 0 00-.418-.57 1.95 1.95 0 00-.672-.399 2.697 2.697 0 00-.922-.144c-.507 0-.937.103-1.289.308-.351.206-.618.491-.8.856-.183.362-.274.781-.274 1.258v.64c0 .35.046.673.137.973.094.297.237.557.43.781.192.221.437.395.734.52s.65.187 1.059.187c.382 0 .712-.053.988-.16.279-.11.506-.257.683-.441.18-.188.313-.4.399-.637.086-.24.129-.49.129-.75V7.81H3.53v.903h.929v.234a.844.844 0 01-.106.415.78.78 0 01-.32.308 1.116 1.116 0 01-.539.117c-.263 0-.475-.06-.637-.183a1.066 1.066 0 01-.347-.508 2.305 2.305 0 01-.106-.723V7.75c0-.44.091-.78.274-1.02.182-.241.444-.363.785-.363.135 0 .256.019.363.055a.863.863 0 01.48.39.91.91 0 01.102.29h1.25zm2.328 3.642V5.409H6.701v5.333h1.285zm2.524 0V8.73h2.058v-1H10.51V6.44h2.265V5.41h-3.55v5.332h1.285z"
              fill="#757575"
            ></path>
          </svg>
        </GifIcon>
        <EmojiPicker>
          <svg
            width="16"
            height="16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="8"
              cy="8"
              r="6.725"
              stroke="#757575"
              strokeWidth="1.3"
            ></circle>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.818 7.534a1.1 1.1 0 100-2.2 1.1 1.1 0 000 2.2zm4.364 0a1.1 1.1 0 100-2.2 1.1 1.1 0 000 2.2z"
              fill="#757575"
            ></path>
            <path
              d="M10 10c-.44.604-1.172 1-2 1-.828 0-1.56-.396-2-1"
              stroke="#757575"
              strokeWidth="1.3"
              strokeLinecap="round"
            ></path>
          </svg>
        </EmojiPicker>
        <AttachFilesIcon>
          <svg
            width="16"
            height="16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.27 9.512l5.882-5.882a1.685 1.685 0 012.383 2.384l-5.928 5.929A3.314 3.314 0 012.92 7.257l4.149-4.15"
              stroke="#757575"
              strokeWidth="1.3"
              strokeMiterlimit="10"
              strokeLinecap="round"
            ></path>
          </svg>
        </AttachFilesIcon>
      </ButtonsWrapper>
    </Container>
  );
}
