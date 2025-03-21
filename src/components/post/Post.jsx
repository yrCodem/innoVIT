import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardFooter, CardHeader } from '../ui/Card.jsx'
import { Button } from '../ui/Button.jsx'
import { ThumbsUp, ThumbsDown, MessageCircle, Send } from 'lucide-react'
import { Textarea } from '../ui/TextArea.jsx'
import Comment from './Comment.jsx'

const Post = ({ post, onLike, onDislike, onComment }) => {
  const [isCommenting, setIsCommenting] = useState(false)
  const [commentText, setCommentText] = useState('')
  const [comments, setComments] = useState([])
  const { user } = 'useUser()'

  useEffect(() => {
    // Load comments for this post from localStorage
    const storedComments =
      JSON.parse(localStorage.getItem(`comments_${post.id}`)) || []
    setComments(storedComments)
  }, [post.id])

  const saveCommentsToLocalStorage = updatedComments => {
    localStorage.setItem(`comments_${post.id}`, JSON.stringify(updatedComments))
  }

  const handleCommentSubmit = e => {
    e.preventDefault()
    if (!commentText.trim()) return

    const newComment = {
      id: Date.now(),
      content: commentText,
      author: user?.fullName || 'Anonymous',
      authorId: user?.id || 'unknown',
      createdAt: new Date().toISOString(),
    }

    const updatedComments = [...comments, newComment]
    setComments(updatedComments)
    // saveCommentsToLocalStorage(updatedComments);

    // Pass the comment to the parent component if needed
    onComment(post.id, newComment)

    setCommentText('')
    setIsCommenting(false)
  }

  return (
    <Card className='mb-4'>
      <CardHeader className='flex flex-row items-center gap-4'>
        <div>
          <h3 className='font-semibold'>{post.author}</h3>
          <p className='text-sm text-muted-foreground'>
            {new Date(post.createdAt).toLocaleDateString()}
          </p>
        </div>
      </CardHeader>
      <CardContent>
        <p className='whitespace-pre-wrap'>{post.content}</p>
      </CardContent>
      <CardFooter className='flex flex-col gap-4'>
        <div className='flex gap-4 w-full'>
          <Button
            variant='ghost'
            size='sm'
            className='gap-2'
            onClick={() => onLike(post.id)}
          >
            <ThumbsUp className='h-4 w-4' />
            {post.likes}
          </Button>
          <Button
            variant='ghost'
            size='sm'
            className='gap-2'
            onClick={() => onDislike(post.id)}
          >
            <ThumbsDown className='h-4 w-4' />
            {post.dislikes}
          </Button>
          <Button
            variant='ghost'
            size='sm'
            className='gap-2'
            onClick={() => setIsCommenting(!isCommenting)}
          >
            <MessageCircle className='h-4 w-4' />
            {comments.length}
          </Button>
        </div>

        {isCommenting && (
          <form onSubmit={handleCommentSubmit} className='w-full'>
            <div className='flex gap-2'>
              <Textarea
                value={commentText}
                onChange={e => setCommentText(e.target.value)}
                placeholder='Write a comment...'
                className='min-h-[60px]'
              />
              <Button
                type='submit'
                size='sm'
                className='self-end'
                disabled={!commentText.trim()}
              >
                <Send className='h-4 w-4' />
              </Button>
            </div>
          </form>
        )}

        {comments.length > 0 && (
          <div className='w-full space-y-2'>
            {comments.map(comment => (
              <Comment key={comment.id} comment={comment} />
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  )
}

export default Post
