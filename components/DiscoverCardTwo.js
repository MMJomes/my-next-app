
import styled from 'styled-components';

const CardContainer = styled.div`
  position: relative;
  display: inline-block;
  width: ${({ size }) => size === 'large' ? '100%' : 'calc(50% - 20px)'};
  max-width: ${({ size }) => size === 'large' ? '100%' : 'calc(318px - 20px)'};
  height: 200px;
  margin: 10px;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
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
