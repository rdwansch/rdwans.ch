'use client';

import { redirect } from 'next/navigation';

export default function page() {
  redirect('/read');

  return <div />;
}
