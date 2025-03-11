import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Footer from './ui/footer/footer'
// Components
import Header from './ui/header/header'
// Global styles
import './css/globals.css'

export const metadata: Metadata = {
  title:
    'Portafolio Markoz - Desarollador y progamador web con +4 años de experiencia',
  description:
    'Contrata a Markoz para crear tu aplicación web o movil. Desarrollador web y divulgador. Especializado en crear aplicaciones web unicas.',
}

function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <div className="fixed inset-0 flex justify-center sm:px-8">
          <div className="flex w-full max-w-7xl lg:px-8">
            <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
          </div>
        </div>
        <div className="relative">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}

export default Layout
