import Image from 'next/image';

import s from './about.module.css';

import markozImg from '@public/static/me.jpg';

const About = () => (
  <div className={s.root}>
    <div className={s.container}>
      <div className="lg:px-4">
        <h1 className="lg:text-4xl text-2xl text-gray-900 dark:text-white font-bold">
          Hi there, I&apos;m Markoz <span className={s.wave}>👋🏼</span>
        </h1>
        <div className="mt-4 text-[#212121] dark:text-[#eaeaea]">
          <p>
            I started programming in late 2015. I&apos;m a strong believer in
            the idea that you can learn a lot about programming through blog
            readings and online courses.
          </p>
          <p className="mt-2">
            Currently working at DiamtraLabs as Frontend Developer, and I&apos;m
            collaborator very active in the OSS projects{' '}
            <a
              href="https://vercel.com/"
              className="font-bold dark:text-white text-black"
              target="_blank"
              rel="noopener noreferrer"
            >
              ▲ Vercel
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
