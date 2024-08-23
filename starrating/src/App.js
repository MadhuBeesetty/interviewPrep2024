import React, { useState } from 'react';
import styled from 'styled-components';
import SocialSurvery from './checkbox';

const StarContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Star = styled.span`
  font-size: 10rem;
  color: ${props => (props.filled ? 'yellow' : 'gray')};
  cursor: pointer;

  &:hover {
    color: yellow;
  }
`;

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  console.log(rating, hoveredRating, "this is log");
  const handleClick = (index) => {
    setRating(index);
  };

  const handleMouseEnter = (index) => {
    setHoveredRating(index);
  };

  const handleMouseLeave = () => {
    setHoveredRating(0);
  };

  const stars = [0, 1, 2, 3, 4]; // Array representing the 5 stars

  return (
    <StarContainer>
      {stars.map((_, index) => (
        <Star
          key={index}
          filled={index < (hoveredRating || rating)}
          onClick={() => handleClick(index + 1)}
          onMouseEnter={() => handleMouseEnter(index + 1)}
          onMouseLeave={handleMouseLeave}
        >
          *
        </Star>
      ))}
      <SocialSurvery />
    </StarContainer>
  );
};

export default Rating;
