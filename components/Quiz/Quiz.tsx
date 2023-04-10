import React, { useMemo, useState } from 'react';
import { GameData } from '../../types';
import Question from './Question';
import UserInput from './UserInput';
import Answers from './Answers';
import { playersData } from '../../constants/data';
import { useStatsList } from '../../hooks/useStats';

const Quiz = () => {
  const MAX_LIFE = 7;
  const playerData = useMemo(() => playersData, []);

  const pickPlayer = () => {
    const selectedPlayerIndex = Math.floor(Math.random() * playerData.length);
    const pickedPlayer = playerData[selectedPlayerIndex];
    return pickedPlayer;
  };

  const [gameState, setGameState] = useState<GameData>(() => {
    return {
      targetPlayer: pickPlayer(),
      answers: [],
      score: MAX_LIFE,
    };
  });

  const initializeGame = () => {
    setGameState({
      targetPlayer: pickPlayer(),
      answers: [],
      score: MAX_LIFE,
    });
  };

  const handleSubmitAnswer = (id: number) => {
    const submittedPlayer = playerData.find((item) => item.id === id);
    if (submittedPlayer)
      setGameState((prev) => ({
        ...prev,
        answers: [...prev.answers, submittedPlayer],
      }));
  };
  // const { targetPlayer } = gameState;

  const {
    data: targetData,
    error,
    isLoading,
  } = useStatsList([gameState.targetPlayer]);

  if (error) return <div>failed to load</div>;
  if (isLoading || !targetData) return <div>loading...</div>;

  return (
    <div>
      <UserInput data={playerData} onSubmitAnswer={handleSubmitAnswer} />
      <p>You have {MAX_LIFE} more answers left</p>
      <Question player={targetData[0]} />
      {gameState.answers.length > 0 && <Answers answers={gameState.answers} />}
    </div>
  );
};

export default Quiz;
