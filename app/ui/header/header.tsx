import Link from 'next/link'

const Header = () => {
  return (
    <header className="flex justify-center items-center py-3 w-[1120px] mx-auto">
      <nav className="flex flex-row gap-x-10 opacity-80">
        <Link href="">Home</Link>
        <Link href="">Projects</Link>
        <Link href="">About</Link>
      </nav>
    </header>
  )
}

export default Header
