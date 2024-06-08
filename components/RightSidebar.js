import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 110px;
  background-color: #d0c4af;
  padding: 10px;
  box-sizing: border-box;
  height: 80vh;
`;

export default function RightSidebar() {
  return (
    <SidebarContainer>
      <div>Additional Content</div>
    </SidebarContainer>
  );
}
