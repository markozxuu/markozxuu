import cx from 'clsx'
import React, { ReactNode, forwardRef } from 'react'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
}

export const OuterContainer = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cx('sm:px-8', className)} {...props}>
        <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
      </div>
    )
  },
)

export const InnerContainer = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cx('relative px-4 sm:px-8 lg:px-12', className)}
        {...props}
      >
        <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
      </div>
    )
  },
)

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, ...props }, ref) => {
    return (
      <OuterContainer ref={ref} {...props}>
        <InnerContainer>{children}</InnerContainer>
      </OuterContainer>
    )
  },
)
