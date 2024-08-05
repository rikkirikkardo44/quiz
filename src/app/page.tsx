import { MainView } from '@/views/main';

/**
 * Главная страница
 * @returns - jsx.element
 */
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <MainView />
    </main>
  );
}
