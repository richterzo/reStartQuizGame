import React, { useEffect, useState } from 'react';

interface TimerProps {
  initialTime: number; // in seconds
  onTimeEnd: () => void;
}

const Timer: React.FC<TimerProps> = ({ initialTime, onTimeEnd }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft === 0) {
      onTimeEnd();
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft, onTimeEnd]);

  return <div>Time Left: {timeLeft} seconds</div>;
};

export default Timer;
