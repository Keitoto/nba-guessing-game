import React, { FC } from 'react';
import { PlayerStats } from '../../types';
import { isEAST } from '../../constants/team';

const Table: FC<{ data: PlayerStats[] }> = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
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
            <td>{row.name}</td>
            <td>{row.team}</td>
            <td>{isEAST(row.team) ? 'EAST' : 'WEST'}</td>
            <td>{row.MIN.toFixed(1)}</td>
            <td>{row.PTS.toFixed(1)}</td>
            <td>{row.REB.toFixed(1)}</td>
            <td>{row.AST.toFixed(1)}</td>
            <td>{row.STL.toFixed(1)}</td>
            <td>{row.BLK.toFixed(1)}</td>
            <td>{(row.FGP * 100).toFixed(1)}%</td>
            <td>{(row.TPP * 100).toFixed(1)}%</td>
            <td>{(row.FTP * 100).toFixed(1)}%</td>
            <td>{row.TO}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
