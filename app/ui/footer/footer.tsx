// Components
import { InnerContainer, OuterContainer } from '../container/container'
import NavLink from '../nav-link/nav-link'

const Footer = () => (
  <footer className="mt-32">
    <OuterContainer>
      <div className="border-t border-zinc-100 dark:border-zinc-700/40 pt-10 pb-16">
        <InnerContainer>
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex gap-6 font-medium text-sm">
              <NavLink href="/about">About</NavLink>
              <NavLink href="/blog">Blog</NavLink>
              <NavLink href="/proyect">Projects</NavLink>
              <NavLink href="/proyect">RSS</NavLink>
            </div>
            <p className="text-sm text-zinc-400 dark:text-zinc-500">
              Markoz Peña (@markozxuu)
            </p>
          </div>
        </InnerContainer>
      </div>
    </OuterContainer>
  </footer>
)

export default Footer
