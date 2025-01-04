'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { navItems } from '../constants/index'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'


const Sidebar = ({ user }: { user: { fullname: string, email: string, avatarUrl: string } }) => {
  const pathname = usePathname()
  return (
    <aside className='sidebar'>
      <Link href='/'>
        <Image src='/assets/images/storeitlogo.png' alt='logo' width={160} height={50} className='hidden h-auto lg:block '>

        </Image>
        <Image src='/assets/images/storeitlogo.png' alt='logo' width={52} height={52} className='block h-auto lg:hidden '>

        </Image>
      </Link>
      <nav className='sidebar-nav'>
        <ul className='flex flex-col gap-6 flex-1'>
          {navItems.map(({ url, name, icon }) => (
            <Link href={url} key={name} className='lg:w-full'>
              <li className={cn('sidebar-nav-item', pathname === url && 'shad-active')}>
                <Image className={cn('nav-icon', pathname === url && 'nav-icon-active')} src={icon} alt={name} width={24} height={24}></Image>
                <p className='hidden lg:block'>{name}</p>
              </li>
            </Link>
          ))}

        </ul>

      </nav>
      <Image src='/illustration.svg' alt='files' width={318} height={318} className='w-full h-auto'></Image>

      <div className='sidebar-user-info'>
        <Image src='/assets/images/avatar.png' alt='avatar' width={52} height={52} className='sidebar-user-avatar'></Image>
        <div className='hidden lg:block'>

          <p className='subtitle-2 capitalize'>{user.fullname}</p>
          <p className='caption'>{user.email}</p>
        </div>

      </div>

    </aside>
  )
}

export default Sidebar