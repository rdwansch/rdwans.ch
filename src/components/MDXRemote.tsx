'use client';

import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote';

export default function MDXRemoteWrapper(props: MDXRemoteProps) {
  return (
    <div className="prose dark:prose-invert">
      <MDXRemote {...props} />
    </div>
  );
}
