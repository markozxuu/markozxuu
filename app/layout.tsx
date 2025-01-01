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
        <div className="relative h-full w-full bg-slate-950 overflow-auto">
          <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
          <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
          <div className="relative z-10">
            <Header />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}

export default Layout
