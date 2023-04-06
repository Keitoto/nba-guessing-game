// import Head from 'next/head';
// import { useStats } from '../../hooks/useStats';
import { useEffect, useState } from 'react';
import ShowPlayer from '../../components/ShowPlayer';

const Home = () => {
  const [selectedPlayerId, setSelectedPlayerId] = useState<number>();

  useEffect(() => {
    const randomId = Math.floor(Math.random() * 373);
    setSelectedPlayerId(randomId);
  }, []);

  return (
    <>
      <main>{selectedPlayerId && <ShowPlayer id={selectedPlayerId} />}</main>
    </>
  );
};

export default Home;
