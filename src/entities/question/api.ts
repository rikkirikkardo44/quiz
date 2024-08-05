import type { AxiosPromise, AxiosResponse } from 'axios';

import { api } from '@/shared/api';

import type { GetQuestionsPayload, QuestionsResponse } from './types';

/**
 * Запросить список вопросов
 * @param difficulty - сложность
 * @param category - категория
 * @returns - промис
 */
const getQuestions = ({
  category,
  difficulty,
}: GetQuestionsPayload): AxiosPromise<QuestionsResponse> =>
  api.get<QuestionsResponse, AxiosResponse<QuestionsResponse>>(
    `?amount=10${
      category && `&category=${category}`
    }${difficulty && `&difficulty=${difficulty}`}&type=multiple`,
  );

/** Апи сущности */
export const questionsApi = {
  getQuestions,
};
