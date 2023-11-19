import React from 'react';

interface Team {
  name: string;
  score: number;
  color: string;
}

interface LeaderboardProps {
  teams: Team[];
  onTeamSelect: (teamIndex: number) => void | null;
  selectedTeam: number | null;
}

const Leaderboard: React.FC<LeaderboardProps> = ({ teams, onTeamSelect, selectedTeam }) => {
  return (
    <div className="space-y-4">
      {teams.map((team, index) => (
        <div
          key={index}
          className={`p-2 rounded cursor-pointer transition-transform ${
            selectedTeam === index ? 'transform scale-110' : ''
          }`}
          style={{
            backgroundColor: team.color,
            color: 'white',
          }}
          onClick={() => onTeamSelect(index)}
        >
          {team.name} : {team.score}
        </div>
      ))}
    </div>
  );
};

export default Leaderboard;
