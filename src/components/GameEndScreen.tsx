import React from 'react';
import Confetti from 'react-confetti';
import Leaderboard from './Leaderboard';

interface Team {
  name: string;
  score: number;
  color: string;
}

interface GameEndScreenProps {
  teams: Team[];
}

const GameEndScreen: React.FC<GameEndScreenProps> = ({ teams }) => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center gradient-animate">
      <h1 className="text-6xl text-white mb-10 font-bold animate-bounce">Game Over</h1>
      <Confetti width={window.innerWidth} height={window.innerHeight} />
      <Leaderboard teams={teams} onTeamSelect={() => {}} selectedTeam={null} />
    </div>
  );
};

export default GameEndScreen;
