import Image from 'next/image'
import React from 'react'
import Briefcase from './icons/briefcase'
// Icons
import Github from './icons/github'
import LinkedIn from './icons/linkedIn'
// Components
import Badge from './ui/badge/badge'
import { Container } from './ui/container/container'
import Experience from './ui/experience/experience'
import SocialPill from './ui/social-pill/social-pill'

function IndexPage() {
  return (
    <main className="px-4">
      <Container className="py-44 pb-20">
        <Image
          className="rounded-full w-12 h-12 mb-4"
          src="/images/me.jpg"
          width={48}
          height={48}
          alt="Logo"
        />
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold flex flex-row gap-x-4 pb-6 lg:pb-10">
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
        <h2 className="text-xl lg:text-2xl text-wrap max-w-[700px]">
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

        <nav className="flex gap-4 mt-8 flex-wrap">
          <SocialPill link="https://www.linkedin.com/in/markozpena/">
            <LinkedIn className="size-4 md:size-6" />
            LinkedIn
          </SocialPill>

          <SocialPill link="https://github.com/markozxuu">
            <Github className="size-4 md:size-6" />
            GitHub
          </SocialPill>
        </nav>
      </Container>
      <Container id="experience">
        <h2 className="text-3xl font-semibold mb-4 flex items-center gap-x-3">
          <Briefcase className="size-7" />
          Experiencia laboral
        </h2>
        <Experience />
      </Container>
    </main>
  )
}

export default IndexPage
