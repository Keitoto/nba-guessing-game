import useSWR, { Fetcher } from 'swr';
import { PlayerStats, SeasonStatsResponse, Teams } from '../types';

const fetcher: Fetcher<SeasonStatsResponse> = async (url: string) => {
  const res = await fetch(url);
  return res.json();
};

export const useSinglePlayerStats = (
  id: number,
  name: string | 'NAME',
  team: Teams | 'LAC'
) => {
  const {
    data: res,
    error,
    isLoading,
  } = useSWR(
    `https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${id}`,
    fetcher
  );
  if (error) return { data: null, error, isLoading };
  if (isLoading) return { data: null, error, isLoading };
  if (!res || res?.data.length === 0) return { data: null, error, isLoading };
  const playerData = res.data[0];

  const playerStats: PlayerStats = {
    name,
    team,
    MIN: +playerData.min,
    PTS: +playerData.pts,
    REB: +playerData.reb,
    AST: +playerData.ast,
    STL: +playerData.stl,
    BLK: +playerData.blk,
    FGP: +playerData.fg_pct,
    TPP: +playerData.fg3_pct,
    FTP: +playerData.ft_pct,
    TO: +playerData.turnover,
  };
  return { data: playerStats, error, isLoading };
};

// "games_played": 71,
// "player_id": 666423,
// "season": 2022,
// "min": "33:53",
// "fgm": 6.93,
// "fga": 15.99,
// "fg3m": 1.69,
// "fg3a": 5.32,
// "ftm": 3.96,
// "fta": 5.32,
// "oreb": 0.82,
// "dreb": 4.24,
// "reb": 5.06,
// "ast": 2.7,
// "stl": 0.42,
// "blk": 0.2,
// "turnover": 2.27,
// "pf": 2.42,
// "pts": 19.51,
// "fg_pct": 0.433,
// "fg3_pct": 0.317,
// "ft_pct": 0.743
