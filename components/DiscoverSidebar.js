import { useEffect, useState } from 'react';
import styled from 'styled-components';
import DiscoverCard from './DiscoverCard';
import DiscoverCardTwo from './DiscoverCardTwo';

const Heading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const SidebarContainer = styled.div`
  width: 355px; /* Fixed width */
  background-color: transparent;
  padding: 10px;
  box-sizing: border-box;
  overflow-y: auto; /* Enable vertical scrolling */
  height: 100%; /* Fixed height */
  display: flex;
  flex-wrap: wrap;

  /* Hide the scrollbar */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, and Opera */
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
    // Generate a random number between 1 and 10 for image variations
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

export default function DiscoverSidebar() {
    const [randomTitles, setRandomTitles] = useState([]);

    useEffect(() => {
        const titles = Array.from({ length: 10 }, generateRandomTitle);
        setRandomTitles(titles);
    }, []);

    const renderRandomCard = (id) => {
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
                    onClick={() => { }}
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
                    onClick={() => { }}
                />
            );
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
