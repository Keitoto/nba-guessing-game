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

  const initializeGame = () => {
    setGameState({
      targetPlayer: pickPlayer(),
      answers: [],
      score: MAX_LIFE,
      isPlaying: true,
    });
  };

  const [gameState, setGameState] = useState<GameData>(() => {
    return {
      targetPlayer: pickPlayer(),
      answers: [],
      score: MAX_LIFE,
      isPlaying: true,
    };
  });

  const handleSubmitAnswer = (id: number) => {
    if (id === gameState.targetPlayer.id) {
      alert('correct');
    } else {
      const submittedPlayer = playerData.find((item) => item.id === id);

      if (!submittedPlayer) return;

      setGameState((prev) => ({
        ...prev,
        answers: [...prev.answers, submittedPlayer],
        score: prev.score--,
        isPlaying: prev.score === 1,
      }));
    }
  };

  const {
    data: targetData,
    error,
    isLoading,
  } = useStatsList([gameState.targetPlayer]);

  if (error) return <div>failed to load</div>;
  if (isLoading || !targetData) return <div>loading...</div>;

  const targetFullData = targetData[0];

  return (
    <div>
      <UserInput data={playerData} onSubmitAnswer={handleSubmitAnswer} />
      <p>You have {gameState.score} more answers left</p>
      <Question player={targetFullData} />
      {gameState.answers.length > 0 && (
        <Answers answers={gameState.answers} target={targetFullData} />
      )}
    </div>
  );
};

export default Quiz;
