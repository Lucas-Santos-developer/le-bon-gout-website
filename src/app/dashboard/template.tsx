import React from 'react'

type Props = { children: React.ReactNode }

export default function DashboardTemplate({ children }: Props) {
  return (
    <>
      <main>{children}</main>
    </>
  )
}
