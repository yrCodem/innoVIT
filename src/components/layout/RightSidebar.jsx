import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card.jsx'
import { motion } from 'framer-motion'

export default function RightSidebar() {
  return (
    <div className='hidden xl:fixed xl:top-28 xl:right-0 xl:bottom-0 xl:z-50 xl:flex xl:w-80 xl:flex-col'>
      <div className='flex grow flex-col gap-y-5 overflow-y-auto bg-inherit px-6 py-4'>
        <motion.div
          className='space-y-4'
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className='flex items-center gap-2 text-base'>
                What&apos;s happening this week
              </CardTitle>
            </CardHeader>
            <CardContent className='grid gap-4'>
              <div className='grid gap-1'>
                <h3 className='font-semibold'>Challenges</h3>
                <div className='text-sm text-muted-foreground'>
                  <Link to='/challenges' className='hover:text-white'>
                    AI Innovation Hackathon
                  </Link>
                  <p className='text-xs'>Submissions Due December 20.</p>
                </div>
              </div>
              <div className='grid gap-1'>
                <h3 className='font-semibold'>
                  Important University Update...
                </h3>
                <div className='space-y-2 text-sm text-muted-foreground'>
                  <p className='block hover:text-white'>
                    CIRCULAR: The festival of Rangpanchami is celebrated locally
                    on 19th March 2025 (Wednesday). Looking at the festivities
                    the academic activities in the University will be confined
                    to online mode on 19th March 2025. All the faculty and
                    students have to undertake online mode strictly.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
