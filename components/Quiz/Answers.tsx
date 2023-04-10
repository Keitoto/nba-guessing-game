import React, { FC } from 'react';
import { PlayerData } from '../../types';
import { useStatsList } from '../../hooks/useStats';
import Table from '../UI/Table';

const Answers: FC<{
  answers: PlayerData[];
}> = ({ answers }) => {
  const { data: answeredPlayers, error, isLoading } = useStatsList(answers);
  if (isLoading || !answeredPlayers) return <div>Loading</div>;
  return <Table data={answeredPlayers} showName={true} />;
};

export default Answers;
