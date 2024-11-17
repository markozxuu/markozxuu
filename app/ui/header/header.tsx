import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="flex justify-between items-center py-3 w-[1120px]">
      <Image
        className="rounded-full w-12 h-12"
        src="/images/me.jpg"
        width={48}
        height={48}
        alt="Logo"
      />
      <nav className="flex flex-row gap-x-10 opacity-80">
        <Link href="">Home</Link>
        <Link href="">Projects</Link>
        <Link href="">About</Link>
      </nav>
    </header>
  )
}

export default Header
