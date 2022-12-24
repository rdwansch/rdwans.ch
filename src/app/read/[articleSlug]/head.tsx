import { getAllFrontmatter } from '~/helper/markdown';

export default function head({ params: { articleSlug } }: { params: { articleSlug: string } }) {
  const frontMatter = getAllFrontmatter();
  const post = frontMatter.filter(fm => fm.slug === articleSlug)[0];

  return (
    <>
      <title>{`${post.data.title} | R. Siddiq`}</title>
      <meta name="title" content={`${post.data.title} | R. Siddiq`} />
      <meta name="description" content={post.data.excerpt} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="http://localhost" />
      <meta property="og:title" content={`${post.data.title} | R. Siddiq`} />
      <meta property="og:description" content={post.data.excerpt} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="http://localhost" />
      <meta property="twitter:title" content={`${post.data.title} | R. Siddiq`} />
      <meta property="twitter:description" content={post.data.excerpt} />
    </>
  );
}
