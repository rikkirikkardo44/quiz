'use client';
import React, { type SyntheticEvent } from 'react';
import { useSetRecoilState } from 'recoil';
import { useRouter } from 'next/navigation';

import { Button, Select, type SelectEvent } from '@/shared/ui';

import {
  CATEGORIES,
  DIFFICULTY,
  atoms,
  useFetchQuestions,
} from '@/entities/question';

/**
 * Форма выбора настроек викторины
 * @returns - jsx.element
 */
export const QuizStartForm = () => {
  const router = useRouter();
  const setFormData = useSetRecoilState(atoms.questionsPayloadState);
  const fetchQuestions = useFetchQuestions();

  const handleSelect = (event: SelectEvent): void => {
    setFormData((prev) => ({
      ...prev,
      [event.name]: event.value,
    }));
  };

  const handleSubmit = (event: SyntheticEvent): void => {
    event.preventDefault();
    fetchQuestions?.();
    router.push('/current-question');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <p className="mt-1 text-sm leading-6 text-gray-600 mb-8">
            Choose category and difficulty and <b>Start</b>.
          </p>

          <div className="sm:col-span-3 mb-4">
            <Select
              name="category"
              label="Category"
              options={CATEGORIES}
              onSelect={handleSelect}
            />
          </div>

          <div className="sm:col-span-3">
            <Select
              name="difficulty"
              label="Difficulty"
              options={DIFFICULTY}
              onSelect={handleSelect}
            />
          </div>

          <div className="mt-6 flex items-center justify-center gap-x-6">
            <Button type="submit">Start</Button>
          </div>
        </div>
      </div>
    </form>
  );
};
