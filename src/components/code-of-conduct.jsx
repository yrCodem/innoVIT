import { Search, Bell, User } from 'lucide-react'
import Link from 'next/link'

export default function CodeOfConduct() {
  return (
    <div className='min-h-screen bg-black text-white'>
      {/* Navigation Bar
      <header className='border-b border-zinc-800 px-4 py-2 flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <Link
            href='/'
            className='font-bold text-white bg-black border border-white px-2 py-1 rounded'
          >
            DEV
          </Link>
        </div>

        <div className='relative flex-1 max-w-xl mx-4'>
          <div className='relative'>
            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zinc-400' />
            <input
              type='text'
              placeholder='Search...'
              className='w-full bg-zinc-900 border border-zinc-700 rounded-md py-2 pl-10 pr-4 text-sm'
            />
          </div>
          <div className='absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-zinc-500'>
            Powered by Algolia
          </div>
        </div>

        <div className='flex items-center gap-3'>
          <button className='bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 rounded-md text-sm font-medium'>
            Create Post
          </button>
          <button className='relative p-1.5 rounded-md hover:bg-zinc-800'>
            <Bell className='h-5 w-5' />
            <span className='absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs flex items-center justify-center'>
              1
            </span>
          </button>
          <button className='p-0.5 rounded-full border border-zinc-700'>
            <div className='h-7 w-7 rounded-full bg-zinc-300 flex items-center justify-center overflow-hidden'>
              <User className='h-5 w-5 text-zinc-700' />
            </div>
          </button>
        </div>
      </header> */}

      {/* Main Content */}
      <main className='flex justify-center py-8 px-4'>
        <div className='max-w-3xl w-full bg-zinc-900 rounded-lg p-8'>
          <h1 className='text-3xl font-bold mb-2'>Code of Conduct</h1>
          <p className='text-zinc-400 mb-6'>Last updated July 31, 2023</p>

          <div className='space-y-6 text-zinc-300'>
            <p>
              All participants of DEV Community are expected to abide by our
              Code of Conduct and{' '}
              <Link href='#' className='text-blue-400 hover:underline'>
                Terms of Service
              </Link>
              , both online and during in-person events that are hosted and/or
              associated with DEV Community.
            </p>

            <div>
              <h2 className='text-2xl font-bold mb-2'>Our Pledge</h2>
              <p>
                In the interest of fostering an open and welcoming environment,
                we as moderators of{' '}
                <Link href='#' className='text-blue-400 hover:underline'>
                  DEV Community
                </Link>{' '}
                pledge to make participation in our project and our community a
                harassment-free experience for everyone, regardless of age, body
                size, disability, ethnicity, gender identity and expression,
                level of experience, nationality, personal appearance, race,
                religion, or sexual identity and orientation.
              </p>
            </div>

            <div>
              <h2 className='text-2xl font-bold mb-2'>Our Standards</h2>
              <p className='mb-2'>
                Examples of behavior that contributes to creating a positive
                environment include:
              </p>
              <ul className='list-disc pl-8 space-y-1'>
                <li>Using welcoming and inclusive language</li>
                <li>
                  Being respectful of differing viewpoints and experiences
                </li>
                <li>
                  Referring to people by their pronouns and using gender-neutral
                  pronouns when uncertain
                </li>
                <li>Gracefully accepting constructive criticism</li>
                <li>Focusing on what is best for the community</li>
                <li>Showing empathy towards other community members</li>
                <li>
                  Citing sources if used to create content (for guidance see{' '}
                  <Link href='#' className='text-blue-400 hover:underline'>
                    DEV Community: How to Avoid Plagiarism
                  </Link>
                  )
                </li>
                <li>
                  Following our{' '}
                  <Link href='#' className='text-blue-400 hover:underline'>
                    AI Guidelines
                  </Link>{' '}
                  and disclosing AI assistance if used to create content
                </li>
              </ul>
            </div>

            <div>
              <p className='mb-2'>
                Examples of unacceptable behavior by participants include:
              </p>
              <ul className='list-disc pl-8 space-y-1'>
                <li>
                  The use of sexualized language or imagery and unwelcome sexual
                  attention or advances
                </li>
                <li>
                  The use of hate speech or communication that is racist,
                  homophobic, transphobic, ableist, sexist, or otherwise
                  prejudiced/discriminatory (i.e. misusing or disrespecting
                  pronouns)
                </li>
                <li>
                  Trolling, insulting/derogatory comments, and personal or
                  political attacks
                </li>
                <li>Public or private harassment</li>
                <li>
                  Publishing others' private information, such as a physical or
                  electronic address, without explicit permission
                </li>
                <li>Plagiarizing content or misappropriating works</li>
                <li>
                  Other conduct which could reasonably be considered
                  inappropriate in a professional setting
                </li>
                <li>Dismissing or attacking inclusion-oriented requests</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
