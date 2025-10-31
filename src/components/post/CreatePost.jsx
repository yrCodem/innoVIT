import React, { useState } from 'react';
import { Button } from '../ui/Button.jsx';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/Card.jsx';
import { Textarea } from '../ui/TextArea.jsx';
import { ImageIcon, X, Plus } from 'lucide-react';
import { useAuth } from "../../utils/AuthContext.jsx";
import { motion, AnimatePresence } from 'framer-motion';

const CreatePost = ({ onPostCreate }) => {
  const { currentUser } = useAuth();
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file');
        return;
      }

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
        image: imagePreview,
      };

      onPostCreate(newPost);
      setContent('');
      setImage(null);
      setImagePreview(null);
      setIsExpanded(false);

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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="mb-6">
        {!isExpanded ? (
          <div
            className="p-4 cursor-pointer hover:bg-muted/50 transition-colors rounded-lg"
            onClick={() => setIsExpanded(true)}
          >
            <div className="flex items-center gap-3 text-muted-foreground">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Plus className="w-5 h-5 text-primary" />
              </div>
              <span>Create a post...</span>
            </div>
          </div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
          >
            <CardHeader>
              <h3 className="text-lg font-semibold">Create a Post</h3>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                placeholder="What's on your mind? Share your thoughts, questions, or projects..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="min-h-[120px] resize-none"
                autoFocus
              />

              <AnimatePresence>
                {imagePreview && (
                  <motion.div
                    className="relative rounded-lg border p-2"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  >
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
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex items-center justify-between">
                <input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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
                </motion.div>

                <div className="text-sm text-muted-foreground">
                  {content.length}/5000
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setIsExpanded(false);
                    setContent('');
                    removeImage();
                  }}
                  disabled={isSubmitting}
                >
                  Cancel
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  type="submit"
                  disabled={(!content.trim() && !image) || isSubmitting}
                >
                  {isSubmitting ? 'Posting...' : 'Post'}
                </Button>
              </motion.div>
            </CardFooter>
          </motion.form>
        )}
      </Card>
    </motion.div>
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
