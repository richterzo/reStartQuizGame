import React, { useState } from 'react';

interface MenuProps {
  onStart: (teamCount: number, timerValue: number) => void;
}

const Menu: React.FC<MenuProps> = ({ onStart }) => {
  const [teamCount, setTeamCount] = useState<number>(1);
  const [timerValue, setTimerValue] = useState<number>(60);

  const handleStart = () => {
    if (teamCount >= 1 && teamCount <= 8) {
      onStart(teamCount, timerValue);
    } else {
      alert('Team count must be between 1 and 8');
    }
  };

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center gradient-animate">
      <h1 className="text-6xl text-white mb-10 font-bold animate-bounce">Quiz Game</h1>

      <div className='flex flex-col justify-center justify-self-center text-center'>

        <div className='row'>    
          <span>Teams: </span>
          <input
            type="number"
            className="text-center text-xl p-2 rounded w-1/4 min-w-[100px] bg-transparent"
            value={teamCount}
            onChange={(e) => setTeamCount(Math.max(1, Math.min(8, parseInt(e.target.value))))}
            min={1}
            max={8}
          />
        </div>

        <div className='row'>
          <span>Timer: </span>
          <input
            type="number"
            className="text-center text-xl p-2 rounded w-1/4 min-w-[100px] bg-transparent"
            value={timerValue}
            onChange={(e) => setTimerValue(Math.max(1, parseInt(e.target.value)))}
            min={1}
          />
        </div>
      </div>

      <button
        className="bg-green-500 text-white text-xl px-6 py-3 rounded-full hover:bg-green-600 transition duration-300 mt-5"
        onClick={handleStart}
      >
        Start Game
      </button>
    </div>
  );
};

export default Menu;
