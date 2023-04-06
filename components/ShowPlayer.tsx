import React, { FC } from 'react';
import { useSinglePlayerStats } from '../hooks/useStats';
import { playersData } from '../constants/data';

const ShowPlayer: FC<{ index: number }> = ({ index }) => {
  const pickedPlayer = playersData[index];
  if (!pickedPlayer) return <div>Error: {index}</div>;
  const { data, error, isLoading } = useSinglePlayerStats(
    pickedPlayer.id,
    pickedPlayer.name,
    pickedPlayer.team
  );
  // console.log(data[0]);

  if (error) return <div>failed to load</div>;
  if (isLoading || !data) return <div>loading...</div>;
  return <div>{data.name}</div>;
};

export default ShowPlayer;
