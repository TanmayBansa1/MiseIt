'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { Input } from './ui/input'
import { useState } from 'react'
import { useDebounce } from 'use-debounce'
import { Models } from 'node-appwrite'
import { getFiles } from '@/lib/actions/file.actions'
import { useRouter } from 'next/navigation'
import Thumbnail from './Thumbnail'
const Search = () => {

    const [query, setQuery] = useState('');
    const [debouncedQuery] = useDebounce(query, 800);
    const [isOpen, setIsOpen] = useState(false);
    const [results, setResults] = useState<Models.Document[]>([]);
    const router = useRouter();
    useEffect(()=>{
        const fetchFiles = async ()=>{
            console.log(debouncedQuery);
            if(debouncedQuery.length === 0){
                setIsOpen(false);
                setResults([]);
                return router.push('/');
            }
            const files = await getFiles({types: [], searchText: debouncedQuery});
            setIsOpen(true);
            setResults(files);
            console.log(files);
        }
        fetchFiles();
    }, [debouncedQuery])
    const handleClick = (e: React.MouseEvent<HTMLLIElement>, file: Models.Document) => {
        setIsOpen(false);
        setResults([]);
        router.push(file.url);
    }
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, file: Models.Document) => {
        // e.preventDefault();
        setIsOpen(false);
        setResults([]);
        if(e.key === 'Enter' && results.length > 0){
            router.push(
                `/${file.type === "video" || file.type === "audio" ? "media" : file.type + "s"}?query=${query}`,
              );
        }
    }
  return (
    <div className='search'>
        <div className='search-input-wrapper'>
            <Image
                src='/assets/icons/search.svg'
                alt='search'
                width={24}
                height={24}
                className='search-icon'
            ></Image>
            <Input onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => handleKeyDown(e, results[0])} type='text' value={query} placeholder='Search...' className='search-input' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}></Input>

        </div>
        {isOpen && (
            <div >
                {results.length > 0 ? (
                    <ul className='search-result' >
                        {results.map((file: Models.Document) => (
                            <li onClick={(e: React.MouseEvent<HTMLLIElement>) => handleClick(e, file)} key={file.$id} className='flex items-center gap-6 ml-6 cursor-pointer'>
                                <Thumbnail type={file.type} extension={file.extension} url={file.url} className='!size-11'></Thumbnail>
                                <p className='subtitle-2 line-clamp-1'>{file.name}</p>
                            </li>
                        ))}

                    </ul>
                ) : (
                    <p className='empty-result'>No results found</p>
                )}
            </div>

        )}
    </div>
  )
}

export default Search