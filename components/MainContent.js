// components/MainContent.js
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
  display: ${(props) => (props.showChatInput ? 'block' : 'none')}; /* Show or hide the ChatInput */
`;

export default function MainContent({ selectedContent }) {
  // Determine whether to show the ChatInput based on selectedContent
  const showChatInput = !selectedContent;

  return (
    <MainContentContainer>
      <ContentWrapper>
        <Text>{selectedContent ? `You selected: ${selectedContent}` : "Hey there, great to meet you. I am Pi, your personal AI."}</Text>
        <Text>{selectedContent ? '' : "My goal is to be useful, friendly and fun. Ask me for advice, for answers, or let us talk about whatever is on your mind."}</Text>
        <Text>{selectedContent ? '' : "How is your day going?"}</Text>
      </ContentWrapper>
      <ChatInputWrapper showChatInput={showChatInput}>
        <ChatInput />
      </ChatInputWrapper>
    </MainContentContainer>
  );
}
