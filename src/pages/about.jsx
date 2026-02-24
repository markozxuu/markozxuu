import Image from 'next/future/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import siteMeta from '@/data/siteMeta'
import { NextSeo } from 'next-seo';


function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="flex text-sm font-medium transition group text-zinc-800 hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="flex-none w-6 h-6 transition fill-zinc-500 group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <NextSeo
        title="About - Brian Ketelsen"
        description={siteMeta.description}
        canonical="https://brian.dev/about"
        openGraph={{
          url: 'https://brian.dev/about',
          images: [
            {
              url: `https://og.brian.dev/api/og?title=About&desc=${siteMeta.description}`,
              width: 1200,
              height: 600,
              alt: 'Og Image Alt',
              type: 'image/jpeg',
            }
          ],
          siteName: 'brian.dev',
        }}
      />
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src="/static/profile.jpg"
                alt=""
                width={442}
                height={442}
                className="object-cover aspect-square rotate-3 rounded-2xl bg-zinc-100 dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Markoz Peña, a Software Engineer focused on frontend architecture based in Mexico 🇲🇽
            </h1>
            <div className="mt-6 text-lg prose space-y-7 dark:prose-invert text-zinc-600 dark:text-zinc-400">
              <p>
              I build modern, scalable web experiences that are clear, fast, and made to last.
              </p>
              <p>
              Hey{" "}
              <span
  className="inline-block origin-[70%_70%] animate-[wave_2.5s_ease-in-out_1]"
  style={{
    animationName: 'wave',
  }}
>
  👋
</span>{" "}
            I’m Markoz. For over four years, I’ve been building production-ready applications with React and modern tooling. I care about clean architecture and clear naming — because good software should feel simple, even when it isn’t.
              </p>
              <p>
              I’ve been close to the Open Source world (especially around the Vercel ecosystem), and that builder mindset still shapes how I approach every project.
              </p>
              <h2 className='text-2xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl'>What you can expect when working with me</h2>
              <p>
                <b>Clarity over complexity</b>
                <br />
                I design solutions that are easy to understand, maintain, and scale — not just quick fixes.              </p>
              <p>
                <b>Performance & experience</b>
                <br />
                Fast interfaces, smooth interactions (often pure CSS), and thoughtful user flows that feel intentional.              </p>
              <p>
                <b>Ownership & long-term thinking</b>
                <br />
                I treat projects like investments. I focus on structure, communication, and sustainability.              </p>
              <p>
                <b>Curiosity beyond the UI</b>
                <br />
                I enjoy understanding how systems work end-to-end, so the frontend isn’t isolated from the bigger picture.
              </p>
              <p>
              I believe great software is built with clarity, responsibility, and long-term thinking.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href={siteMeta.author.twitter} icon={TwitterIcon}>
                Follow on X
              </SocialLink>
              <SocialLink href={siteMeta.author.instagram} icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              <SocialLink href={siteMeta.author.github} icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href={siteMeta.author.linkedin} icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href={`mailto:${siteMeta.author.email}`}
                icon={MailIcon}
                className="pt-8 mt-8 border-t border-zinc-100 dark:border-zinc-700/40"
              >
                {siteMeta.author.email}
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
