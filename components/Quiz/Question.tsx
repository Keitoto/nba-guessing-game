import React, { FC } from 'react';
import { PlayerFullData } from '../../types';
import Table from '../UI/Table';

const Question: FC<{ player: PlayerFullData }> = ({ player }) => {
  return (
    <div>
      <Table data={[player]} showName={false} />
    </div>
  );
};

export default Question;
