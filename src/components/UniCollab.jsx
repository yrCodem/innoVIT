import { SignedIn, SignedOut } from '@clerk/clerk-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from './layout/Layout.jsx'
import { Button } from './ui/Button.jsx'
import { Card, CardContent, CardFooter, CardHeader } from './ui/Card.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/Tabs.jsx'
import HeaderUniCollab from './layout/HeaderUniCollab.jsx'
import CreatePost from './post/CreatePost.jsx'
import Post from './post/Post.jsx'

const UniCollab = () => {
  const [posts, setPosts] = useState([])

  const handleCreatePost = newPost => {
    setPosts(prevPosts => [
      {
        ...newPost,
        likes: 0,
        dislikes: 0,
        comments: [],
      },
      ...prevPosts,
    ])
  }

  const handleLike = postId => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post,
      ),
    )
  }

  const handleDislike = postId => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId
          ? { ...post, dislikes: (post.dislikes || 0) + 1 }
          : post,
      ),
    )
  }

  const handleComment = (postId, newComment) => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId
          ? { ...post, comments: [newComment, ...post.comments] }
          : post,
      ),
    )
  }

  return (
    <div className='max-w-[100vw] font-sora relative top-[13vh]'>
      <SignedIn>
        <Layout>
          <HeaderUniCollab />
          <div className='space-y-4'>
            <Tabs defaultValue='relevant' className='w-full'>
              <TabsList>
                <TabsTrigger value='relevant'>Relevant</TabsTrigger>
                <TabsTrigger value='latest'>Latest</TabsTrigger>
                <TabsTrigger value='top'>Top</TabsTrigger>
              </TabsList>
              <TabsContent value='relevant' className='space-y-4'>
                <Card>
                  <CardHeader className='flex flex-row items-center gap-4'>
                    <div>
                      <h2 className='text-xl font-semibold'>
                        Welcome to UniCollab Community
                      </h2>
                      <p className='text-sm text-muted-foreground'>
                        UniCollab Community is a community where people help
                        each other.
                      </p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className='text-muted-foreground'>
                      We&apos;re a place where students share, stay up-to-date
                      and grow their careers.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant='outline' size='sm'>
                      Read more
                    </Button>
                  </CardFooter>
                </Card>

                <CreatePost onPostCreate={handleCreatePost} />

                <div className='space-y-4'>
                  {posts.map(post => (
                    <Post
                      key={post.id}
                      post={post}
                      onLike={handleLike}
                      onDislike={handleDislike}
                      onComment={handleComment}
                    />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value='latest' className='space-y-4'>
                <div className='space-y-4'>
                  {[...posts]
                    .sort(
                      (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
                    )
                    .map(post => (
                      <Post
                        key={post.id}
                        post={post}
                        onLike={handleLike}
                        onDislike={handleDislike}
                        onComment={handleComment}
                      />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value='top' className='space-y-4'>
                <div className='space-y-4'>
                  {[...posts]
                    .sort((a, b) => b.likes - a.likes)
                    .map(post => (
                      <Post
                        key={post.id}
                        post={post}
                        onLike={handleLike}
                        onDislike={handleDislike}
                        onComment={handleComment}
                      />
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </Layout>
      </SignedIn>

      <SignedOut>
        <div className='flex h-[86vh] min-h-[86vh] max-h-[86vh] w-full justify-center items-center flex-col'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            height='100px'
            viewBox='0 -960 960 960'
            width='100px'
            fill='#F0ECE5'
          >
            <path d='M479.91-120q-28.91 0-49.41-20.59-20.5-20.59-20.5-49.5t20.59-49.41q20.59-20.5 49.5-20.5t49.41 20.59q20.5 20.59 20.5 49.5t-20.59 49.41q-20.59 20.5-49.5 20.5ZM410-360v-480h140v480H410Z' />
          </svg>

          <h3 className='w-[50%] text-[2rem] font-semibold tracking-wide mb-4 text-center'>
            <span className='font-black text-tertiary'> Oops! </span> Looks like
            you're not signed in. Please sign up or log in to access this
            feature!{' '}
          </h3>
          <Link to={'/sign-in'}>
            <div className='font-sora text-xl bg-textColor text-primary font-black p-4 pl-8 pr-8 rounded-full'>
              Sign in
            </div>
          </Link>
        </div>
      </SignedOut>
    </div>
  )
}

export default UniCollab
