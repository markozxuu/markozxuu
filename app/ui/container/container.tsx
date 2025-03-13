import clsx from 'clsx'
import React, { ReactNode, forwardRef } from 'react'

interface OuterContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
}

export const OuterContainer = forwardRef<HTMLDivElement, OuterContainerProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={clsx('sm:px-8', className)} {...props}>
        <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
      </div>
    )
  },
)
