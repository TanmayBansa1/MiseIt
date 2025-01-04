import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import { signOutUser } from '@/lib/actions/user.actions'
import FileUploader from './FileUploader'

type Props = {
  ownerId: string,
  accountId: string
}

const Header = (props: Props) => {
  return (
    <div className='header'>
        Search

        <div className='header-wrapper'>
            <FileUploader ownerId={props.ownerId} accountId={props.accountId}></FileUploader>
            <form action={async ()=>{
              'use server'
              await signOutUser();
            }}>
                <Button type='submit' className='sign-out-button'>
                    <Image src='/assets/icons/logout.svg' alt='logout' width={24} height={24} className='w-6'>

                    </Image>

                </Button>

            </form>

        </div>
    </div>
  )
}

export default Header