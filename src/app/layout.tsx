import React from 'react';
// import { useTheme } from 'next-themes';

import 'styles/globals.css';
import 'styles/prism.css';

import Nav from '~/components/Nav';
import Footer from '~/components/Footer';
import { Metadata } from 'next';
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
    <html lang="en" suppressHydrationWarning className="dark">
      <body>
        {/* {mounted ? ( */}
        {/* <Provider> */}
        <div className="dark:bg-[#1f2028] min-h-screen transition-colors bg-white">
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

export const metadata: Metadata = {
  title: {
    default: 'Rdwansch',
    template: '%s | Rdwansch',
  },
  description: 'Rdwans.ch - baca artikel',
  authors: { name: 'Ridhwan R. Siddiq', url: 'https://rdwans.ch' },
  keywords: ['Next.js', 'React', 'JavaScript'],
};
