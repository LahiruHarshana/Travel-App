import { NAV_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from './Button'

const NavBar = () => {
  return (
    <nav className='flexBetween padding-container py-5' style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 30 }}>
      <Link href="/">
        <Image src="/logo.png" alt='logo' width={70} height={29} />
      </Link>

      <ul className='hidden h-full gap-12 lg:flex'>
        {NAV_LINKS.map((link) => (
          <li key={link.key} className='regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'>
            <Link href={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className='lg:flexCenter hidden'>
        <Button
          type='button'
          title='Login'
          icon='/user.png'
          variant='btn_dark_green'
        />
      </div>

      <Image
        src="/menu.png"
        alt='menu'
        width={32}
        height={32}
        className='inline-block cursor-pointer lg:hidden'
      />
    </nav>
  )
}

export default NavBar
