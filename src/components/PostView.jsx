import { Heart, MessageSquare, Bookmark, Share2 } from 'lucide-react'
import { useParams } from 'react-router-dom'
import MDEditor from '@uiw/react-md-editor'

const samplePost = {
  id: 1,
  title: 'Understanding React Server Components',
  content: `# Understanding React Server Components

React Server Components represent a paradigm shift in how we build React applications. They allow us to render components on the server while maintaining the interactivity and dynamism that React is known for.

## Key Benefits

1. Improved Performance
2. Reduced Bundle Size
3. Better SEO
4. Enhanced Security

## How to Get Started

First, ensure you're using the latest version of React...`,
  author: {
    name: 'Sarah Chen',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: 'Computer Science Professor | React Enthusiast',
  },
  publishedAt: 'Mar 16, 2024',
  coverImage:
    'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
  likes: 124,
  comments: 18,
  tags: ['React', 'JavaScript', 'WebDev'],
}

export default function PostView() {
  const { id } = useParams()

  // In a real app, fetch post data based on id
  console.log('Post ID:', id)

  return (
    <article className='bg-white rounded-lg shadow'>
      <img
        className='w-full h-64 object-cover rounded-t-lg'
        src={samplePost.coverImage}
        alt={samplePost.title}
      />

      <div className='p-6'>
        <div className='flex items-center mb-6'>
          <img
            className='h-12 w-12 rounded-full'
            src={samplePost.author.avatar}
            alt={samplePost.author.name}
          />
          <div className='ml-3'>
            <p className='text-lg font-medium text-gray-900'>
              {samplePost.author.name}
            </p>
            <p className='text-sm text-gray-500'>{samplePost.author.bio}</p>
            <p className='text-sm text-gray-500'>{samplePost.publishedAt}</p>
          </div>
        </div>

        <h1 className='text-3xl font-bold text-gray-900 mb-4'>
          {samplePost.title}
        </h1>

        <div className='flex items-center space-x-6 mb-6'>
          <button className='flex items-center text-gray-500 hover:text-red-500'>
            <Heart className='h-6 w-6 mr-2' />
            <span>{samplePost.likes}</span>
          </button>
          <button className='flex items-center text-gray-500 hover:text-gray-700'>
            <MessageSquare className='h-6 w-6 mr-2' />
            <span>{samplePost.comments}</span>
          </button>
          <button className='flex items-center text-gray-500 hover:text-indigo-600'>
            <Bookmark className='h-6 w-6 mr-2' />
            <span>Save</span>
          </button>
          <button className='flex items-center text-gray-500 hover:text-gray-700'>
            <Share2 className='h-6 w-6 mr-2' />
            <span>Share</span>
          </button>
        </div>

        <div className='prose max-w-none'>
          <MDEditor.Markdown source={samplePost.content} />
        </div>

        <div className='mt-6 flex flex-wrap gap-2'>
          {samplePost.tags.map(tag => (
            <span
              key={tag}
              className='px-3 py-1 bg-gray-100 text-sm text-gray-600 rounded-full'
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
