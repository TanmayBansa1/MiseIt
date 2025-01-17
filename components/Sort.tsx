'use client'
import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { sortTypes } from '@/constants'
import { usePathname, useRouter } from 'next/navigation'

const Sort = () => {
  const router = useRouter();
  const path = usePathname();
  const handleChange = (value: string) => {
    router.push(`${path}?sort=${value}`);
  } 
  return (
    <Select onValueChange={handleChange}>
      <SelectTrigger className="sort-select">
        <SelectValue placeholder="Sort" />
      </SelectTrigger>
      <SelectContent className='sort-select-content'>
        {sortTypes.map((sortType)=>{
        return (
            <SelectItem className='shad-select-item' key={sortType.value} value={sortType.value}>
              {sortType.label}
            </SelectItem>
          )
        })}
      </SelectContent>
    </Select>

  )
}

export default Sort