import React from 'react'
import { Link } from 'react-router-dom'
import {
  Home,
  Users,
  Tag,
  HelpCircle,
  Trophy,
  BookOpen,
  Info,
  BookMarked,
  Shield,
  FileText,
  MessageSquare,
  TrendingUp
} from 'lucide-react'

const Sidebar = () => {
  return (
    <div className=' lg:fixed lg:top-[12vh] lg:bottom-0 lg:z-20 lg:flex lg:w-72 lg:flex-col bg-secondary m-2 rounded-2xl flex flex-col h-full p-3 w-60 dark:bg-secondary dark:text-gray-50'>
      <div className='space-y-3'>
        <div className='flex items-center justify-between'>
          <h2 className="text-lg font-semibold">Dashboard</h2>
        </div>

        {/* <div className='relative'>
          <span className='absolute inset-y-0 left-0 flex items-center py-4'>
            <button type='submit' className='p-2 focus:outline-none focus:ring'>
              <svg
                fill='currentColor'
                viewBox='0 0 512 512'
                className='w-5 h-5 dark:text-gray-600'
              >
                <path d='M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z'></path>
              </svg>
            </button>
          </span>
          <input
            type='search'
            name='Search'
            placeholder='Search...'
            className='w-full py-2 pl-10 text-sm dark:border- rounded-md focus:outline-none dark:bg-gray-100 dark:text-gray-800 focus:dark:bg-gray-50'
          />
        </div> */}

        {/* Community Stats */}
        <div className="bg-background rounded-lg p-4 space-y-3">
          <h3 className="font-semibold text-sm flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            Community Stats
          </h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Total Posts</span>
              <span className="font-bold text-primary">0</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Active Users</span>
              <span className="font-bold text-green-500">0</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Total Comments</span>
              <span className="font-bold text-blue-500">0</span>
            </div>
          </div>
        </div>

        <div className='flex-1'>
          <ul className='space-y-1 text-sm'>
            <span className='font-semibold text-lg '>UniCollab++ </span>
            {/* Home Section */}
            <li className='rounded-sm bg-primary/10'>
              <Link
                to='/unicollab'
                className='flex items-center p-2 space-x-3 rounded-md'
              >
                <Home className="w-5 h-5 fill-current dark:text-gray-600" />
                <span>Home</span>
              </Link>
            </li>

            {/* UniCollab++ Section */}
            <li className='rounded-sm'>
              <Link
                to='/unicollab-plus'
                className='flex items-center p-2 space-x-3 rounded-md hover:bg-muted/50'
              >
                <Users className="w-5 h-5 fill-current dark:text-gray-600" />
                <span>UniCollab++</span>
              </Link>
            </li>

            {/* Tags Section */}
            <li className='rounded-sm'>
              <Link
                to='/tags'
                className='flex items-center p-2 space-x-3 rounded-md hover:bg-muted/50'
              >
                <Tag className="w-5 h-5 fill-current dark:text-gray-600" />
                <span>Tags</span>
              </Link>
            </li>

            {/* UniCollab Help Section */}
            <li className='rounded-sm'>
              <Link
                to='/help'
                className='flex items-center p-2 space-x-3 rounded-md hover:bg-muted/50'
              >
                <HelpCircle className="w-5 h-5 fill-current dark:text-gray-600" />
                <span>UniCollab Help</span>
              </Link>
            </li>

            {/* Challenges Section */}
            <li className='rounded-sm'>
              <Link
                to='/challenges'
                className='flex items-center p-2 space-x-3 rounded-md hover:bg-muted/50'
              >
                <Trophy className="w-5 h-5 fill-current dark:text-gray-600" />
                <span>Challenges</span>
              </Link>
            </li>

            {/* UniCollab Blog Section */}
            <li className='rounded-sm'>
              <Link
                to='/blog'
                className='flex items-center p-2 space-x-3 rounded-md hover:bg-muted/50'
              >
                <BookOpen className="w-5 h-5 fill-current dark:text-gray-600" />
                <span>UniCollab Blog</span>
              </Link>
            </li>

            {/* Other Section */}
            <li className='rounded-sm'>
              <Link
                to='/other'
                className='flex items-center p-2 space-x-3 rounded-md hover:bg-muted/50'
              >
                <Info className="w-5 h-5 fill-current dark:text-gray-600" />
                <span>Other</span>
              </Link>
            </li>
          </ul>

          {/* About Section */}
          <div className="mt-6">
            <h3 className="font-semibold text-lg ">About</h3>
            <ul className='space-y-1 text-sm'>
              <li className='rounded-sm'>
                <Link
                  to='/about'
                  className='flex items-center p-2 space-x-3 rounded-md hover:bg-muted/50'
                >
                  <Info className="w-4 h-4 fill-current dark:text-gray-600" />
                  <span>About</span>
                </Link>
              </li>
              <li className='rounded-sm'>
                <Link
                  to='/guides'
                  className='flex items-center p-2 space-x-3 rounded-md hover:bg-muted/50'
                >
                  <BookMarked className="w-4 h-4 fill-current dark:text-gray-600" />
                  <span>Guides</span>
                </Link>
              </li>
              <li className='rounded-sm'>
                <Link
                  to='/code-of-conduct'
                  className='flex items-center p-2 space-x-3 rounded-md hover:bg-muted/50'
                >
                  <Shield className="w-4 h-4 fill-current dark:text-gray-600" />
                  <span>Code Of Conduct</span>
                </Link>
              </li>
              <li className='rounded-sm'>
                <Link
                  to='/privacy'
                  className='flex items-center p-2 space-x-3 rounded-md hover:bg-muted/50'
                >
                  <FileText className="w-4 h-4 fill-current dark:text-gray-600" />
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li className='rounded-sm'>
                <Link
                  to='/terms'
                  className='flex items-center p-2 space-x-3 rounded-md hover:bg-muted/50'
                >
                  <FileText className="w-4 h-4 fill-current dark:text-gray-600" />
                  <span>Terms of Service</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* User Profile Section */}
      <div className='flex items-center p-2 mt-12 space-x-4 justify-self-end border-t pt-4'>
        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold">
          A
        </div>
        <div>
          <h2 className='text-lg font-semibold'>User Name</h2>
          <span className='flex items-center space-x-1'>
            <Link
              to='/profile'
              className='text-xs hover:underline dark:text-gray-600'
            >
              View profile
            </Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
