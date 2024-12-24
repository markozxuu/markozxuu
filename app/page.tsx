import Image from 'next/image'
import React from 'react'
// Icons
import Github from './icons/github'
import LinkedIn from './icons/linkedIn'
// Components
import Badge from './ui/badge/badge'
import SocialPill from './ui/social-pill/social-pill'

function IndexPage() {
  return (
    <main>
      <section className="w-full mx-auto lg:w-[740px] py-44">
        <Image
          className="rounded-full w-12 h-12 mb-4"
          src="/images/me.jpg"
          width={48}
          height={48}
          alt="Logo"
        />
        <h1 className="text-5xl font-bold flex flex-row gap-x-4 pb-10">
          Hey, soy Markoz
          <a
            href="https://www.linkedin.com/in/markozpena/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center"
          >
            <Badge>No disponible para trabajar</Badge>
          </a>
        </h1>
        <h2 className="text-2xl text-wrap">
          <span>+4 años de experiencia. </span>
          <span className=" text-yellow-200/90">
            Desarollador Web y divulador
          </span>
          . <span className=" text-red-200/90">De Veracruz, México 🇲🇽 </span>.
          <span className="opacity-75">
            {' '}
            Especializado en crear aplicaciones altamente escalables.
          </span>
        </h2>

        <nav className="flex gap-x-2 mt-8">
          <SocialPill link="https://www.linkedin.com/in/markozpena/">
            LinkedIn
            <LinkedIn className="w-6 h-6" />
          </SocialPill>

          <SocialPill link="https://github.com/markozxuu">
            GitHub
            <Github className="w-6 h-6" />
          </SocialPill>
        </nav>
      </section>
    </main>
  )
}

export default IndexPage
