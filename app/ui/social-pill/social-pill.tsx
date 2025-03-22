import type { FC, ReactNode } from 'react'

interface SocialPillProps {
  children: ReactNode
  link: string
}

const SocialPill: FC<SocialPillProps> = ({ children, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-full border border-white/10 flex justify-center items-center gap-x-2 py-1 px-2 md:py-2 md:px-4 text-xs md:text-base bg-white/5 hover:scale-110 hover:bg-white/10 transition"
    >
      {children}
    </a>
  )
}

export default SocialPill
