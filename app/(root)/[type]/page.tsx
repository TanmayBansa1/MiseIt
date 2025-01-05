import { SearchParamProps } from '@/types'
import React from 'react'
import { getFiles } from '@/lib/actions/file.actions'
import { Models } from 'node-appwrite'
import Sort from '@/components/Sort'
import Filecard from '@/components/Filecard'

const page = async ({params}: SearchParamProps) => {

    const type = ((await params)?.type as string) || ""
    const files = await getFiles();
  return (
    <div className='page-container'>
        <section className='w-full'>
            <h1 className='h1 capitalize'>
                {type}
            </h1>
            <div className='total-size-section'>
                <p className='body-1'>
                    Total: <span className='h5'>0MB</span>
                </p>
                <div className='sort-container'>
                    <p className='body-1 hidder text-light-200 sm:block'>Sort by</p>
                    <Sort></Sort>
                </div>
            </div>
        </section>
        {files.length > 0 ? (
            <section className='file-list'>
                {files.map((file:Models.Document)=>(

                    <Filecard key={file.$id} file={file}></Filecard>
                )
                )}

            </section>
        ):(
            <p className='empty-list'>No files found</p>
        )}
    </div>
  )
}

export default page