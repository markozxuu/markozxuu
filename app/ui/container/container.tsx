import type { FC, ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
}

const Container: FC<ContainerProps> = ({ children }) => (
  <section className="w-full mx-auto lg:w-[740px] py-44">{children}</section>
)

export default Container
