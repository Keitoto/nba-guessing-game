import { Teams } from '../types';

const eastTeams: string[] = [
  'ATL',
  'BOS',
  'BKN',
  'CHA',
  'CHI',
  'CLE',
  'DET',
  'IND',
  'MIA',
  'MIL',
  'NYK',
  'ORL',
  'PHI',
  'TOR',
  'WAS',
];
// const westTeams: WEST[] = [
//   'DAL',
//   'DEN',
//   'GSW',
//   'HOU',
//   'LAC',
//   'LAL',
//   'MEM',
//   'MIN',
//   'NOP',
//   'OKC',
//   'PHX',
//   'POR',
//   'SAC',
//   'SAS',
//   'UTA',
// ];

export const isEAST = (team: Teams) => eastTeams.includes(team);
