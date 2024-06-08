import React from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass, faUser } from '@fortawesome/free-solid-svg-icons';

const SidebarContainer = styled.div`
  width: 110px;
  font-family: 'Roboto', sans-serif;
  background-color: transparent;
  border-right: 1px solid #ccc;
  padding: 10px;
  box-sizing: border-box;
  height: 100vh; /* Full height */
  display: flex;
  flex-direction: column;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
  padding: 8px;
  border-radius: 10px;
  ${({ active }) => active && css`
    background-color: #e0d4b1;
    border-left: 2px solid #d4af37;
  `}
`;

const Icon = styled(FontAwesomeIcon)`
  margin-bottom: 5px;
`;

export default function LeftSidebar({ activeItem, toggleItem }) {
  return (
    <SidebarContainer>
      <Item active={activeItem === 'Discover'} onClick={() => toggleItem('Discover')}>
        <Icon icon={faCompass} />
        Discover
      </Item>
      <Item active={activeItem === 'Profile'} onClick={() => toggleItem('Profile')}>
        <Icon icon={faUser} />
        Profile
      </Item>
    </SidebarContainer>
  );
}
