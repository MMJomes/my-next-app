import React, { useState } from 'react';
import styled from 'styled-components';
import LeftSidebar from '../components/LeftSidebar';
import DiscoverSidebar from '../components/DiscoverSidebar';
import ProfileSidebar from '../components/ProfileSidebar';
import MainContent from '../components/MainContent';

const Container = styled.div`
  display: flex;
  height: 100vh; /* Full height */
  background-color: #f4f1eb;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100vh; /* Full height */
`;

export default function Home() {
  const [activeItem, setActiveItem] = useState('Discover');

  const toggleItem = (item) => {
    setActiveItem((prevActiveItem) => (prevActiveItem === item ? '' : item));
  };

  return (
    <Container>
      <LeftSidebar activeItem={activeItem} toggleItem={toggleItem} />
      {activeItem === 'Discover' && <DiscoverSidebar />}
      {activeItem === 'Profile' && <ProfileSidebar />}
      <ContentWrapper>
        <MainContent />
      </ContentWrapper>
    </Container>
  );
}
