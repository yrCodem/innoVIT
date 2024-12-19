import React, { useState, useEffect } from 'react';
import { Button } from '../ui/Button.jsx';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/Card.jsx';
import { Textarea } from '../ui/TextArea.jsx';
import { useAuth } from "../../utils/AuthContext.jsx";

const CreatePost = ({ onPostCreate }) => {
  const { login, currentUser, isAuthenticated } = useAuth();
  const [content, setContent] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from localStorage when the component loads
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(storedPosts);
  }, []);

  const savePostsToLocalStorage = (updatedPosts) => {
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim()) return;

    const newPost = {
      id: Date.now(),
      content,
      author: currentUser,
      authorId: currentUser?.id || 'anonymous',
      createdAt: new Date().toISOString(),
      likes: 0,
      comments: [],
    };

    const updatedPosts = [newPost, ...posts];
    setPosts(updatedPosts);
    savePostsToLocalStorage(updatedPosts);
    onPostCreate(newPost);
    setContent('');
  };

  return (
    <>
      <Card className="mb-4">
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <h3 className="text-lg font-semibold">Create a Post</h3>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="What's on your mind?"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="min-h-[100px]"
            />
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button type="submit" disabled={!content.trim()}>
              Post
            </Button>
          </CardFooter>
        </form>
      </Card>

      {/* Displaying fetched posts */}
      <div className="posts-list">
        {posts.map((post) => (
          <Card key={post.id} className="mb-4">
            <CardHeader>
              <h4 className="font-semibold">{post.author || 'Anonymous'}</h4>
              <p className="text-sm text-gray-500">{new Date(post.createdAt).toLocaleString()}</p>
            </CardHeader>
            <CardContent>
              <p>{post.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default CreatePost;
