import Link from 'next/link'
import React from 'react'
import { FaHeart } from 'react-icons/fa'

type Props = { children: React.ReactNode }

export default function PublicHomePage({ children }: Props) {
  const NavigatorLinks = [
    { id: 1, label: 'início', path: '/' },
    { id: 2, label: 'sobre', path: '/sobre' },
    { id: 3, label: 'contato', path: '/contato' },
    { id: 4, label: 'cardápio', path: '/cardapio' },
  ]
  return (
    <>
      <header className='flex justify-between items-center py-4 px-24'>
        <Link
          href='/'
          className='flex items-center gap-1'
        >
          <span>Restaurante</span>
          <span className='text-lg text-orange-800 capitalize'>
            le bon goût
          </span>
          <FaHeart
            color='#9a3412'
            size={24}
          />
        </Link>
        <nav className='flex gap-2 items-center'>
          {NavigatorLinks.map((item, index) => (
            <Link
              key={index}
              className='capitalize'
              href={item.path}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}
