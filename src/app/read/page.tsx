import { Preahvihear, Inter } from '@next/font/google';
import Link from 'next/link';
import { getAllFrontmatter } from '~/helper/markdown';
import { Post } from '~/types/Post.type';

const preahvihear = Preahvihear({ weight: '400', preload: false });
const inter = Inter({ preload: false });

export default async function page() {
  const posts: Post[] = await getAllFrontmatter();

  return (
    <section className="my-container mx-auto mt-10 mb-36">
      <div>
        <h1 className={`${preahvihear.className} text-black dark:text-gray-300 text-4xl`}>Read My Post</h1>
        <hr className="dark:border-gray-600 border-gray-300 mt-5" />
      </div>

      <article className="mt-7">
        {posts.map(
          post =>
            !post.data.draft && (
              <div className="flex flex-col my-5 md:flex-row md:gap-10 lg:gap-28" key={post.data.title}>
                <span className="dark:text-gray-400 text-gray-500 max-w-full w-[150px] mb-7 md:mb-0">
                  {post.data.publishedAt}
                </span>
                <div
                  className={
                    'group p-0 max-w-full transition-shadow shadow-gray-50 rounded-lg ' +
                    'md:w-[600px] md:p-5 ' +
                    'hover:shadow-lg dark:shadow-gray-800'
                  }
                >
                  <h1
                    className={
                      `${inter.className} text-xl -mt-5 text-gray-700 relative w-fit font-bold ` +
                      "after:content[''] after:absolute after:w-0 after:h-[1.5px] after:bottom-0 after:left-1 " +
                      'after:bg-gradient-to-r after:from-white after:to-gray-500 after:transition-[width]  ' +
                      'hover:after:w-full dark:text-gray-200 md:text-3xl'
                    }
                  >
                    <Link href={`/read/${post.slug}`}>{post.data.title}</Link>
                  </h1>
                  <div className="font-bold dark:text-violet-400 text-violet-600 flex gap-5 mb-0 sm:mb-5">
                    {post.data.tags.map(tag => (
                      <button type="button" key={tag}>
                        {tag}
                      </button>
                    ))}
                  </div>
                  <p className="dark:text-gray-400 text-gray-500">{post.data.excerpt}</p>
                </div>
              </div>
            )
        )}
      </article>
    </section>
  );
}
