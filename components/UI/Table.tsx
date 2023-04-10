import React, { FC } from 'react';
import { PlayerFullData } from '../../types';
import { isEAST } from '../../constants/team';

const Table: FC<{ data: PlayerFullData[]; showName: boolean }> = ({
  data,
  showName,
}) => {
  return (
    <table>
      <thead>
        <tr>
          {showName && <th>Name</th>}
          <th>Team</th>
          <th>Conf</th>
          <th>MIN</th>
          <th>PTS</th>
          <th>REB</th>
          <th>AST</th>
          <th>STL</th>
          <th>BLK</th>
          <th>FG</th>
          <th>3PT</th>
          <th>FT</th>
          <th>TO</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.name}>
            {showName && <td>{row.name}</td>}
            <td>{row.team}</td>
            <td>{isEAST(row.team) ? 'EAST' : 'WEST'}</td>
            <td>{row.stats.MIN.toFixed(1)}</td>
            <td>{row.stats.PTS.toFixed(1)}</td>
            <td>{row.stats.REB.toFixed(1)}</td>
            <td>{row.stats.AST.toFixed(1)}</td>
            <td>{row.stats.STL.toFixed(1)}</td>
            <td>{row.stats.BLK.toFixed(1)}</td>
            <td>{(row.stats.FGP * 100).toFixed(1)}%</td>
            <td>{(row.stats.TPP * 100).toFixed(1)}%</td>
            <td>{(row.stats.FTP * 100).toFixed(1)}%</td>
            <td>{row.stats.TO}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
