import { getAllFrontmatter } from '~/helper/markdown';
import { Post } from '~/types/Post.type';

export default function head({ params: { articleSlug } }: { params: { articleSlug: string } }) {
  const frontMatter: Post[] = getAllFrontmatter();
  const post: Post = frontMatter.filter(fm => fm.slug === articleSlug)[0];

  return (
    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="shortcut icon" href="/icon.png" type="image/x-icon" />

      <title>{`${post.data.title} | Rdwansch`}</title>
      <meta name="title" content={`${post.data.title} | Rdwansch`} />
      <meta name="description" content={post.data.excerpt} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="http://rdwans.ch" />
      <meta property="og:title" content={`${post.data.title} | Rdwansch`} />
      <meta property="og:description" content={post.data.excerpt} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="http://rdwans.ch" />
      <meta property="twitter:title" content={`${post.data.title} | Rdwansch`} />
      <meta property="twitter:description" content={post.data.excerpt} />

      {/* Development */}
      {/* <meta httpEquiv="refresh" content="1" /> */}
    </>
  );
}
