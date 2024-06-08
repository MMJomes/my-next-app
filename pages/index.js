// index.js (or Home.js)
import React, { useState } from 'react';
import styled from 'styled-components';
import LeftSidebar from '../components/LeftSidebar';
import DiscoverSidebar from '../components/DiscoverSidebar';
import ProfileSidebar from '../components/ProfileSidebar';
import MainContent from '../components/MainContent';

const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #f4f1eb;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100vh;
`;

export default function Home() {
  const [activeItem, setActiveItem] = useState('Discover');
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedTitle, setSelectedTitle] = useState('');

  const toggleItem = (item) => {
    setActiveItem((prevActiveItem) => (prevActiveItem === item ? '' : item));
  };

  const handleDiscoverCardClick = (title, imageUrl) => {
    setSelectedTitle(title);
    setSelectedImage(imageUrl);
  };

  const handleProfileCardClick = (title, imageUrl) => {
    setSelectedTitle(title);
    setSelectedImage(imageUrl);
  };
  


  return (
    <Container>
      <LeftSidebar activeItem={activeItem} toggleItem={toggleItem} />
      {activeItem === 'Discover' && (
        <DiscoverSidebar onClickCard={handleDiscoverCardClick} />
      )}
      {activeItem === 'Profile' && <ProfileSidebar onClickCard={handleProfileCardClick} />}
      <ContentWrapper>
        <MainContent selectedImage={selectedImage} selectedTitle={selectedTitle} />
      </ContentWrapper>
    </Container>
  );
}
