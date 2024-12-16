import React from 'react'
import { Link } from 'react-router-dom'
import {
  Home,
  Plus,
  Tag,
  HelpCircle,
  Trophy,
  Newspaper,
  Info,
  BookOpen,
  Book,
  Shield,
} from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/UniCollab', icon: Home },
  { name: 'UniCollab++', href: '/plus', icon: Plus },
  { name: 'Tags', href: '/tags', icon: Tag },
  { name: 'UniCollab Help', href: '/help', icon: HelpCircle },
  { name: 'Challenges', href: '/challenges', icon: Trophy },
  { name: 'UniCollab Blog', href: '/blog', icon: Newspaper },
]

const secondaryNav = [
  { name: 'About', href: '/about', icon: Info },
  { name: 'Guides', href: '/guides', icon: BookOpen },
  { name: 'Code Of Conduct', href: '/code-of-conduct', icon: Book },
  { name: 'Privacy Policy', href: '/privacy', icon: Shield },
  { name: 'Terms of Service', href: '/terms', icon: Shield },
]

const Sidebar = () => {
  return (
    <div className='hidden lg:fixed lg:top-[12vh] lg:bottom-0 lg:z-20 lg:flex lg:w-72 lg:flex-col bg-secondary m-2 rounded-2xl'>
      <div className='flex grow flex-col gap-y-5 overflow-y-auto bg-background px-2'>
        <nav className='flex flex-1 flex-col pt-4 '>
          <ul role='list' className='flex flex-1 flex-col gap-y-7'>
            <li>
              <ul role='list' className='-mx-2 space-y-1'>
                {navigation.map(item => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className='flex gap-x-3 rounded-md p-2 text-sm leading-6 text-muted-foreground hover:bg-gray-800 '
                    >
                      <item.icon className='h-5 w-5 shrink-0' />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <div className='text-xs font-semibold leading-6 text-muted-foreground'>
                Other
              </div>
              <ul role='list' className='-mx-2 mt-2 space-y-1'>
                {secondaryNav.map(item => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className='flex gap-x-3 rounded-md p-2 text-sm leading-6 text-muted-foreground hover:bg-gray-800'
                    >
                      <item.icon className='h-5 w-5 shrink-0' />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Sidebar
