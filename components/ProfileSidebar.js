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

export default function ProfileSidebar({ onClickCard }) {
    const handleProfileCardClick = (title, url) => {
        onClickCard(title, url);
    };

    return (
        <Container>
            <Heading>Profile</Heading>
            <TextContainer>
                <ListTileCard onClick={() => handleProfileCardClick("Account" , "https://picsum.photos/200/200" )}>
                    <Icon icon={faUser} />
                    <Title>Account</Title>
                    <ArrowIcon size={48}>
                        <RightArrowIcon size={48} />
                    </ArrowIcon>
                </ListTileCard>
                <ListTileCard onClick={() => handleProfileCardClick("Settings" , "https://picsum.photos/200/200" )}>
                    <Icon icon={faCompass} />
                    <Title>Settings</Title>
                    <ArrowIcon size={48}>
                        <RightArrowIcon size={48} />
                    </ArrowIcon>
                </ListTileCard>
                <ListTileCard onClick={() => handleProfileCardClick("Feedback" , "https://picsum.photos/200/200" )}>
                    <Icon icon={faArrowAltCircleRight} />
                    <Title>Feedback</Title>
                    <ArrowIcon size={48}>
                        <RightArrowIcon size={48} />
                    </ArrowIcon>
                </ListTileCard>
                <ListTileCard onClick={() => handleProfileCardClick("Share" , "https://picsum.photos/200/200" )}>
                    <Icon icon={faShare} />
                    <Title>Share</Title>
                    <ArrowIcon size={48}>
                        <RightArrowIcon size={48} />
                    </ArrowIcon>
                </ListTileCard>
                <ListTileCard onClick={() => handleProfileCardClick("Discord" , "https://picsum.photos/200/200" )}>
                    <Icon icon={faDashboard} />
                    <Title>Discord</Title>
                    <ArrowIcon size={48}>
                        <RightArrowIcon size={48} />
                    </ArrowIcon>
                </ListTileCard>
                <ListTileCard onClick={() => handleProfileCardClick("Twitter" , "https://picsum.photos/200/200" )}>
                    <Icon icon={faSoccerBall} />
                    <Title>Twitter</Title>
                    <ArrowIcon size={48}>
                        <RightArrowIcon size={48} />
                    </ArrowIcon>
                </ListTileCard>
                <ListTileCard onClick={() => handleProfileCardClick("Github" , "https://picsum.photos/200/200" )}>
                    <Icon icon={faGifts} />
                    <Title>Github</Title>
                    <ArrowIcon size={48}>
                        <RightArrowIcon size={48} />
                    </ArrowIcon>
                </ListTileCard>
                <ListTileCard onClick={() => handleProfileCardClick("LinkedIn" , "https://picsum.photos/200/200" )}>
                    <Icon icon={faSatellite} />
                    <Title>LinkedIn</Title>
                    <ArrowIcon size={48}>
                        <RightArrowIcon size={48} />
                    </ArrowIcon>
                </ListTileCard>
                <ListTileCard onClick={() => handleProfileCardClick("Facebook" , "https://picsum.photos/200/200" )}>
                    <Icon icon={faFaceAngry} />
                    <Title>Facebook</Title>
                    <ArrowIcon size={48}>
                        <RightArrowIcon size={48} />
                    </ArrowIcon>
                </ListTileCard>
                <ListTileCard onClick={() => handleProfileCardClick("Instagram" , "https://picsum.photos/200/200" )}>
                    <Icon icon={faIndent} />
                    <Title>Instagram</Title>
                    <ArrowIcon size={48}>
                        <RightArrowIcon size={48} />
                    </ArrowIcon>
                </ListTileCard>
                <ListTileCard onClick={() => handleProfileCardClick("Email" , "https://picsum.photos/200/200" )}>
                    <Icon icon={faEarth} />
                    <Title>Email</Title>
                    <ArrowIcon size={48}>
                        <RightArrowIcon size={48} />
                    </ArrowIcon>
                </ListTileCard>
                <ListTileCard onClick={() => handleProfileCardClick("Privacy" , "https://picsum.photos/200/200" )}>
                    <Icon icon={faCableCar} />
                    <Title>Privacy</Title>
                    <ArrowIcon size={48}>
                        <RightArrowIcon size={48} />
                    </ArrowIcon>
                </ListTileCard>
                <ListTileCard onClick={() => handleProfileCardClick("Term and Conditions" , "https://picsum.photos/200/200" )}>
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
