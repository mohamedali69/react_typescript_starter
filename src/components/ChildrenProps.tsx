import React, { ReactNode } from 'react'

type RootLayoutProps = {
  children: ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <div>
      <h1>RootLayout</h1>
      {children}
    </div>
  )
}

export default RootLayout