import React from 'react'
import Badge from './ui/badge/badge'

function IndexPage() {
  return (
    <main>
      <section className="w-full mx-auto lg:w-[740px] py-44">
        <h1 className="text-5xl font-bold flex justify-center flex-row gap-x-4 pb-4">
          Hey, soy Markoz
          <div className="flex justify-center items-center">
            <Badge>No disponible para trabajar</Badge>
          </div>
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
