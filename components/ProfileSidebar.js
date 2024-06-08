// components/ProfileSidebar.js
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCompass, faArrowAltCircleRight, faShare, faDashboard, faSoccerBall, faGifts, faSatellite, faFaceAngry, faIndent, faEarth, faCableCar, faPray } from '@fortawesome/free-solid-svg-icons';

const Heading = styled.h1`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
  font-family: 'Roboto', sans-serif;
`;

const Container = styled.div`
  width: 355px; /* Fixed width */
  background-color: transparent;
  padding: 20px;
  box-sizing: border-box;
`;

const TextContainer = styled.div`
  height: 100%;
  overflow-y: auto; /* Make content scrollable */
  max-height: calc(100vh - 20px - 60px); /* Adjusted height to fit remaining viewport height after padding and heading */
`;

const ListTileCard = styled.div`
  border-radius: 2px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background-color 0.3s; /* Smooth transition for background color change */
  &:hover {
    background-color: #ccc; /* Change background color on hover */
  }
  cursor: pointer; /* Change cursor to pointer on hover */
`;

const Title = styled.div`
  flex-grow: 1;
  margin-left: 20px;
  margin-bottom: 5px; /* Adjusted margin */
`;

const ArrowIcon = styled.span`
  display: inline-block;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  color: gray;   
`;

const Icon = styled(FontAwesomeIcon)`
  margin-bottom: 0px;
`;

const RightArrowIcon = ({ size }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M14 7l-1.41 1.41L16.17 12l-3.58 3.59L14 17l5-5z" />
    </svg>
);

export default function ProfileSidebar({ setSelectedContent }) {
    const handleCardClick = (title) => {
        setSelectedContent(title); // Update the selected content state
    };

    return (
        <Container>
            <Heading>Profile</Heading>
            <TextContainer>
                <ListTileCard onClick={() => handleCardClick("Account")}>
                    <Icon icon={faUser} />
                    <Title>Account</Title>
                    <ArrowIcon size={48}>
                        <RightArrowIcon size={48} />
                    </ArrowIcon>
                </ListTileCard>
                <ListTileCard onClick={() => handleCardClick("Settings")}>
                    <Icon icon={faCompass} />
                    <Title>Settings</Title>
                    <ArrowIcon size={48}>
                        <RightArrowIcon size={48} />
                    </ArrowIcon>
                </ListTileCard>
                <ListTileCard onClick={() => handleCardClick("Feedback")}>
                    <Icon icon={faArrowAltCircleRight} />
                    <Title>Feedback</Title>
                    <ArrowIcon size={48}>
                        <RightArrowIcon size={48} />
                    </ArrowIcon>
                </ListTileCard>
                <ListTileCard onClick={() => handleCardClick("Share")}>
                    <Icon icon={faShare} />
                    <Title>Share</Title>
                    <ArrowIcon size={48}>
                        <RightArrowIcon size={48} />
                    </ArrowIcon>
                </ListTileCard>
                <ListTileCard onClick={() => handleCardClick("Discord")}>
                    <Icon icon={faDashboard} />
                    <Title>Discord</Title>
                    <ArrowIcon size={48}>
                        <RightArrowIcon size={48} />
                    </ArrowIcon>
                </ListTileCard>
                <ListTileCard onClick={() => handleCardClick("Twitter")}>
                    <Icon icon={faSoccerBall} />
                    <Title>Twitter</Title>
                    <ArrowIcon size={48}>
                        <RightArrowIcon size={48} />
                    </ArrowIcon>
                </ListTileCard>
                <ListTileCard onClick={() => handleCardClick("Github")}>
                    <Icon icon={faGifts} />
                    <Title>Github</Title>
                    <ArrowIcon size={48}>
                        <RightArrowIcon size={48} />
                    </ArrowIcon>
                </ListTileCard>
                <ListTileCard onClick={() => handleCardClick("LinkedIn")}>
                    <Icon icon={faSatellite} />
                    <Title>LinkedIn</Title>
                    <ArrowIcon size={48}>
                        <RightArrowIcon size={48} />
                    </ArrowIcon>
                </ListTileCard>
                <ListTileCard onClick={() => handleCardClick("Facebook")}>
                    <Icon icon={faFaceAngry} />
                    <Title>Facebook</Title>
                    <ArrowIcon size={48}>
                        <RightArrowIcon size={48} />
                    </ArrowIcon>
                </ListTileCard>
                <ListTileCard onClick={() => handleCardClick("Instagram")}>
                    <Icon icon={faIndent} />
                    <Title>Instagram</Title>
                    <ArrowIcon size={48}>
                        <RightArrowIcon size={48} />
                    </ArrowIcon>
                </ListTileCard>
                <ListTileCard onClick={() => handleCardClick("Email")}>
                    <Icon icon={faEarth} />
                    <Title>Email</Title>
                    <ArrowIcon size={48}>
                        <RightArrowIcon size={48} />
                    </ArrowIcon>
                </ListTileCard>
                <ListTileCard onClick={() => handleCardClick("Privacy")}>
                    <Icon icon={faCableCar} />
                    <Title>Privacy</Title>
                    <ArrowIcon size={48}>
                        <RightArrowIcon size={48} />
                    </ArrowIcon>
                </ListTileCard>
                <ListTileCard onClick={() => handleCardClick("Term and Conditions")}>
                    <Icon icon={faPray} />
                    <Title>Term and Conditions</Title>
                    <ArrowIcon size={48}>
                        <RightArrowIcon size={48} />
                    </ArrowIcon>
                </ListTileCard>
            </TextContainer>
        </Container>
    );
}
