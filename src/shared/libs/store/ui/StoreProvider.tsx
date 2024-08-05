'use client';
import React, { PropsWithChildren } from 'react';
import { RecoilRoot } from 'recoil';

/**
 * Провайдер стора
 * @returns - jsx.element
 */
export const StoreProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};
