import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export type Post = {
  slug: string;
  readingTime: number;
  data: {
    title: string;
    publishedAt: string;
    draft: Boolean;
    excerpt: string;
    tags: string[];
  };
  content?: string;
  source: MDXRemoteSerializeResult<Record<string, unknown>, Record<string, unknown>>;
};
