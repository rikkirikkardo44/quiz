'use client';
import React, { FormEventHandler, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useRouter } from 'next/navigation';

import { Button } from '@/shared/ui';

import { selectors, atoms } from '@/entities/question';

/**
 * Текущий вопрос
 * @returns - jsx.element
 */
export const CurrentQuestion: React.FC = () => {
  const router = useRouter();
  const isLoading = useRecoilValue(atoms.loadingState);
  const currentQuestion = useRecoilValue(selectors.currentQuestion);
  const isLastQuestion = useRecoilValue(selectors.isLastQuestion);
  const setIndex = useSetRecoilState(atoms.currentIndexState);
  const setScore = useSetRecoilState(atoms.scoreState);
  const [answer, setAnswer] = useState('');

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const currentAnswer = formData.get('answer') as string;

    if (currentAnswer === currentQuestion.correctAnswer) {
      setScore((prev) => prev + 1);
    }

    setAnswer(currentAnswer);
  };

  const handleNext = () => {
    if (isLastQuestion) {
      router.push('/result');
      return;
    }

    setIndex((prev) => prev + 1);
  };

  if (isLoading) {
    return (
      <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
        Loading questions
      </h3>
    );
  }

  if (!currentQuestion) {
    router.replace('/');
    return null;
  }

  return (
    <>
      <h3 className="mb-4 font-semibold text-gray-900 dark:text-white max-w-xl text-center">
        {currentQuestion.title}
      </h3>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center"
      >
        <ul className="text-sm font-medium text-gray-900 dark:text-white">
          {currentQuestion.answers.map((item) => {
            return (
              <li key={item} className="w-full">
                <div className="flex items-center ps-3">
                  <input
                    id={item}
                    disabled={!!answer}
                    type="radio"
                    value={item}
                    name="answer"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500 cursor-pointer"
                  />
                  <label
                    htmlFor={item}
                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer"
                  >
                    {item}
                  </label>
                </div>
              </li>
            );
          })}
        </ul>
        {!answer && (
          <Button type="submit" className="mt-4">
            Answer
          </Button>
        )}

        {!!answer && answer === currentQuestion.correctAnswer && (
          <p className="text-green-500">Correct &#127881;</p>
        )}
        {!!answer && answer !== currentQuestion.correctAnswer && (
          <p className="text-red-600">Incorrect &#128547;</p>
        )}

        {!!answer && (
          <Button className="mt-4" onClick={handleNext}>
            Next
          </Button>
        )}
      </form>
    </>
  );
};
