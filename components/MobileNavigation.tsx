'use client'
import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image'
import { useState } from 'react'
import { Separator } from './ui/separator'
import { navItems } from '@/constants'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Button } from './ui/button'
import FileUploader from './FileUploader'
import { signOutUser } from '@/lib/actions/user.actions'

const MobileNavigation = ({ user }: { user: { fullname: string, email: string, avatarUrl: string } }) => {

  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  return (
    <header className='mobile-header mt-5' >
      <Image src='/assets/images/storeitlogo.png' alt='logo' width={60} height={60} className='h-auto '>

      </Image>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>

          <Image src='/assets/icons/menu.svg' alt='Menu' width={30} height={30} className='h-auto'></Image>
        </SheetTrigger>
        <SheetContent className="shad-sheet h-screen">
          <SheetHeader>
            <SheetTitle>
              <div className='header-user flex-center'>
                <Image src='/assets/images/avatar.png' alt='avatar' width={52} height={52} className='header-user-avatar'></Image>
                <div className='sm:hidden lg:block text-center'>
                  <p className='subtitle-2 capitalize'>{user.fullname}</p>
                  <p className='caption'>{user.email}</p>
                </div>
              </div>
              <Separator className='my-5 bg-light-200/20'></Separator>
            </SheetTitle>
            <nav className='mobile-nav'>
              <ul className='mobile-nav-list'>
                {navItems.map(({ url, name, icon }) => (
                  <Link href={url} key={name} className='lg:w-full'>
                    <li className={cn('mobile-nav-item', pathname === url && 'shad-active')}>
                      <Image className={cn('nav-icon', pathname === url && 'nav-icon-active')} src={icon} alt={name} width={24} height={24}></Image>
                      <p >{name}</p>
                    </li>
                  </Link>
                ))}
              </ul>

            </nav>
            <Separator className='my-5 bg-light-200/20'></Separator>
            <div className="flex flex-col justify-between gap-5">
              {/* <FileUploader></FileUploader> */}
              <Button type='submit' className='mobile-sign-out-button'
              onClick={async () => { await signOutUser()}}>
                <Image src='/assets/icons/logout.svg' alt='logout' width={24} height={24}></Image>

                
              </Button>
            </div>
            
          </SheetHeader>
        </SheetContent>
      </Sheet>

    </header >
  )
}

export default MobileNavigation