// components/MainContent.js
import React from 'react';
import styled from 'styled-components';
import ChatInput from './ChatInput';

const MainContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  padding-left: 100px;
  background-color: #fff8ef;
  height: 100vh;
  overflow-y: auto;
`;

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  max-width: 800px;
`;

const Text = styled.p`
  font-size: 22px;
  line-height: 1.5;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 100%;
  height: 400px;
  max-width: 800px;
  margin-bottom: 20px;
`;

const ChatInputWrapper = styled.div`
  width: 100%;
  display: ${(props) => (props.showChatInput ? 'block' : 'none')};
`;

export default function MainContent({ selectedImage, selectedTitle }) {
  const showChatInput = !(selectedImage && selectedTitle);

  return (
    <MainContentContainer>
      <ContentWrapper>
        {selectedImage && selectedTitle && (
          <>
            <Image src={selectedImage} alt={selectedTitle} />
            <Text>{`Selected Title: ${selectedTitle}`}</Text>
          </>
        )}
        {!selectedImage && !selectedTitle && (
          <>
            <Text>Hey there, great to meet you. I am Pi, your personal AI.</Text>
            <Text>My goal is to be useful, friendly and fun. Ask me for advice, for answers, or let us talk about whatever is on your mind.</Text>
            <Text>How is your day going?</Text>
          </>
        )}
      </ContentWrapper>
      <ChatInputWrapper showChatInput={showChatInput}>
        <ChatInput />
      </ChatInputWrapper>
    </MainContentContainer>
  );
}
