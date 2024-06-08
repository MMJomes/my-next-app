import React from 'react';
import styled from 'styled-components';
import ChatInput from './ChatInput';

const MainContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start; /* Align items to the left */
  padding: 20px;
  padding-left: 100px;
  background-color: #fff8ef;
  
  height: 100vh; /* Full height */
  overflow-y: auto; /* Allows scrolling if content overflows */
`;

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start; /* Align items to the left */
  width: 100%;
  max-width: 800px; /* Limit the width of the content */
`;

const Text = styled.p`
  font-size: 22px;
  line-height: 1.5;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 20px; /* Add some space between paragraphs */
`;

const ChatInputWrapper = styled.div`
  width: 100%;
`;

export default function MainContent() {
  return (
    <MainContentContainer>
      <ContentWrapper>
        <Text>Hey there, great to meet you. I am Pi, your personal AI.</Text>
        <Text>My goal is to be useful, friendly and fun. Ask me for advice, for answers, or let is talk about whatever is on your mind.</Text>
        <Text>How is your day going?</Text>
      </ContentWrapper>
      <ChatInputWrapper>
        <ChatInput />
      </ChatInputWrapper>
    </MainContentContainer>
  );
}
