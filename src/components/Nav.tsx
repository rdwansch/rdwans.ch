'use client';

import Image from 'next/image';
import { Roboto } from '@next/font/google';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const roboto = Roboto({ weight: '400' });

export default function Nav() {
  const [isDark, setIsDark] = useState<Boolean>(true);

  useEffect(() => {
    if (document.body.parentElement?.className === 'dark') {
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    document.body.parentElement?.classList.toggle('dark');
  }, [isDark]);

  return (
    <nav className="flex items-center dark:text-white justify-between my-container pt-5">
      <div className="flex items-center">
        <Image src="/icon.png" width={75} height={50} alt="Next Me" />
        <h2 className={`${roboto.className}`}>My Site</h2>
      </div>
      <div className="">
        <ul className="flex gap-5 text-gray-800 dark:text-gray-300">
          <li className="hidden sm:block">
            <Link href="/read">Posts</Link>
          </li>
          <li className="hidden sm:block">
            <Link href="https://ridwan-rs.vercel.app" target="_blank" rel="noreferrer">
              Me
            </Link>
          </li>
          <li className="hidden sm:block">
            <Link href="https://github.com/ujklm23" target="_blank" rel="noreferrer">
              Source
            </Link>
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
