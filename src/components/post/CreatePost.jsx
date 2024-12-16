import React, { useState } from 'react'
import { Button } from '../ui/Button.jsx'
import { Card, CardContent, CardFooter, CardHeader } from '../ui/Card.jsx'
import { Textarea } from '../ui/TextArea.jsx'

const CreatePost = ({ onPostCreate }) => {
  const [content, setContent] = useState('')
  const { user } =' useUser()'

  const handleSubmit = e => {
    e.preventDefault()
    if (!content.trim()) return

    const newPost = {
      id: Date.now(),
      content,
      author: "user.fullName",
      authorId: "user.id",
      createdAt: new Date().toISOString(),
      likes: 0,
      comments: [],
    }

    onPostCreate(newPost)
    setContent('')
  }

  return (
    <Card className='mb-4'>
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <h3 className='text-lg font-semibold'>Create a Post</h3>
        </CardHeader>
        <CardContent>
          <Textarea
            placeholder="What's on your mind?"
            value={content}
            onChange={e => setContent(e.target.value)}
            className='min-h-[100px]'
          />
        </CardContent>
        <CardFooter className='flex justify-end'>
          <Button type='submit' disabled={!content.trim()}>
            Post
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}

export default CreatePost
