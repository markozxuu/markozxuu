import Image from 'next/image';

import s from './about.module.css';

import markozImg from '@public/static/me.jpg';

const About = () => (
  <div className={s.root}>
    <div className={s.container}>
      <div className="lg:px-4">
        <h1 className="text-2xl font-bold text-gray-900 lg:text-4xl dark:text-white">
          Hi there, I&apos;m Markoz <span className={s.wave}>👋🏼</span>
        </h1>
        <div className="mt-4 text-[#212121] dark:text-[#eaeaea]">
          <p>
            I started programming in late 2015. I&apos;m a strong believer in
            the idea that you can learn a lot about programming through blog
            readings and online courses.
          </p>
          <p className="mt-2">
            Currently working at{' '}
            <a
              className="underline"
              href="https://www.terapify.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terapify
            </a>{' '}
            as Front-End Enginner, and I&apos;m collaborator very active in the
            OSS projects{' '}
            <a
              href="https://vercel.com/"
              className="font-bold text-black dark:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              ▲ Vercelll
            </a>{' '}
            helping to improve products like Next.js and vercel cli.
          </p>
        </div>
      </div>
      <div className="flex-shrink-0 mt-12 lg:px-4 lg:mt-0">
        <Image
          src={markozImg}
          alt="Profile photo"
          placeholder="blur"
          className="rounded-full"
          priority={true}
          width={200}
          height={200}
        />
      </div>
    </div>
  </div>
);

export default About;
