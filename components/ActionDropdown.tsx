'use client'
import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
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


const ActionDropdown = ({ file }: { file: Models.Document }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [action, setAction] = useState<ActionType | null>(null)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const renderDialogContent =  () => {

    return (

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
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