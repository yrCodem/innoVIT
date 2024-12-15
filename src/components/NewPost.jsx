import MDEditor from '@uiw/react-md-editor'
import { useState } from 'react'
import { ImagePlus } from 'lucide-react'

export default function NewPost() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [tags, setTags] = useState('')
  const [coverImage, setCoverImage] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    // Handle post submission
    console.log({
      title,
      content,
      tags: tags.split(',').map(tag => tag.trim()),
      coverImage,
    })
  }

  return (
    <div className='max-w-4xl mx-auto bg-white rounded-lg shadow p-6'>
      <h1 className='text-2xl font-bold text-gray-900 mb-6'>Create New Post</h1>

      <form onSubmit={handleSubmit} className='space-y-6'>
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-2'>
            Cover Image
          </label>
          <div className='mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg'>
            <div className='space-y-1 text-center'>
              <ImagePlus className='mx-auto h-12 w-12 text-gray-400' />
              <div className='flex text-sm text-gray-600'>
                <label className='relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500'>
                  <span>Upload a file</span>
                  <input
                    type='file'
                    className='sr-only'
                    onChange={e => {
                      // Handle file upload
                      console.log(e.target.files[0])
                    }}
                  />
                </label>
                <p className='pl-1'>or drag and drop</p>
              </div>
              <p className='text-xs text-gray-500'>PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 mb-2'>
            Title
          </label>
          <input
            type='text'
            value={title}
            onChange={e => setTitle(e.target.value)}
            className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
            placeholder='Enter your post title...'
          />
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 mb-2'>
            Content
          </label>
          <MDEditor
            value={content}
            onChange={setContent}
            preview='edit'
            height={400}
          />
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 mb-2'>
            Tags
          </label>
          <input
            type='text'
            value={tags}
            onChange={e => setTags(e.target.value)}
            className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
            placeholder='Enter tags separated by commas...'
          />
        </div>

        <div className='flex justify-end space-x-4'>
          <button
            type='button'
            className='px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50'
          >
            Save Draft
          </button>
          <button
            type='submit'
            className='px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700'
          >
            Publish Post
          </button>
        </div>
      </form>
    </div>
  )
}
