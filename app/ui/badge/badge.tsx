import { FC, ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
}

const Badge: FC<BadgeProps> = ({ children }) => {
  return (
    <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
      {children}
    </span>
  )
}

export default Badge
