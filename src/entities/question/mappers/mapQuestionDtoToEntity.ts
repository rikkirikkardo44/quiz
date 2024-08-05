import he from 'he';

import { shuffleArray } from '@/shared/libs/array';

import type { Question, QuestionDto } from '../types';

/**
 * Маппер ДТО вопроса в сущность
 * @param dto - дто
 * @returns - сущность
 */
export const mapQuestionDtoToEntity = (dto: QuestionDto): Question => {
  return {
    answers: shuffleArray(
      [...dto.incorrect_answers, dto.correct_answer].map((item) =>
        he.decode(item),
      ),
    ),
    correctAnswer: he.decode(dto.correct_answer),
    title: he.decode(dto.question),
  };
};
