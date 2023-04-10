import React, { FC } from 'react';
import { PlayerData, PlayerFullData } from '../../types';
import { useStatsList } from '../../hooks/useStats';
import Table from '../UI/Table';

const Answers: FC<{
  answers: PlayerData[];
  target: PlayerFullData;
}> = ({ answers }) => {
  const { data: answeredPlayers, error, isLoading } = useStatsList(answers);
  if (isLoading || !answeredPlayers) return <div>Loading</div>;
  return <Table data={answeredPlayers} showName={true} />;
};

export default Answers;
