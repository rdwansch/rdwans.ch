'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
// import { useTheme } from 'next-themes';

export default function Nav() {
  const [isDark, setIsDark] = useState<Boolean>(true);
  const currentRoute = usePathname();
  // const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (document.body.parentElement?.className === 'dark') {
      // setIsDark(true);
    }
  }, []);

  useEffect(() => {
    document.body.parentElement?.classList.toggle('dark');
  }, [isDark]);

  return (
    <nav className="flex items-center dark:text-white justify-between my-container pt-5">
      <Link href="/" className="flex items-center ">
        <svg
          className="fill-violet-500 dark:fill-violet-400"
          id="icon"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 32 32"
          xmlSpace="preserve"
          width="40px"
          height="40px"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth={0} />
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
          <g id="SVGRepo_iconCarrier">
            <style type="text/css" dangerouslySetInnerHTML={{ __html: ' .st0{fill:none;} ' }} />{' '}
            <rect x={18} y={5} width={10} height={2} />{' '}
            <polygon points="10.6,5 4,5 4,7 9.4,7 18.4,27 28,27 28,25 19.6,25 " />{' '}
            <rect id="_Transparent_Rectangle_" className="st0" width={32} height={32} />{' '}
          </g>
        </svg>
      </Link>
      <div className="">
        <ul className="flex gap-5 text-gray-800 dark:text-gray-300">
          <li
            className={`hidden sm:block ${
              currentRoute === '/' && 'text-violet-500 dark:text-violet-300 border-b border-b-violet-400'
            }`}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={`hidden sm:block ${
              currentRoute === '/read' && 'text-violet-500 dark:text-violet-300 border-b border-b-violet-400'
            }`}
          >
            <Link href="/read">Posts</Link>
          </li>
          <li className="flex items-center">
            <button type="button" onClick={() => setIsDark(prev => !prev)}>
              {!isDark ? (
                <svg className="h-5 w-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              ) : (
                <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 3v1m0 16v1m9-9h-1M4
                12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              )}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
