'use client';

import { ThemeProvider, useTheme } from 'next-themes';
import React from 'react';

export default function Provider({ children }: { children: React.ReactNode }) {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <div />
      <ThemeProvider attribute="class">
        <button
          type="button"
          onClick={() => (theme === 'dark' ? setTheme('light') : setTheme('dark'))}
          className={
            'bg-gray-800 dark:bg-gray-50 hover:bg-gray-600 dark:hover:bg-gray-300 transition-all duration-100 ' +
            'text-white dark:text-gray-800 px-8 py-2 text-2xl md:text-4xl rounded-lg absolute bottom-32'
          }
        >
          Toggle Mode
        </button>

        {children}
      </ThemeProvider>
    </>
  );
}
