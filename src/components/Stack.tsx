import React from 'react'

type StackProps = React.HTMLAttributes<HTMLDivElement>

export const HStack: React.FC<StackProps> = ({ children, className, ...props }) => {
  return (
    <div className={`flex flex-row items-center ${className}`} {...props}>
      {children}
    </div>
  )
}

export const VStack: React.FC<StackProps> = ({ children, className, ...props }) => {
  return (
    <div className={`flex flex-col ${className}`} {...props}>
      {children}
    </div>
  )
}
