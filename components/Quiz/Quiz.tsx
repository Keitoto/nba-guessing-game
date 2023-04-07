import React, { FC, useState } from 'react';
import { useSinglePlayerStats } from '../../hooks/useStats';
import { PlayerData } from '../../types';
import Question from './Question';
import UserInput from './UserInput';
import Answers from './Answers';

const Quiz: FC<{ player: PlayerData }> = ({ player }) => {
  // const [playerStats, setPlayerStats] = useState<PlayerStats>();
  // Get Players Stats
  const [gameData, setGameData] = useState();

  const { data, error, isLoading } = useSinglePlayerStats(
    player.id,
    player.name,
    player.team
  );

  if (error) return <div>failed to load</div>;
  if (isLoading || !data) return <div>loading...</div>;
  // setPlayerStats(data);
  // console.log(playerStats);
  return (
    <div>
      <UserInput />
      <p>You have 3 more answers left</p>
      <Question player={data} />
      <Answers />
    </div>
  );
};

export default Quiz;
