import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';

import readingTime from './readingTime';

export const getAllFrontmatter = () => {
  const files = fs.readdirSync(path.join('src/posts'));

  const posts = files.map(file => {
    const source = matter(fs.readFileSync(path.join('src/posts', file), 'utf-8'));
    return {
      ...source,
      slug: file.split('.')[0],
      readingTime: readingTime(source.content),
    };
  });

  return posts;
};

export const all = '';
