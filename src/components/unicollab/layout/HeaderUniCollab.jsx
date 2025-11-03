'use client'

import { Search } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../../ui/Button.jsx'
import { Input } from '../../ui/Input.jsx'

export default function HeaderUniCollab() {
  return (
    <header className='sticky top-0 z-20 w-full backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex h-20 items-center justify-center '>
        <div className='flex items-center gap-4 md:gap-8'>
          <Link to='/' className='flex items-center space-x-2'>
            <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-inherit'>
              <span className='font-bold text-white'>UC</span>
            </div>
          </Link>
          <div className='hidden md:flex'>
            <div className='relative w-full'>
              <Search className='absolute left-2 top-2.5 h-4 w-4 text-muted-foreground text-textColor' />
              <Input
                placeholder='Search...'
                className='w-[500px] pl-9 text-black bg-secondary border-0'
              />
            </div>
          </div>
        </div>
        <div className='flex flex-1 items-center justify-end space-x-4'>
          {/* <nav className='flex items-center space-x-2'>
            <Button variant='ghost' asChild>
              <Link to='/login'>Log in</Link>
            </Button>
            <Button asChild>
              <Link to='/create-account'>Create account</Link>
            </Button>
          </nav> */}
        </div>
      </div>
    </header>
  )
}
