import Link from 'next/link'

const Header = () => {
  return (
    <header className="flex justify-center items-center py-3 w-[1120px] mx-auto">
      <nav className="flex flex-row gap-x-10 opacity-80">
        <Link href="#top">Home</Link>
        <Link href="#experience">Experiencia</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#about">About</Link>
      </nav>
    </header>
  )
}

export default Header
