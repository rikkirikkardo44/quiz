'use client';
import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useRouter } from 'next/navigation';

import { Star, Button } from '@/shared/ui';

import { atoms } from '@/entities/question';

/** Индексы звезд */
const STARS = new Array(5).fill(null);

/**
 * Результат викторины
 * @returns - jsx.element
 */
export const QuizResult = () => {
  const router = useRouter();
  const score = useRecoilValue(atoms.scoreState);
  const setScore = useSetRecoilState(atoms.scoreState);
  const setIndex = useSetRecoilState(atoms.currentIndexState);

  const handleRestart = (): void => {
    setScore(0);
    setIndex(0);
    router.replace('/');
  };

  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="flex items-center">
        {STARS.map((_, index) => {
          const starWeight = (index + 1) * 2 - 1;

          return <Star key={index} fill={score >= starWeight} />;
        })}
      </div>
      <p className="ms-1 text-m font-medium text-gray-500 dark:text-gray-400">
        Result: {score} of 10
      </p>
      <Button className="mt-4" onClick={handleRestart}>
        New game
      </Button>
    </div>
  );
};
