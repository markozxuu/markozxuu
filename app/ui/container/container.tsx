import type { FC, ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
}

const Container: FC<ContainerProps> = ({ children, className }) => (
  <section className={`w-full mx-auto lg:w-[740px] ${className}`}>
    {children}
  </section>
)

export default Container
