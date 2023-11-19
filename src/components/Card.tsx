import React, { useState } from 'react';

interface CardProps {
  question: string;
  answer: string;
  onSelect: () => void;
}

const Card: React.FC<CardProps> = ({ question, answer, onSelect }) => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
    onSelect();
  };

  return (
    <div
      className='card'
      onClick={handleClick}
    >
      {flipped ? answer : question}
    </div>
  );
};
export default Card;
