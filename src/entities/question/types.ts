/** Сложность */
export type Difficulty = 'easy' | 'medium' | 'hard';

/** Дто вопроса */
export type QuestionDto = {
  /** Неправильные ответы */
  incorrect_answers: string[];
  /** Правильный ответ */
  correct_answer: string;
  /** Вопрос */
  question: string;
};

/** Ответ запроса списка вопросов */
export type QuestionsResponse = {
  results: QuestionDto[];
};

/** Вопрос */
export type Question = {
  /** Тайтл */
  title: string;
  /** Ответы */
  answers: string[];
  /** Правильный ответ */
  correctAnswer: string;
};

/** Пэйлоад для получения списка вопросов */
export type GetQuestionsPayload = {
  /** Сложность */
  difficulty: Difficulty;
  /** Категория */
  category: string;
};
