import { Models } from 'node-appwrite'
import React from 'react'
import Thumbnail from './Thumbnail'
import FormattedDatetime from './FormattedDatetime'
import { convertFileSize, formatDateTime } from '@/lib/utils'
import { Input } from './ui/input'
import { getuserByEmail } from '@/lib/actions/user.actions'

const ImageThumbnail = ({ file }: { file: Models.Document }) => (
    <div className="file-details-thumbnail">
        <Thumbnail type={file.type} extension={file.extension} url={file.url} />
        <div className="flex flex-col">
            <p className="subtitle-2 mb-1">{file.name}</p>
            <FormattedDatetime date={file.$createdAt} className="caption" />
        </div>
    </div>
);

const DetailRow = ({ label, value }: { label: string; value: string }) => (
    <div className="flex">
        <p className="file-details-label text-left">{label}</p>
        <p className="file-details-value text-left">{value}</p>
    </div>
);

export const FileDetails = ({ file }: { file: Models.Document }) => {
    return (
        <>
            <ImageThumbnail file={file} />
            <div className="space-y-4 px-2 pt-2">
                <DetailRow label="Format:" value={file.extension} />
                <DetailRow label="Size:" value={convertFileSize(file.size)} />
                <DetailRow label="Owner:" value={file.owner.fullname} />
                <DetailRow label="Last edit:" value={formatDateTime(file.$updatedAt)} />
            </div>
        </>
    );
};

export const ShareInput = ({ file }: { file: Models.Document }) => {
    return (
        <div>
            <ImageThumbnail file={file}></ImageThumbnail>
            <div className='share-wrapper'>

                <p className='subtitle-2 mt-2 p-2'>Share this file with other users: </p>
                <Input type='email' placeholder='Enter email address' className='share-input-field'></Input>
                <div className='flex justify-between p-2'>

                    <p className='subtitle-2 mt-2 '>Share with users</p>
                    <p className='text-brand-100 subtitle-2'>{file.users.length} users</p>
                </div>
                <div>
                    <ul>
                        {file.users.map(async (user: string) => {
                            const sharedUser = await getuserByEmail(user);
                            const username = sharedUser ? sharedUser.fullname : 'Unknown User';
                            return <li key={user}>
                                <p>{username}</p>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        </div>

    )
}

