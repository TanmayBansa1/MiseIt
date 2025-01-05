import Link from 'next/link'
import { Models } from 'node-appwrite'
import React from 'react'
import Thumbnail from './Thumbnail'
import { convertFileSize } from '@/lib/utils'
import FormattedDatetime from './FormattedDatetime'
import ActionDropdown from './ActionDropdown'

const Filecard = ({ file }: { file: Models.Document }) => {
    return (
        <Link href={file.url} target='_blank' className='file-card' key={file.$id}>
            <div className='flex justify-between'>
                <Thumbnail url={file.url} className='!size-20' imageClassName='!size-11' type={file.type} extension={file.extension} ></Thumbnail>
                <div className='flex flex-col items-end justify-between'>
                    <ActionDropdown></ActionDropdown>
                    <p className='body-1'>{convertFileSize(file.size)}</p>
                </div>
            </div>
            <div className='file-card-details'>
                <p className='subtitle-2 line-clamp-1'>{file.name}</p>
                <FormattedDatetime date={file.$createdAt} className='body-2 text-light-200'></FormattedDatetime>
                <div className='text-light-200 caption'>
                    By: {file.owner.fullname}

                </div>
            </div>
        </Link>
    )
}

export default Filecard