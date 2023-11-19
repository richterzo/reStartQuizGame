/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import Leaderboard from './Leaderboard';
import CardGrid from './CardGrid';
import Timer from './Timer';
import GameEndScreen from './GameEndScreen';

interface Team {
  name: string;
  score: number;
  color: string;
}

interface CardData {
  question: string;
  answer: string;
}

interface GameProps {
  teamCount: number;
  timerValue: number;
}

const Game: React.FC<GameProps> = ({ teamCount, timerValue }) => {
  const [teams, setTeams] = useState<Team[]>([...Array(teamCount)].map((_, i) => ({
    name: `Team ${i + 1}`,
    score: 0,
    color: `#${Math.floor(Math.random()*16777215).toString(16)}`, // Random color
  })));

  const [turnedCardCount, setTurnedCardCount] = useState<number>(0);
  const [selectedTeam, setSelectedTeam] = useState<number | null>(null);
  const [turnedCards, setTurnedCards] = useState<{ [key: number]: number | undefined }>(
    [...Array(16)].reduce((acc, _, index) => ({ ...acc, [index]: undefined }), {})
  );

  const cards = [
      { question: 'Question 1', answer: 'Answer 1' },
      { question: 'Question 2', answer: 'Answer 2' },
      { question: 'Question 3', answer: 'Answer 3' },
      { question: 'Question 4', answer: 'Answer 3' },
      { question: 'Question 5', answer: 'Answer 3' },
      { question: 'Question 6', answer: 'Answer 3' },
      { question: 'Question 7', answer: 'Answer 3' },
      { question: 'Question 8', answer: 'Answer 3' },
      { question: 'Question 9', answer: 'Answer 3' },
      { question: 'Question 10', answer: 'Answer 3' },
      { question: 'Question 11', answer: 'Answer 3' },
      { question: 'Question 12', answer: 'Answer 3' },
      { question: 'Question 13', answer: 'Answer 3' },
      { question: 'Question 14', answer: 'Answer 3' },
      { question: 'Question 15', answer: 'Answer 3' },
      { question: 'Question 16', answer: 'Answer 16' },
    
  ];

  const handleTeamSelect = (teamId: number) => {
    setSelectedTeam(teamId);
  };

  const handleCardSelect = (cardIndex: number) => {
    if (selectedTeam !== null && turnedCards[cardIndex] === undefined) {
      // Update the score of the selected team
      const newTeams = [...teams];
      newTeams[selectedTeam].score += 1;
      setTeams(newTeams);

      // Mark the card as turned by the selected team
      setTurnedCards(prev => ({ ...prev, [cardIndex]: selectedTeam }));
      // Increment the turned card count
      setTurnedCardCount(prevCount => prevCount + 1);
    }
  };

  const handleTimeEnd = () => {
    alert('Time is up! Game over.');
  };


  // Check if all cards are turned
  const allCardsTurned = turnedCardCount === cards.length;

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-1/4 p-4">
        <Leaderboard teams={teams} onTeamSelect={handleTeamSelect} selectedTeam={selectedTeam} />
      </div>
      <div className="w-full md:w-1/2 p-4 flex flex-wrap justify-center items-center">
        {allCardsTurned ? (
          <GameEndScreen teams={teams} />
        ) : (
          <CardGrid cards={cards} onCardSelect={handleCardSelect} turnedCards={turnedCards} teams={teams} />
        )}
      </div>
      <div className="w-full md:w-1/4 p-4">
        <Timer initialTime={timerValue} onTimeEnd={handleTimeEnd} />
      </div>
    </div>
  );
};

export default Game;
