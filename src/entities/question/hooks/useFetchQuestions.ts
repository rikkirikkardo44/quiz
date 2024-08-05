'use client';
import { useCallback } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { questionsApi } from '../api';
import { mapQuestionDtoToEntity } from '../mappers';
import { atoms } from '../state';

/**
 * Хук запроса списка вопросов
 * @returns - функции для запроса
 */
export const useFetchQuestions = (): (() => Promise<void>) => {
  const setIsLoading = useSetRecoilState(atoms.loadingState);
  const setQuestions = useSetRecoilState(atoms.questionsState);
  const { category, difficulty } = useRecoilValue(atoms.questionsPayloadState);

  return useCallback(async () => {
    try {
      setIsLoading(true);
      const { data } = await questionsApi.getQuestions({
        category,
        difficulty,
      });
      setQuestions(data.results.map(mapQuestionDtoToEntity));
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  }, [category, difficulty, setIsLoading, setQuestions]);
};
