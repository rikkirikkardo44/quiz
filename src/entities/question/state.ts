import { atom, selector } from 'recoil';

import { CATEGORIES } from './constants';
import { Difficulty, type Question } from './types';

/** Стейта пэйлоада для запроса списка вопросов */
const questionsPayloadState = atom<{
  category: string;
  difficulty: Difficulty;
}>({
  key: 'QuestionsPayload',
  default: {
    category: String(CATEGORIES[0].value),
    difficulty: 'easy',
  },
});

/** Стейт списка вопросы */
const questionsState = atom<Question[]>({
  key: 'QuestionsState',
  default: [],
});

/** Стейт признака загрузки */
const loadingState = atom({
  key: 'QuestionsLoadingState',
  default: false,
});

/** Стейт текущего индекса */
const currentIndexState = atom<number>({
  key: 'CurrentIndex',
  default: 0,
});

/** Селектор текущего вопроса */
const currentQuestion = selector({
  key: 'CurrentQuestion',
  get: ({ get }) => {
    const index = get(currentIndexState);
    const questions = get(questionsState);
    return questions[index];
  },
});

/** Стейт счета правильных ответов */
const scoreState = atom({
  key: 'Score',
  default: 0,
});

/** Селектор признака последнего вопроса */
const isLastQuestion = selector({
  key: 'IsLastQuestion',
  get: ({ get }) => {
    const index = get(currentIndexState);
    const questions = get(questionsState);
    return index === questions.length - 1;
  },
});

/** Атомы */
export const atoms = {
  questionsPayloadState,
  currentIndexState,
  scoreState,
  loadingState,
  questionsState,
};

/** Селекторы */
export const selectors = {
  currentQuestion,
  isLastQuestion,
};
