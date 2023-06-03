'use client';

// eslint-disable-next-line camelcase
import { Open_Sans, Preahvihear } from 'next/font/google';
import Link from 'next/link';
import useScrollTop from 'src/hooks/useScrollTop';

const openSans = Open_Sans({ weight: '400', subsets: ['latin'] });
const preahvihear = Preahvihear({ weight: '400', preload: false });

export default function Page() {
  const scrollTop = useScrollTop();

  console.log(scrollTop);

  return (
    <div className="my-container min-h-[calc(2000px+100vh)]">
      {/* Hero Section */}
      <div
        className={`${scrollTop > 150 ? 'opacity-0' : ''} mx-auto mt-60`}
        style={{ marginTop: Math.floor((380 + scrollTop) / 2) }}
      >
        <h1 className={`text-center text-3xl sm:text-4xl md:text-5xl ${openSans.className} dark:text-white`}>
          Ridhwan R. Siddiq
        </h1>

        <p className="text-center text-xl dark:text-gray-200">
          a <span className="text-violet-700 dark:text-violet-400">Frontend</span> Developer
        </p>
        <div className="flex justify-center mt-5 gap-2">
          <Link href={new URL('https://github.com/rdwansch')} target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={35}
              height={35}
              className="text-gray-800 dark:text-gray-400 dark:hover:text-gray-300 transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              {/*  eslint-disable-next-line max-len */}
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </Link>
          <Link href={new URL('https://linkedin/in/rdwansch')} target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={35}
              height={35}
              className="text-gray-800 dark:text-gray-400 dark:hover:text-gray-300 transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              {/*  eslint-disable-next-line max-len */}
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
            </svg>
          </Link>
        </div>
      </div>

      {/* About Me */}
      <div className="relative mt-32">
        <div
          className={`${scrollTop > 150 ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000  md:w-1/2 lg:w-2/5`}
        >
          <h2 className="dark:text-white text-3xl">About Me</h2>
          <p className="dark:text-gray-300 text-gray-600 text-xl mt-5">
            Student at SMKN 8 Semarang. I&apos;m a <span className="text-violet-700 dark:text-violet-400">Frontend</span>{' '}
            Developer using React and Next. I write an Articles as well to share my experiences about Coding.
          </p>
        </div>

        <svg
          className={`${scrollTop > 150 ? 'opacity-100' : 'opacity-0'} transition-opacity absolute right-0`}
          style={{ marginTop: Math.floor(-(scrollTop - 200) / 1) }}
          width="216"
          height="328"
          viewBox="0 0 216 328"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect className="dark:stroke-gray-500 stroke-black" x="1.5" y="1.5" width="213" height="325" strokeWidth="3" />
        </svg>

        <svg
          className={`${
            scrollTop > 150 ? 'opacity-100' : 'opacity-0'
          } hidden md:block transition duration-700 absolute right-10`}
          style={{ marginTop: Math.floor(-(scrollTop + 400) / 5) }}
          width="216"
          height="328"
          viewBox="0 0 216 328"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect className="dark:stroke-white stroke-gray-400" x="1.5" y="1.5" width="213" height="325" strokeWidth="3" />
        </svg>
      </div>

      {/* My Project */}
      <div className="mt-60 relative">
        <div className="mx-auto">
          {/* Left */}
          <svg
            className="absolute bottom-0 -left-10 right-0 z-10"
            style={{ marginBottom: Math.floor((scrollTop - 0) / 1.5) }}
            width="258"
            height="32"
            viewBox="0 0 258 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect className="dark:stroke-gray-300 stroke-gray-600" x="1.5" y="1.5" width="255" height="29" strokeWidth="3" />
          </svg>

          {/* Right */}
          <svg
            className="absolute bottom-0 right-20 z-10"
            style={{ marginBottom: Math.floor((scrollTop - 0) / 5) }}
            width="258"
            height="32"
            viewBox="0 0 258 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              className="dark:stroke-gray-500 stroke-gray-200 fill-gray-800"
              x="1.5"
              y="1.5"
              width="4000"
              height="29"
              strokeWidth="1"
            />
          </svg>

          <h2
            className={`${
              scrollTop > 650 ? 'opacity-100' : 'opacity-0'
            } transition-opacity text-3xl dark:text-white text-center`}
          >
            Projects
          </h2>
          {/* First Project */}
          <div
            className={`${
              scrollTop > 750 ? 'opacity-100 translate-x-0 translate-y-0' : 'translate-y-5 -translate-x-5 opacity-0'
            } mt-20 transition-all duration-700 md:flex gap-10 w-[80%] mx-auto`}
          >
            <div className="bg-gray-400 max-w-full max-h-full  -[400px]">
              <img src="/images/project_virtual_card.png" alt="Virtual Card" width={400} height={250} />
            </div>
            <div className="md:w-2/3">
              <Link
                href={new URL('https://virtual-card-lemon.vercel.app')}
                className="dark:text-gray-100 text-gray-900 text-xl font-bold"
              >
                Virtual Card
              </Link>
              <p className="dark:text-gray-300 text-gray-500 ">
                Build with Next JS, Next-Auth, Tailwindcss. Using Credentials and Google OAuth to login or register. Hosted
                on Vercel and PlanetScale
              </p>
            </div>
          </div>

          {/* Second Project */}
          <div
            className={`${
              scrollTop > 1500 ? 'opacity-100 translate-x-0 translate-y-0' : '-translate-y-10 opacity-0'
            } mt-20 transition-all duration-700 flex flex-col-reverse md:flex-row gap-10 ml-auto w-[80%] mx-auto md:mx-0`}
          >
            <div className="md:w-2/3">
              <Link
                href={new URL('https://github.com/rdwansch/video-games-store')}
                className="dark:text-gray-100 text-gray-900 text-xl font-bold"
              >
                Video Games Store
              </Link>
              <p className="dark:text-gray-300 text-gray-500 ">
                Using Public API to provide a data. Build with Next JS, SWR, Tailwindcss.
              </p>
            </div>
            <div className="bg-gray-400 w-[400px]">
              <img src="/images/project_game_store.png" alt="Game Store" width={400} height={250} />
            </div>
          </div>

          {/* Third Project */}
          <div
            className={`${
              scrollTop > 750 ? 'opacity-100 translate-x-0 translate-y-0' : 'translate-y-5 -translate-x-5 opacity-0'
            } mt-20 transition-all duration-700 md:flex gap-10 w-[80%] mx-auto`}
          >
            <div className="bg-gray-400 max-w-full max-h-full w-[400px]">
              <img src="/images/project_blog.png" alt="Virtual Card" width={400} height={250} />
            </div>
            <div className="md:w-2/3">
              <Link href="/read" className="dark:text-gray-100 text-gray-900 text-xl font-bold">
                Blog Posts
              </Link>
              <p className="dark:text-gray-300 text-gray-500 ">Blog post using Next JS, MDX, Tailwindcss.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[350px] relative">
        <div className={`${scrollTop > 3300 && scrollTop < 3700 ? 'block' : 'hidden'}`}>
          <Link href="/read" className={`${preahvihear.className} dark:text-white text-4xl block`}>
            Wanna Read my Post?
          </Link>
        </div>
        <span className={`${scrollTop > 3300 ? 'opacity-100' : 'opacity-0'} text-gray-700 dark:text-gray-200`}>or</span>
        <div className={`${scrollTop > 3700 ? 'opacity-100' : 'opacity-0'} `}>
          <h3 className="dark:text-white text-4xl block">Stay Connected</h3>

          <div className="flex gap-7 mt-5">
            <Link href={new URL('https://github.com/rdwansch')}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={50}
                height={50}
                className="text-gray-800 dark:text-gray-400 dark:hover:text-gray-300 transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                {/*  eslint-disable-next-line max-len */}
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </Link>

            <Link href={new URL('https://https://linkedin.com/in/rdwansch')}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={50}
                height={50}
                className="text-gray-800 dark:text-gray-400 dark:hover:text-gray-300 transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                {/*  eslint-disable-next-line max-len */}
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
            </Link>

            <a href="mailto:ridwanrasyid345@gmail.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={50}
                height={50}
                className="text-gray-800 dark:text-gray-400 dark:hover:text-gray-300 transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                {/*  eslint-disable-next-line max-len */}
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
              </svg>
            </a>
          </div>
        </div>

        <h4 className={`${preahvihear.className} dark:text-white absolute md:-bottom-64 -bottom-36 right-0`}>Thank You.</h4>
      </div>
    </div>
  );
}
