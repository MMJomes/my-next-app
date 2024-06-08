
import styled from 'styled-components';

const CardContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 318px;
  height: 200px;
  margin: 10px;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
`;
const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;
const CardTextOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  color: white;
  padding: 10px;
  box-sizing: border-box;
  font-weight: bold;
  text-align: center;
  opacity: 1; /* Set initial opacity to 1 */
  transition: opacity 0.3s ease;
  `;


export default function DiscoverCard({ id, imageUrl, title, url, size, onClick }) {
    const handleClick = () => {
        onClick(id, url);
    };
    return (
        <CardContainer size={size} onClick={handleClick}>
            <CardImage src={imageUrl} alt={title} />
            <CardTextOverlay>{title}</CardTextOverlay>
        </CardContainer>
    );
}

