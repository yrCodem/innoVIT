import React, { useState } from 'react'
import { Card, CardContent, CardHeader } from '../ui/Card.jsx'
import { Button } from '../ui/Button.jsx'
import { ThumbsUp, ThumbsDown, Reply } from 'lucide-react'
import { Textarea } from '../ui/TextArea.jsx'

const Comment = ({ comment, onReply, depth = 0 }) => {
  const [isReplying, setIsReplying] = useState(false)
  const [replyText, setReplyText] = useState('')
  const [replies, setReplies] = useState(comment.replies || [])
  const [showReplies, setShowReplies] = useState(true)
  const [likes, setLikes] = useState(comment.likes || 0)
  const [userReaction, setUserReaction] = useState(null)

  const maxDepth = 4 // Maximum nesting depth to prevent infinite recursion

  const handleReplySubmit = (e) => {
    e.preventDefault()
    if (!replyText.trim()) return

    const newReply = {
      id: Date.now(),
      content: replyText,
      author: 'Current User', // This would come from auth context
      authorId: 'current-user',
      createdAt: new Date().toISOString(),
      likes: 0,
      replies: [],
      depth: depth + 1,
    }

    const updatedReplies = [...replies, newReply]
    setReplies(updatedReplies)

    if (onReply) {
      onReply(comment.id, newReply)
    }

    setReplyText('')
    setIsReplying(false)
  }

  const handleLike = () => {
    if (userReaction === 'like') {
      setLikes(likes - 1)
      setUserReaction(null)
    } else {
      if (userReaction === 'dislike') {
        // If switching from dislike to like
        setLikes(likes + 2)
      } else {
        setLikes(likes + 1)
      }
      setUserReaction('like')
    }
  }

  const handleDislike = () => {
    if (userReaction === 'dislike') {
      setUserReaction(null)
    } else {
      if (userReaction === 'like') {
        setLikes(likes - 1)
      }
      setUserReaction('dislike')
    }
  }

  const handleNestedReply = (commentId, newReply) => {
    const updatedReplies = replies.map(reply =>
      reply.id === commentId
        ? { ...reply, replies: [...reply.replies, newReply] }
        : reply
    )
    setReplies(updatedReplies)
  }

  return (
    <div className={`space-y-2 ${depth > 0 ? 'ml-6 border-l-2 border-border pl-4' : ''}`}>
      <Card className='bg-background/50'>
        <CardHeader className='py-3'>
          <div className="flex items-center justify-between">
            <div>
              <div className='text-sm font-semibold'>{comment.author}</div>
              <div className='text-xs text-muted-foreground'>
                {new Date(comment.createdAt).toLocaleDateString()} at{' '}
                {new Date(comment.createdAt).toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className='py-2'>
          <p className='text-sm mb-3'>{comment.content}</p>

          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-1">
              <Button
                variant={userReaction === 'like' ? 'default' : 'ghost'}
                size="sm"
                className="h-6 px-2"
                onClick={handleLike}
              >
                <ThumbsUp className="h-3 w-3" />
              </Button>
              <span className="min-w-4 text-center">{likes}</span>
              <Button
                variant={userReaction === 'dislike' ? 'default' : 'ghost'}
                size="sm"
                className="h-6 px-2"
                onClick={handleDislike}
              >
                <ThumbsDown className="h-3 w-3" />
              </Button>
            </div>

            {depth < maxDepth && (
              <Button
                variant="ghost"
                size="sm"
                className="h-6 px-2 gap-1"
                onClick={() => setIsReplying(!isReplying)}
              >
                <Reply className="h-3 w-3" />
                Reply
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {isReplying && depth < maxDepth && (
        <form onSubmit={handleReplySubmit} className="ml-4">
          <Textarea
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Write a reply..."
            className="min-h-[60px] text-sm mb-2"
          />
          <div className="flex gap-2 justify-end">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => setIsReplying(false)}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              size="sm"
              disabled={!replyText.trim()}
            >
              Reply
            </Button>
          </div>
        </form>
      )}

      {replies.length > 0 && (
        <div className="space-y-2">
          {replies.map((reply) => (
            <Comment
              key={reply.id}
              comment={reply}
              onReply={handleNestedReply}
              depth={depth + 1}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Comment


// <-----The code below works completely fine------>
// import React from 'react'
// import { Card, CardContent, CardHeader } from '../ui/Card.jsx'

// const Comment = ({ comment }) => {
//   return (
//     <Card className='mb-2 bg-background/50'>
//       <CardHeader className='py-2'>
//         <div className='text-sm font-semibold'>{"comment.author"}</div>
//         <div className='text-xs text-muted-foreground'>
//           {"new Date(comment.createdAt).toLocaleDateString()"}
//         </div>
//       </CardHeader>
//       <CardContent className='py-2'>
//         <p className='text-sm'>{comment.content}</p>
//       </CardContent>
//     </Card>
//   )
// }

// export default Comment
