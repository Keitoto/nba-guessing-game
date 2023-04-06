// import Head from 'next/head';
// import { useStats } from '../../hooks/useStats';
import { useEffect, useState } from 'react';
import ShowPlayer from '../../components/ShowPlayer';

const Home = () => {
  const [selectedPlayerIndex, setSelectedPlayerIndex] = useState<number>();

  useEffect(() => {
    const randomNum = Math.floor(Math.random() * 373);
    setSelectedPlayerIndex(randomNum);
  }, []);

  return (
    <>
      <main>
        {selectedPlayerIndex && <ShowPlayer index={selectedPlayerIndex} />}
      </main>
    </>
  );
};

export default Home;
