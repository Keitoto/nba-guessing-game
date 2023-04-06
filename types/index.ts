export type WEST =
  | 'DAL'
  | 'DEN'
  | 'GSW'
  | 'HOU'
  | 'LAC'
  | 'LAL'
  | 'MEM'
  | 'MIN'
  | 'NOP'
  | 'OKC'
  | 'PHX'
  | 'POR'
  | 'SAC'
  | 'SAS'
  | 'UTA';
export type EAST =
  | 'ATL'
  | 'BOS'
  | 'BKN'
  | 'CHA'
  | 'CHI'
  | 'CLE'
  | 'DET'
  | 'IND'
  | 'MIA'
  | 'MIL'
  | 'NYK'
  | 'ORL'
  | 'PHI'
  | 'TOR'
  | 'WAS';

export type Teams = WEST | EAST;

export interface PlayerStats {
  name: string;
  team: Teams;
  MIN: number;
  PTS: number;
  REB: number;
  AST: number;
  STL: number;
  BLK: number;
  FGP: number;
  TPP: number;
  FTP: number;
  TO: number;
}

export interface SeasonStatsResponse {
  data: {
    min: string;
    pts: string;
    reb: string;
    ast: string;
    stl: string;
    blk: string;
    fg_pct: string;
    fg3_pct: string;
    ft_pct: string;
    turnover: string;
  }[];
}
