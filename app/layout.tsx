import type { ReactNode } from 'react'
import './css/globals.css'

function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

export default Layout
