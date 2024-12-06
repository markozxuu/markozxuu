import Image from 'next/image'
import React from 'react'
import Badge from './ui/badge'

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
        <h2 className="text-xl opacity-80">
          +5 años de experiencia. Desarollador Web. De Veracruz, México 🇲🇽.
          Especializado en crear aplicaciones altamente escalables.
        </h2>

        <ul>
          <li>markoz</li>
        </ul>
      </section>
    </main>
  )
}

export default IndexPage
