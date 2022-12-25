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
  content: string;
};
