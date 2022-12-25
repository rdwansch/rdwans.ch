import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';

import readingTime from '~/helper/readingTime';
import { Post } from '~/types/Post.type';

export const getAllFrontmatter = (): Post[] => {
  const files = fs.readdirSync(path.join('src/posts'));

  const posts: Post[] = files.map(file => {
    const source = matter(fs.readFileSync(path.join('src/posts', file), 'utf-8'));

    return {
      slug: file.split('.')[0],
      readingTime: readingTime(source.content),
      data: {
        title: source.data.title,
        publishedAt: source.data.publishedAt,
        draft: source.data.draft,
        excerpt: source.data.excerpt,
        tags: source.data.tags,
      },
      content: source.content,
    };
  });

  return posts;
};

export const getByTags: () => void = () => {};
