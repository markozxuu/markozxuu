import type { Metadata } from 'next'
import type { ReactNode } from 'react'
// Components
import Header from './ui/header'
// Global styles
import './css/globals.css'

export const metadata: Metadata = {
  title: 'My App :D',
  description: 'My app description',
}

function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}

export default Layout
