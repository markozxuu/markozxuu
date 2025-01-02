import type { FC, ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
  id?: string
}

const Container: FC<ContainerProps> = ({ children, className, id }) => (
  <section id={id} className={`${className} w-full mx-auto lg:w-[740px] pb-24`}>
    {children}
  </section>
)

export default Container
