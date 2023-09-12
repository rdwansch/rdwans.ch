import { Poppins, Inter } from 'next/font/google';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';

import MDXRemoteWrapper from '~/components/MDXRemote';
import { Metadata } from 'next';
import { getSingleMatter } from '~/helper/markdown';

type Props = {
  params: {
    articleSlug: string;
  };
};

const inter = Inter({ preload: true, subsets: ['latin'] });
const poppins = Poppins({ weight: ['800', '700', '600', '500', '400', '300'], preload: true, subsets: ['latin'] });
export const dynamicParams = false; // fallback

export default async function page(props: Props) {
  // eslint-disable-next-line no-use-before-define
  const res = await getSingleMatter(props.params);
  // console.log(res);

  return (
    <>
      <div className="hidden p-8 sm:flex-row max-w-full">css for prose</div>
      <div className="article-container mt-10">
        <div>
          <h1
            className={
              `${inter.className} dark:text-gray-300 text-center text-3xl sm:text-4xl md:text-5xl text-gray-900 relative mt-10 ` +
              "after:content[''] after:absolute after:w-[200px] after:h-[180px] after:-bottom-20 after:left-32 after:right-0 after:mx-auto " +
              'after:rounded-full ' +
              "after:bg-cover after:bg-[url('/gradient.svg')]"
            }
          >
            {res.data.title}
          </h1>
          <p className="font-bold text-center text-violet-600 dark:text-violet-600 mb-10">{res.data.tags.join('  ')}</p>
          <span className="dark:text-gray-400 text-gray-600">
            {res.data.publishedAt} &bull; {res.readingTime} min
          </span>
          <hr className="dark:border-gray-600 border-gray-300 mt-2" />
        </div>
        <div className={`${poppins.className} my-5 dark:text-gray-300 text-gray-900 font-sans`}>
          <MDXRemoteWrapper {...res.source} />
        </div>

        <div className="flex justify-between">
          <button
            type="button"
            className={
              'block mb-10 py-3 relative ' +
              "after:content-[''] after:bottom-3 after:absolute after:left-0 after:right-0 after:w-0 after:h-1 " +
              'after:hover:w-full after:transition-all after:bg-gradient-to-tr after:from-red-100 after:to-violet-900 after:hover:h-0.5'
            }
          >
            <Link
              href="/read"
              className="text-violet-700 dark:text-violet-400 dark:hover:text-violet-300 hover:text-violet-800 font-normal text-lg"
            >
              Back to posts
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}

// Generate static file html
export async function generateStaticParams(): Promise<{ articleSlug: string }[]> {
  const files = fs.readdirSync(path.join('src/posts')).filter(file => file.split('.')[1] === 'mdx');
  const params = files.map(file => ({ articleSlug: file.split('.')[0] }));
  return params;
}

// Generate meta data
export async function generateMetadata(props: Props): Promise<Metadata> {
  // console.log(props.params);
  const res = await getSingleMatter(props.params);

  return {
    title: res.data.title,
    keywords: res.data.tags,
    description: res.data.excerpt,
  };
}
