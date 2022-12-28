'use client';

/* eslint-disable max-len */

import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote';
import * as Img from 'next/image';
import * as Alert from '~/components/MarkdownAlert';

function Image(props) {
  return <Img {...props} />;
}

const componetns = { Image, Alert };

export default function MDXRemoteWrapper(props: MDXRemoteProps) {
  return (
    <div className="prose dark:prose-invert max-w-none prose-code:border dark:prose-code:border-gray-600 prose-code:border-gray-400 prose-code:font-normal prose-img:mx-auto prose-a:decoration-dotted hover:prose-a:opacity-50">
      <MDXRemote {...props} components={componetns} />
      {/* <Alert message="Note: saat `fetch` data dengan _native_">Ini child</Alert> */}
    </div>
  );
}
