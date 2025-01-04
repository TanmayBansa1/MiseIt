'use client'
import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { Button } from './ui/button'
import { cn, convertFileToUrl, getFileType } from '@/lib/utils'
import Image from 'next/image'
import { useState } from 'react'
import Thumbnail from './Thumbnail'
import { MAX_FILE_SIZE } from '@/constants'
import { useToast } from '@/hooks/use-toast'
import { uploadFile } from '@/lib/actions/file.actions'
import { usePathname } from 'next/navigation'


const FileUploader = ({ className, ownerId, accountId }: { className?: string, ownerId: string, accountId: string }) => {

    const [files, setFiles] = useState<File[]>([])
    const {toast} = useToast()
    const path = usePathname();
    // console.log(accountId, ownerId);
    const onDrop = useCallback(async (acceptedFiles: File[]) => {
        // Do something with the files
        setFiles(acceptedFiles);
        const uploadPromises = acceptedFiles.map(async (file)=>{
            if(file.size > MAX_FILE_SIZE){
                setFiles((files)=>files.filter((f) => f.name !== file.name));
                
                return toast({
                    title: "File size too large",
                    description: `File size should be less than ${MAX_FILE_SIZE / 1024 / 1024} MB`,
                    variant: "destructive"
                });
            }
            
            const uploadedFile = await uploadFile({file, ownerId, accountId, path});
            if(uploadedFile){
                setFiles((files)=>files.filter((f) => f.name !== file.name));
            }
        })

        await Promise.all(uploadPromises);
    }, [ownerId, accountId, path])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    const handleRemoveFile = (e: React.MouseEvent<HTMLImageElement, MouseEvent>, fileName: string) => {
        e.stopPropagation();
        setFiles(files.filter(file => file.name !== fileName));
    }
    return (
        <div {...getRootProps()} className='cursor-pointer'>
            <input {...getInputProps()} />
            <Button className={cn('uploader-button', className)}>
                <Image src='/assets/icons/upload.svg' alt='upload' width={24} height={24} className='h-auto'></Image> Upload</Button>
            <div>
               { files.length > 0 && (                   
                   <ul className='uploader-preview-list'>
                    {files.map((file, index) => {
                        const { type, extension } = getFileType(file.name);
                        return (
                            <li key={`${file.name}-${index}`} className='uploader-preview-item'>
                                <div className='flex items-center gap-3'>
                                    <Thumbnail type={type} extension={extension} url={convertFileToUrl(file)} />
                                    <div className='preview-item-name'>
                                        {file.name}
                                        <Image src='/assets/icons/file-loader.gif'
                                            alt='loader'
                                            width={80}
                                            height={24}
                                            ></Image>

                                    </div>
                                </div>
                                <Image src='/assets/icons/remove.svg' width={24} height={24} alt='remove' onClick={(e)=>handleRemoveFile(e,file.name)}></Image>
                            </li>
                        )
                    })}
                </ul>
                )
            }
            </div>
        </div>
    )
}

export default FileUploader
