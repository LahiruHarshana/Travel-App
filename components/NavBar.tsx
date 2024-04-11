import { NAV_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from './Button'

const NavBar = () => {
  return (
    <nav className='flexBetween  padding-container relative z-30 py-5'>
    <Link href="/">
        <Image src="/logo.png" alt='logo' width={70} height={29}>

        </Image>
        </Link>

    <ul className='hidden h-full gap-12 lg:flex'>
            {NAV_LINKS.map((link) => (
                <Link href={link.href} key={link.key} className='regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'>
                    {link.label}
                </Link>
            
            ))}

    </ul>

    <div className='lg:flexCenter hidden'>
        <Button
        type = 'button'
        title = 'Login'
        icon = '/user.png'
        variant = 'btn_dark_green'/>
    </div>

    <Image
    src="/menu.png"
    alt='menu'
    width={32}
    height={32}
    className='inline-block cursor-pointer lg:hidden'/>
    </nav>
  )
}

export default NavBar
