import React, { FC } from 'react';
import { PlayerStats } from '../../types';
import Table from '../UI/Table';

const Question: FC<{ player: PlayerStats }> = ({ player }) => {

  return (
    <div>
      <Table data={[player]} />
    </div>
  );
};

export default Question;
