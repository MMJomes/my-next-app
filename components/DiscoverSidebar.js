// components/DiscoverSidebar.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DiscoverCard from './DiscoverCard';
import DiscoverCardTwo from './DiscoverCardTwo';

const Heading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const SidebarContainer = styled.div`
  width: 355px;
  background-color: transparent;
  padding: 10px;
  box-sizing: border-box;
  overflow-y: auto;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  scrollbar-width: none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const generateRandomTitle = () => {
    const titles = ['Lorem ipsum dolor', 'Dolor sit amet', 'Consectetur adipiscing', 'Elit sed do', 'Eiusmod tempor', 'Incididunt ut labore', 'Et dolore', 'Duis aute', 'Irure dolor', 'In reprehenderit',
        'Ullamco laboris', 'Nisi aliquip', 'Ex ea commodo', 'Consequat', 'Duis aute', 'Irure dolor', 'In reprehenderit', 'Ullamco laboris', 'Nisi aliquip', 'Ex ea commodo',
        'Consequat', 'Duis aute', 'Irure dolor', 'In reprehenderit', 'Ullamco laboris', 'Nisi aliquip', 'Ex ea commodo', 'Consequat', 'Duis aute', 'Irure dolor', 'In reprehenderit',
    ];

    return titles[Math.floor(Math.random() * titles.length)];
};

const generateRandomImageUrl = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    return `https://picsum.photos/200/300?random=${randomNumber}`;
};

const getGreeting = () => {
    const currentTime = new Date().getHours();
    if (currentTime < 12) {
        return 'Good Morning';
    } else if (currentTime < 18) {
        return 'Good Afternoon';
    } else {
        return 'Good Evening';
    }
};

export default function DiscoverSidebar({ onClickCard }) {
    const [randomTitles, setRandomTitles] = useState([]);

    useEffect(() => {
        const titles = Array.from({ length: 10 }, generateRandomTitle);
        setRandomTitles(titles);
    }, []);

    const renderRandomCard = (id) => {
        if (id === 1 || id === 2) {
            // Always render DiscoverCard for the first two cards
            return (
                <DiscoverCard
                    key={id}
                    id={id.toString()}
                    imageUrl={generateRandomImageUrl()}
                    title={randomTitles[id - 1]}
                    url="https://picsum.photos/200/300"
                    size="small"
                    onClick={() => onClickCard(randomTitles[id - 1], generateRandomImageUrl())}
                />
            );
        } else {
            // Render random cards for the rest
            const random = Math.random();
            if (random < 0.5) {
                return (
                    <DiscoverCard
                        key={id}
                        id={id.toString()}
                        imageUrl={generateRandomImageUrl()}
                        title={randomTitles[id - 1]}
                        url="https://picsum.photos/200/300"
                        size="small"
                        onClick={() => onClickCard(randomTitles[id - 1], generateRandomImageUrl())}
                    />
                );
            } else {
                return (
                    <DiscoverCardTwo
                        key={id}
                        id={id.toString()}
                        imageUrl={generateRandomImageUrl()}
                        title={randomTitles[id - 1]}
                        url="https://picsum.photos/200/300"
                        size="small"
                        onClick={() => onClickCard(randomTitles[id - 1], generateRandomImageUrl())}
                    />
                );
            }
        }
    };

    return (
        <SidebarContainer>
            <Heading>{getGreeting()}</Heading>
            {[...Array(20)].map((_, id) => (
                renderRandomCard(id + 1)
            ))}
        </SidebarContainer>
    );
}