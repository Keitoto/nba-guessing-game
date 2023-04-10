// import Head from 'next/head';
// import { useStats } from '../../hooks/useStats';
import { useEffect, useMemo, useState } from 'react';
import Quiz from '../../components/Quiz/Quiz';
import { playersData } from '../../constants/data';

const Home = () => {
  return (
    <>
      <main>
        <Quiz />
      </main>
    </>
  );
};

export default Home;
