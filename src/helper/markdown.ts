import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';

import readingTime from '~/helper/readingTime';
import { Post } from '~/types/Post.type';
import remarkGfm from 'remark-gfm';
import rehypePrism from 'rehype-prism-plus';

// Get all post with matter format
export const getAllFrontmatter = (): Post[] => {
  // Read entire files in posts directory
  const files = fs.readdirSync(path.join('src/posts')).filter(file => file.split('.')[1] === 'mdx');

  // Iterates of file
  const posts: Post[] = files.map(file => {
    // Extract to matter format
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

  // Return formated posts
  return posts;
};

// Get single post by slug
export const getSingleMatter = async ({ articleSlug }: { articleSlug: string }): Promise<Post> => {
  // Get file by slug and extract to matter format
  const { data, content } = matter(fs.readFileSync(path.join('src/posts', `${articleSlug}.mdx`), 'utf-8'));

  // Serialize matter content
  const mdx = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypePrism],
      // format: 'mdx',
      development: false,
    },
  });

  // Return formated post
  return {
    data,
    readingTime: readingTime(content),
    source: mdx,
    slug: articleSlug,
  };
};
