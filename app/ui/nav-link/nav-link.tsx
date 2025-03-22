import Link from 'next/link'
import { FC, ReactNode } from 'react'

interface NaviLinkProps {
  href: string
  children: ReactNode
}

const NavLink: FC<NaviLinkProps> = ({ children, href }) => (
  <Link
    className="hover:text-blue-500 duration-200 transition-colors"
    href={href}
  >
    {children}
  </Link>
)

export default NavLink
