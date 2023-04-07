// import Head from 'next/head';
// import { useStats } from '../../hooks/useStats';
import { useEffect, useMemo, useState } from 'react';
import ShowPlayer from '../../components/Quiz/Quiz';
import { playersData } from '../../constants/data';

const Home = () => {

  const selectedPlayerIndex = useMemo(
    () => Math.floor(Math.random() * 375),
    []
  );

  const pickedPlayer = useMemo(
    () => playersData[selectedPlayerIndex],
    [selectedPlayerIndex]
  );

  return (
    <>
      <main>{pickedPlayer && <ShowPlayer player={pickedPlayer} />}</main>
    </>
  );
};

export default Home;
