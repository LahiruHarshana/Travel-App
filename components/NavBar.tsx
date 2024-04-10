import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <nav className='border-2 border-red-500 flexBetween max-container padding-container relative z-30 py-5'>
    <Link href="/">
        <Image src="/logo.png" alt='logo' width={70} height={29}>

        </Image>

        <ul>
            
        </ul>
    </Link>
    </nav>
  )
}

export default NavBar
