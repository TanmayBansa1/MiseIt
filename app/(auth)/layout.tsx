import React from 'react'
import Image from 'next/image'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex min-h-screen w-full'>
            <section className='hidden lg:flex lg:flex-col w-1/2 xl:w-2/5 overflow-hidden h-screen bg-sky-900'>
                <div className='pt-10 pl-10 pr-10 pb-5 max-h-[800px] max-w-[430px]'>
                    <Image src='/assets/images/storeitlogo.png' alt='logo' width={85} height={85}>

                    </Image>
                    <h1 className='text-6xl font-semibold text-white py-6 '>
                        MiseIt
                    </h1>
                </div>
                <div className='px-10 '>
                    <h2 className='h1 text-white'>The only storage solution you need</h2>

                </div>
                <div className='flex-center p-5'>

                    <Image src='/Illustration.svg' alt='logo' width={300} height={300} className='transition hover:scale-105 hover:rotate-12'></Image>
                </div>

            </section>
            <section className='flex flex-1 flex-col items-center p-4 py-10 lg:justify-center lg:p-10 lg:py-0'>
                <div className='mb-16 lg:hidden'>
                    <div className='text-6xl font-semibold text-sky-900 py-6 '>
                        MiseIt
                    </div>

                </div>


                {children}
            </section>

        </div>
    )
}

export default layout