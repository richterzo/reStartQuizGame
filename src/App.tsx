import React, { useState } from 'react';
import Menu from './components//Menu';
import Game from './components/Game'; // Assuming you have a Game component

const App: React.FC = () => {
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [teamCount, setTeamCount] = useState<number>(1);
  const [timerValue, setTimerValue] = useState<number>(60);

  const startGame = (count: number) => {
    setTeamCount(count);
    setTimerValue(timerValue);
    setGameStarted(true);
  };

  return (
    <div className="App">
      {!gameStarted ? (
        <Menu onStart={startGame} />
      ) : (
        <Game teamCount={teamCount} timerValue={timerValue}/>
      )}
    </div>
  );
};

export default App;
