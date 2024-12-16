import React from 'react'
import { Card, CardContent, CardHeader } from '../ui/Card.jsx'

const Comment = ({ comment }) => {
  return (
    <Card className='mb-2 bg-background/50'>
      <CardHeader className='py-2'>
        <div className='text-sm font-semibold'>{"comment.author"}</div>
        <div className='text-xs text-muted-foreground'>
          {"new Date(comment.createdAt).toLocaleDateString()"}
        </div>
      </CardHeader>
      <CardContent className='py-2'>
        <p className='text-sm'>{comment.content}</p>
      </CardContent>
    </Card>
  )
}

export default Comment
