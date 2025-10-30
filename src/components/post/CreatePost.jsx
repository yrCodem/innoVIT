import React, { useState } from 'react';
import { Button } from '../ui/Button.jsx';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/Card.jsx';
import { Textarea } from '../ui/TextArea.jsx';
import { ImageIcon, X } from 'lucide-react';
import { useAuth } from "../../utils/AuthContext.jsx";

const CreatePost = ({ onPostCreate }) => {
  const { currentUser } = useAuth();
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check if file is an image
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file');
        return;
      }

      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size should be less than 5MB');
        return;
      }

      setImage(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImage(null);
    setImagePreview(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content.trim() && !image) return;

    setIsSubmitting(true);

    try {
      const newPost = {
        id: Date.now(),
        content: content.trim(),
        author: currentUser?.fullName || currentUser?.username || 'Anonymous',
        authorId: currentUser?.id || 'anonymous',
        createdAt: new Date().toISOString(),
        likes: 0,
        dislikes: 0,
        comments: [],
        userReaction: null,
        image: imagePreview, // Store base64 image data
      };

      onPostCreate(newPost);
      setContent('');
      setImage(null);
      setImagePreview(null);

      // Reset file input
      const fileInput = document.getElementById('image-upload');
      if (fileInput) fileInput.value = '';

    } catch (error) {
      console.error('Error creating post:', error);
      alert('Error creating post. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="mb-6">
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <h3 className="text-lg font-semibold">Create a Post</h3>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            placeholder="What's on your mind? Share your thoughts, questions, or projects..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="min-h-[120px] resize-none"
          />

          {imagePreview && (
            <div className="relative rounded-lg border p-2">
              <Button
                type="button"
                variant="destructive"
                size="sm"
                className="absolute top-2 right-2 h-6 w-6 p-0"
                onClick={removeImage}
              >
                <X className="h-3 w-3" />
              </Button>
              <img
                src={imagePreview}
                alt="Preview"
                className="w-full h-auto max-h-60 object-contain rounded"
              />
            </div>
          )}

          <div className="flex items-center justify-between">
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => document.getElementById('image-upload').click()}
              className="gap-2"
            >
              <ImageIcon className="h-4 w-4" />
              Add Image
            </Button>

            <div className="text-sm text-muted-foreground">
              {content.length}/5000
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-2">
          <Button
            type="button"
            variant="outline"
            onClick={() => {
              setContent('');
              removeImage();
            }}
            disabled={isSubmitting}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={(!content.trim() && !image) || isSubmitting}
          >
            {isSubmitting ? 'Posting...' : 'Post'}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default CreatePost;



// <-------The code below works completely fine------>
// import React, { useState, useEffect } from 'react';
// import { Button } from '../ui/Button.jsx';
// import { Card, CardContent, CardFooter, CardHeader } from '../ui/Card.jsx';
// import { Textarea } from '../ui/TextArea.jsx';
// import { useAuth } from "../../utils/AuthContext.jsx";

// const CreatePost = ({ onPostCreate }) => {
//   const { login, currentUser, isAuthenticated } = useAuth();
//   const [content, setContent] = useState('');
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     // Fetch posts from localStorage when the component loads
//     const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
//     setPosts(storedPosts);
//   }, []);

//   const savePostsToLocalStorage = (updatedPosts) => {
//     localStorage.setItem('posts', JSON.stringify(updatedPosts));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!content.trim()) return;

//     const newPost = {
//       id: Date.now(),
//       content,
//       author: currentUser,
//       authorId: currentUser?.id || 'anonymous',
//       createdAt: new Date().toISOString(),
//       likes: 0,
//       comments: [],
//     };

//     const updatedPosts = [newPost, ...posts];
//     setPosts(updatedPosts);
//     savePostsToLocalStorage(updatedPosts);
//     onPostCreate(newPost);
//     setContent('');
//   };

//   return (
//     <>
//       <Card className="mb-4">
//         <form onSubmit={handleSubmit}>
//           <CardHeader>
//             <h3 className="text-lg font-semibold">Create a Post</h3>
//           </CardHeader>
//           <CardContent>
//             <Textarea
//               placeholder="What's on your mind?"
//               value={content}
//               onChange={(e) => setContent(e.target.value)}
//               className="min-h-[100px]"
//             />
//           </CardContent>
//           <CardFooter className="flex justify-end">
//             <Button type="submit" disabled={!content.trim()}>
//               Post
//             </Button>
//           </CardFooter>
//         </form>
//       </Card>

//       {/* Displaying fetched posts */}
//       <div className="posts-list">
//         {posts.map((post) => (
//           <Card key={post.id} className="mb-4">
//             <CardHeader>
//               <h4 className="font-semibold">{post.author || 'Anonymous'}</h4>
//               <p className="text-sm text-gray-500">{new Date(post.createdAt).toLocaleString()}</p>
//             </CardHeader>
//             <CardContent>
//               <p>{post.content}</p>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </>
//   );
// };

// export default CreatePost;
