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
  TrendingUp,
} from 'lucide-react'

const Sidebar = () => {
  return (
    <div className='lg:fixed lg:top-[12vh] lg:bottom-0 lg:z-20 lg:flex lg:w-72 lg:flex-col bg-secondary m-2 rounded-2xl flex flex-col h-[calc(100vh-14vh)] dark:bg-secondary dark:text-gray-50'>
      {/* Scrollable Content Area */}
      <div className='flex-1 flex flex-col overflow-hidden p-3'>
        <div className='space-y-3 flex-1 overflow-y-auto'>
          <div className='flex items-center justify-between'>
            <h2 className='text-lg font-semibold'>Dashboard</h2>
          </div>

          {/* Community Stats */}
          <div className='bg-background rounded-lg p-4 space-y-3'>
            <h3 className='font-semibold text-sm flex items-center gap-2'>
              <TrendingUp className='w-4 h-4' />
              Community Stats
            </h3>
            <div className='space-y-2'>
              <div className='flex items-center justify-between text-xs'>
                <span className='text-muted-foreground'>Total Posts</span>
                <span className='font-bold text-primary'>0</span>
              </div>
              <div className='flex items-center justify-between text-xs'>
                <span className='text-muted-foreground'>Active Users</span>
                <span className='font-bold text-green-500'>0</span>
              </div>
              <div className='flex items-center justify-between text-xs'>
                <span className='text-muted-foreground'>Total Comments</span>
                <span className='font-bold text-blue-500'>0</span>
              </div>
            </div>
          </div>

          <div className='flex-1'>
            <ul className='space-y-1 text-sm'>
              <span className='font-semibold text-lg'>UniCollab++</span>
              {/* Home Section */}
              <li className='rounded-sm bg-primary/10'>
                <Link
                  to='/unicollab'
                  className='flex items-center p-2 space-x-3 rounded-md'
                >
                  <Home className='w-5 h-5 fill-current dark:text-gray-600' />
                  <span>Home</span>
                </Link>
              </li>

              {/* UniCollab++ Section */}
              <li className='rounded-sm'>
                <Link
                  to='/unicollab-plus'
                  className='flex items-center p-2 space-x-3 rounded-md hover:bg-muted/50'
                >
                  <Users className='w-5 h-5 fill-current dark:text-gray-600' />
                  <span>UniCollab++</span>
                </Link>
              </li>

              {/* Tags Section */}
              <li className='rounded-sm'>
                <Link
                  to='/tags'
                  className='flex items-center p-2 space-x-3 rounded-md hover:bg-muted/50'
                >
                  <Tag className='w-5 h-5 fill-current dark:text-gray-600' />
                  <span>Tags</span>
                </Link>
              </li>

              {/* UniCollab Help Section */}
              <li className='rounded-sm'>
                <Link
                  to='/help'
                  className='flex items-center p-2 space-x-3 rounded-md hover:bg-muted/50'
                >
                  <HelpCircle className='w-5 h-5 fill-current dark:text-gray-600' />
                  <span>UniCollab Help</span>
                </Link>
              </li>

              {/* Challenges Section */}
              <li className='rounded-sm'>
                <Link
                  to='/challenges'
                  className='flex items-center p-2 space-x-3 rounded-md hover:bg-muted/50'
                >
                  <Trophy className='w-5 h-5 fill-current dark:text-gray-600' />
                  <span>Challenges</span>
                </Link>
              </li>

              {/* UniCollab Blog Section */}
              <li className='rounded-sm'>
                <Link
                  to='/blog'
                  className='flex items-center p-2 space-x-3 rounded-md hover:bg-muted/50'
                >
                  <BookOpen className='w-5 h-5 fill-current dark:text-gray-600' />
                  <span>UniCollab Blog</span>
                </Link>
              </li>

              {/* Other Section */}
              <li className='rounded-sm'>
                <Link
                  to='/other'
                  className='flex items-center p-2 space-x-3 rounded-md hover:bg-muted/50'
                >
                  <Info className='w-5 h-5 fill-current dark:text-gray-600' />
                  <span>Other</span>
                </Link>
              </li>
            </ul>

            {/* About Section */}
            <div className='mt-6'>
              <h3 className='font-semibold text-lg'>About the Platform</h3>
              <ul className='space-y-1 text-sm'>
                <li className='rounded-sm'>
                  <Link
                    to='/about'
                    className='flex items-center p-2 space-x-3 rounded-md hover:bg-muted/50'
                  >
                    <Info className='w-4 h-4 fill-current dark:text-gray-600' />
                    <span>About</span>
                  </Link>
                </li>
                <li className='rounded-sm'>
                  <Link
                    to='/guides'
                    className='flex items-center p-2 space-x-3 rounded-md hover:bg-muted/50'
                  >
                    <BookMarked className='w-4 h-4 fill-current dark:text-gray-600' />
                    <span>Guides</span>
                  </Link>
                </li>
                <li className='rounded-sm'>
                  <Link
                    to='/code-of-conduct'
                    className='flex items-center p-2 space-x-3 rounded-md hover:bg-muted/50'
                  >
                    <Shield className='w-4 h-4 fill-current dark:text-gray-600' />
                    <span>Code Of Conduct</span>
                  </Link>
                </li>
                <li className='rounded-sm'>
                  <Link
                    to='/privacy'
                    className='flex items-center p-2 space-x-3 rounded-md hover:bg-muted/50'
                  >
                    <FileText className='w-4 h-4 fill-current dark:text-gray-600' />
                    <span>Privacy Policy</span>
                  </Link>
                </li>
                <li className='rounded-sm'>
                  <Link
                    to='/terms'
                    className='flex items-center p-2 space-x-3 rounded-md hover:bg-muted/50'
                  >
                    <FileText className='w-4 h-4 fill-current dark:text-gray-600' />
                    <span>Terms of Service</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Fixed Profile Section - Always at bottom */}
        <div className='flex-shrink-0 border-t border-gray-200 dark:border-gray-700 mt-auto pt-4'>
          <div className='flex items-center space-x-4'>
            <div className='w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold'>
              A
            </div>
            <div className='flex-1 min-w-0'>
              <h2 className='text-lg font-semibold truncate'>User Name</h2>
              <span className='flex items-center space-x-1'>
                <Link
                  to='/profile'
                  className='text-xs hover:underline dark:text-gray-600 truncate'
                >
                  View profile
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
