import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode
}

const Layout = ({children}:Props) => {
  return (
    <main className='flex min-h-screen w-full items-center justify-center'>{children}</main>
  )
}

export default Layout