import React from 'react';
import { QuizStartForm } from '@/features/start-quiz';

/**
 * Основное окно
 * @returns - jsx.element
 */
export const MainView = () => {
  return (
    <>
      <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight mb-16">
        Quiz App
      </h2>
      <QuizStartForm />
    </>
  );
};
