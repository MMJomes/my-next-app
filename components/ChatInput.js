import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const InputContainer = styled.div`
  background-color: #fff8ef;
  max-width: 800px; /* Limit the width of the content */
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: flex-end; /* Align items to the bottom */
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 40px 10px 10px; /* Adjust padding to make space for the icon */
  font-size: 16px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 50px;
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background-color: lightgray;
  border-radius: 30%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function ChatInput() {
  return (
    <InputContainer>
      <InputWrapper>
        <Input placeholder="Talk with My AI" />
        <IconWrapper>
          <FontAwesomeIcon icon={faArrowUp} style={{ color: 'white' }} />
        </IconWrapper>
      </InputWrapper>
    </InputContainer>
  );
}
