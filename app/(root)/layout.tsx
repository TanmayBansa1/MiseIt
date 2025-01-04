import Header from '@/components/Header'
import MobileNavigation from '@/components/MobileNavigation'
import Sidebar from '@/components/Sidebar'
import React from 'react'
import { getCurrentUser } from '@/lib/actions/user.actions'
import { redirect } from 'next/navigation'
import { Toaster } from '@/components/ui/toaster'
const layout = async ({ children }: { children: React.ReactNode }) => {

    const user = await getCurrentUser();
    if(!user){
        redirect('/sign-in')
    } 
    return (
        <main className='flex min-h-screen'>
            <Sidebar user={user}></Sidebar>

            <section className='flex h-full flex-1 flex-col'>
                <MobileNavigation user={user}></MobileNavigation>
                <Header ownerId={user.$id} accountId={user.accountId}></Header>

                <div className='main-content'>
                    {children} 
                </div>
            </section>

            <div>

            </div>
            <Toaster></Toaster>
        </main>
    )
}

export default layout