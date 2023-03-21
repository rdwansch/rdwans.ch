'use client';

import React from 'react';
import 'styles/globals.css';
import 'styles/prism.css';

import Nav from '~/components/Nav';
import Footer from '~/components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="dark:bg-[#181818] h-[100vh] max-h-full transition-colors bg-gray-100">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
