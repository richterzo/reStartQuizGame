import React, { useState } from 'react';

interface CardData {
  question: string;
  answer: string;
}

interface Team {
  name: string;
  score: number;
  color: string;
}

interface CardGridProps {
  cards: CardData[];
  onCardSelect: (cardIndex: number) => void;
  turnedCards: { [key: number]: number | undefined };
  teams: Team[];
}

const CardGrid: React.FC<CardGridProps> = ({ cards, onCardSelect, turnedCards, teams }) => {
  const [flippedCards, setFlippedCards] = useState<boolean[]>(Array(cards.length).fill(false));

  const handleCardClick = (cardIndex: number) => {
    if (!flippedCards[cardIndex]) {
      setFlippedCards(prevFlippedCards => {
        const newFlippedCards = [...prevFlippedCards];
        newFlippedCards[cardIndex] = true;
        return newFlippedCards;
      });

      onCardSelect(cardIndex);
    }
  };

  const renderCard = (cardIndex: number) => {
    const isTurned = turnedCards[cardIndex] !== undefined;
    const isFlipped = flippedCards[cardIndex];

    return (
      <div
        key={cardIndex}
        className={`p-4 border rounded cursor-pointer transform hover:scale-105 transition-transform ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        onClick={() => !isTurned && handleCardClick(cardIndex)}
        style={{
          backgroundColor: isTurned ? teams[turnedCards[cardIndex]!].color : 'black',
          color: 'white',
          width: '100%', // Set width to 100% to fill the container
          paddingTop: '100%', // Set paddingTop to create a square aspect ratio (1:1)
        }}
      >
        <div className={`w-full h-full p-2 front ${isFlipped ? 'rotate-y-180' : ''}`}>
          {isFlipped ? cards[cardIndex].answer : cards[cardIndex].question}
        </div>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-4 gap-4">
      {cards.map((_, index) => renderCard(index))}
    </div>
  );
};

export default CardGrid;
