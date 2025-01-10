'use client'
import React, { ChangeEvent, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from 'next/image'
import { Models } from 'node-appwrite'
import { actionsDropdownItems } from '@/constants'
import { ActionType } from '@/types'
import Link from 'next/link'
import { constructDownloadUrl } from '@/lib/utils'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { renameFile, shareFile } from '@/lib/actions/file.actions'
import { usePathname } from 'next/navigation'
import { FileDetails, ShareInput } from './ActionsModalContent'


const ActionDropdown = ({ file }: { file: Models.Document }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [action, setAction] = useState<ActionType | null>(null)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [name, setName] = useState(file.name)
  const [isLoading, setIsLoading] = useState(false)
  const [emails, setEmails] = useState<string[]>([])
  const path = usePathname();
  const closeAllModals = ()=>{
    setIsOpen(false)
    setIsDropdownOpen(false)
    setName(file.name)
    setAction(null)
  }

  const handleAction = async (action: ActionType) => {
    if(!action) return null;
    setIsLoading(true)
    let success = false;
    const actions = {
      rename: async ()=>{
        try {
          await renameFile({fileId: file.$id, name, extension: file.extension, path});
          return true;
        } catch (error) {
          console.error('Error renaming file:', error);
          return false;
        }
      },
      share: async ()=>{
        try {
          await shareFile({fileId: file.$id, emails, path});
          return true;
        } catch (error) {
          console.error('Error sharing file:', error);
          return false;
        }
      },
      delete: async ()=>{
        try {
          // TODO: Implement delete functionality
          return true;
        } catch (error) {
          console.error('Error deleting file:', error);
          return false;
        }
      },
    }
    success = await actions[action.value as keyof typeof actions]();
    if(success){
      closeAllModals()
    }
    setIsLoading(false)
  }
  const renderDialogContent =  () => {
    if(!action) return null;
    const {value, label} = action
    return (

        <DialogContent className='shad-dialog-button'>
          <DialogHeader className='flex flex-col gap-3'>
            <DialogTitle className='text-center text-light-100'>{label}</DialogTitle>
            {value === 'rename' && <Input value={name} onChange={(e: ChangeEvent<HTMLInputElement>)=>{
              setName(e.target.value)
            }}></Input>
            }
            {value === 'share' && <ShareInput file={file}></ShareInput>}
            {value === 'details' && <FileDetails file={file}></FileDetails> }  
          </DialogHeader>
          {['rename','share','delete'].includes(value) && (
            <DialogFooter className='flex flex-col gap-3 md:flex-row'>
              <Button onClick={closeAllModals} className='modal-cancel-button'>
                Cancel
              </Button>
              <Button onClick={() => handleAction(action)} className='modal-submit-button'>
                <p className='capitalize'>{label}</p>
                {isLoading && (
                  <Image src='/assets/icons/loader.svg' alt='loading' width={24} height={24} className='animate-spin'></Image>
                )}
              </Button>

            </DialogFooter>
          )}
        </DialogContent>

    )

  }
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
        <DropdownMenuTrigger className='shad-no-focus'>
          <Image src='/assets/icons/dots.svg' alt='Menu' width={20} height={15} className='h-auto'></Image>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel className='max-w-[200px] truncate'>{file.name}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {actionsDropdownItems.map((actionitem) => (
            <DropdownMenuItem onClick={() => {
              setAction(actionitem)
              if (['rename', 'delete', 'share', 'details'].includes(actionitem.value)) {
                setIsOpen(true)
              }
            }} className='shad-dropdown-item' key={actionitem.value}>
              {actionitem.value === 'download' ? (<Link href={constructDownloadUrl(file.bucketFileId)} download={file.name} className='flex items-center gap-2'>
                <Image src={actionitem.icon} alt={actionitem.label} width={30} height={30}></Image>
                <span>{actionitem.label}</span>
              </Link>) : (
                <div className='flex items-center gap-2'>
                  <Image src={actionitem.icon} alt={actionitem.label} width={30} height={30}></Image>
                  <span>{actionitem.label}</span>
                </div>
              )}
            </DropdownMenuItem>
          ))}

        </DropdownMenuContent>
      </DropdownMenu>

      {renderDialogContent()}
    </Dialog>

  )
}

export default ActionDropdown