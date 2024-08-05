import { CurrentQuestion } from '@/views/current-question';

/**
 * Страница текущего вопроса
 * @returns - jsx.element
 */
export default function CurrentQuestionPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <CurrentQuestion />
    </main>
  );
}
