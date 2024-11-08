import Link from 'next/link'

const Header = () => {
  return (
    <header className="fles justify-between">
      <nav>
        <Link href="">Home</Link>
        <Link href="">Projects</Link>
        <Link href="">About</Link>
      </nav>
    </header>
  )
}

export default Header
