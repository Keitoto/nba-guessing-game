import useSWR, { Fetcher } from 'swr';
import { PlayerStats, SeasonStatsResponse, Teams } from '../types';

const fetcher: Fetcher<SeasonStatsResponse> = async (url: string) => {
  const res = await fetch(url);
  return res.json();
};

export const useSinglePlayerStats = (id: number, name: string, team: Teams) => {
  const {
    data: res,
    error,
    isLoading,
  } = useSWR(
    `https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${id}`,
    fetcher
  );
  if (error || res?.data.length === 0) return { data: null, error, isLoading };
  if (isLoading) return { data: null, error, isLoading };
  if (!res) return { data: null, error, isLoading };
  const playerData = res.data[0];

  console.log(playerData);

  const playerStats: PlayerStats = {
    name,
    team,
    MIN: parseFloat(playerData.min),
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
