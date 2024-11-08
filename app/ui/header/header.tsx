import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="fles justify-between">
      <Image src="/logo.png" alt="logo" className="w-12 h-12" />
      <nav>
        <Link href="">
          <a>Home</a>
        </Link>
        <Link href="">
          <a>Projects</a>
        </Link>
        <Link href="">
          <a>About</a>
        </Link>
      </nav>
    </header>
  )
}

export default Header
