import React, { FC, useMemo, useState } from 'react';
import { useSinglePlayerStats } from '../../hooks/useStats';
import { PlayerData } from '../../types';
import Question from './Question';
import UserInput from './UserInput';
import Answers from './Answers';
import { playersData } from '../../constants/data';

const Quiz = () => {
  const [gameData, setGameData] = useState();
  const playerData = useMemo(() => playersData, []);

  // Get question Player
  const selectedPlayerIndex = useMemo(
    () => Math.floor(Math.random() * 375),
    []
  );

  const pickedPlayer = useMemo(
    () => playerData[selectedPlayerIndex],
    [selectedPlayerIndex]
  );

  const { data, error, isLoading } = useSinglePlayerStats(
    pickedPlayer.id,
    pickedPlayer.name,
    pickedPlayer.team
  );

  if (error) return <div>failed to load</div>;
  if (isLoading || !data) return <div>loading...</div>;

  return (
    <div>
      <UserInput data={playerData} />
      <p>You have 3 more answers left</p>
      <Question player={data} />
      <Answers />
    </div>
  );
};

export default Quiz;
