'use client';

import React from 'react';
// import { useTheme } from 'next-themes';

import 'styles/globals.css';
import 'styles/prism.css';

import Nav from '~/components/Nav';
import Footer from '~/components/Footer';
// import Provider from './Provider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // const [mounted, setMounted] = useState(false);
  // const { theme, systemTheme } = useTheme();

  // const currentTheme = theme === 'system' ? systemTheme : theme;

  // console.log(currentTheme);

  // useEffect only runs on the client, so now we can safely show the UI
  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {/* {mounted ? ( */}
        {/* <Provider> */}
        <div className="dark:bg-[#181818] h-[100vh] max-h-full transition-colors bg-gray-100">
          <Nav />
          {children}
          <Footer />
        </div>
        {/* </Provider> */}
        {/* ) : ( */}
        {/* 'Not Mounted' */}
        {/* )} */}
      </body>
    </html>
  );
}
