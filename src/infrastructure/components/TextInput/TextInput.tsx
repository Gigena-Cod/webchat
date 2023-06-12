import styled from "styled-components";
import { TextInputProps } from "./types";
import { useState } from "react";

const Container = styled.div``;

const ENTER = "Enter";

export default function TextInput(textInputProps: TextInputProps) {
  const { label, handleEnter } = textInputProps;

  const [value, setValue] = useState("");

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    setValue(newValue);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === ENTER) {
      handleEnter(value);
      setValue("");
    }
  };

  return (
    <Container>
      <span>{label}</span>
      <input
        value={value}
        onChange={handleChangeInput}
        onKeyDown={handleKeyDown}
      />
    </Container>
  );
}
