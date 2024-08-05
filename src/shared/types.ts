/** Опция для селектора */
export type Option<T = string> = {
  /** Наименование */
  name: string;
  /** Значение */
  value: T;
};
