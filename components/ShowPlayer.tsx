import React, { FC } from 'react';
import { useSinglePlayerStats } from '../hooks/useStats';

const ShowPlayer: FC<{ id: number }> = ({ id }) => {
  const { data, error, isLoading } = useSinglePlayerStats(
    id,
    'Kawhi Leonard',
    'LAC'
  );
  // console.log(data[0]);

  if (error) return <div>failed to load</div>;
  if (isLoading || !data) return <div>loading...</div>;
  return <div>{data.AST}</div>;
};

export default ShowPlayer;
