import React, { ChangeEvent } from 'react';
import { Option } from '@/shared/types';

/** Эвент селекта */
export type SelectEvent<T = string> = {
  /** Наименование поля */
  name: string;
  /** Значение */
  value: T;
};

/** Парамптры компонента */
type Props<T> = {
  /** Наименование поля */
  name: string;
  /** Лейбл */
  label: string;
  /** Опции */
  options: Option<T>[];
  /** Обработчик селекта */
  onSelect: (event: SelectEvent<T>) => void;
};

/**
 * Компонент селекта
 * @returns - jsx.element
 */
export const Select = <T = string,>({
  name,
  label,
  options,
  onSelect,
}: Props<T>) => {
  const handleSelect = (event: ChangeEvent<HTMLSelectElement>): void => {
    onSelect({ name, value: event.target.value as T });
  };

  return (
    <>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <select
          id="category"
          name="category"
          onChange={handleSelect}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
        >
          {options.map(({ value, name }) => (
            <option key={value as string} value={value as string}>
              {name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
