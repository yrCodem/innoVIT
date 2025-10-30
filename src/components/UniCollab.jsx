import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "./layout/Layout.jsx";
import { Button } from "./ui/Button.jsx";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/Card.jsx";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/Tabs.jsx";
import HeaderUniCollab from "./layout/HeaderUniCollab.jsx";
import CreatePost from "./post/CreatePost.jsx";
import Post from "./post/Post.jsx";
import { useAuth } from "../utils/AuthContext.jsx";

const UniCollab = () => {
  const [posts, setPosts] = useState([]);
  const [activeTab, setActiveTab] = useState("relevant");
  const { currentUser, isAuthenticated } = useAuth();

  // Load posts from localStorage on component mount
  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(storedPosts);
  }, []);

  // Save posts to localStorage whenever posts change
  useEffect(() => {
    if (posts.length > 0) {
      localStorage.setItem('posts', JSON.stringify(posts));
    }
  }, [posts]);

  const handleCreatePost = (newPost) => {
    const postWithDefaults = {
      ...newPost,
      likes: 0,
      dislikes: 0,
      comments: [],
      userReaction: null, // Track user's reaction
    };

    const updatedPosts = [postWithDefaults, ...posts];
    setPosts(updatedPosts);
  };

  const handleLike = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => {
        if (post.id !== postId) return post;

        const currentUserReaction = post.userReaction;
        let newLikes = post.likes;
        let newDislikes = post.dislikes;
        let newReaction = 'like';

        if (currentUserReaction === 'like') {
          // If already liked, remove like
          newLikes = Math.max(0, post.likes - 1);
          newReaction = null;
        } else if (currentUserReaction === 'dislike') {
          // If disliked, switch to like
          newLikes = post.likes + 1;
          newDislikes = Math.max(0, post.dislikes - 1);
          newReaction = 'like';
        } else {
          // If no reaction, add like
          newLikes = post.likes + 1;
          newReaction = 'like';
        }

        return {
          ...post,
          likes: newLikes,
          dislikes: newDislikes,
          userReaction: newReaction,
        };
      })
    );
  };

  const handleDislike = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => {
        if (post.id !== postId) return post;

        const currentUserReaction = post.userReaction;
        let newLikes = post.likes;
        let newDislikes = post.dislikes;
        let newReaction = 'dislike';

        if (currentUserReaction === 'dislike') {
          // If already disliked, remove dislike
          newDislikes = Math.max(0, post.dislikes - 1);
          newReaction = null;
        } else if (currentUserReaction === 'like') {
          // If liked, switch to dislike
          newDislikes = post.dislikes + 1;
          newLikes = Math.max(0, post.likes - 1);
          newReaction = 'dislike';
        } else {
          // If no reaction, add dislike
          newDislikes = post.dislikes + 1;
          newReaction = 'dislike';
        }

        return {
          ...post,
          likes: newLikes,
          dislikes: newDislikes,
          userReaction: newReaction,
        };
      })
    );
  };

  const handleComment = (postId, newComment) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: [newComment, ...post.comments]
            }
          : post
      )
    );
  };

  // Filter and sort posts based on active tab
  const getFilteredPosts = () => {
    switch (activeTab) {
      case "latest":
        return [...posts].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
      case "top":
        return [...posts].sort((a, b) => (b.likes - b.dislikes) - (a.likes - a.dislikes));
      case "relevant":
      default:
        return [...posts].sort((a, b) => {
          // Simple relevance algorithm - combine recency and engagement
          const aScore = (a.likes - a.dislikes) + (new Date() - new Date(a.createdAt)) / (1000 * 60 * 60 * 24);
          const bScore = (b.likes - b.dislikes) + (new Date() - new Date(b.createdAt)) / (1000 * 60 * 60 * 24);
          return bScore - aScore;
        });
    }
  };

  const filteredPosts = getFilteredPosts();

  return (
    <div className="max-w-[100vw] font-sora relative top-[13vh]">
      {isAuthenticated ? (
        <Layout>
          <HeaderUniCollab />
          <div className="space-y-4">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList>
                <TabsTrigger value="relevant">Relevant</TabsTrigger>
                <TabsTrigger value="latest">Latest</TabsTrigger>
                <TabsTrigger value="top">Top</TabsTrigger>
              </TabsList>

              <TabsContent value="relevant" className="space-y-4">
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div>
                      <h2 className="text-xl font-semibold">
                        Welcome to UniCollab Community!
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        UniCollab Community is a community where students help each other.
                      </p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We&apos;re a place where students share, stay up-to-date and grow their careers.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm">
                      Read more....
                    </Button>
                  </CardFooter>
                </Card>

                <CreatePost onPostCreate={handleCreatePost} />

                <div className="space-y-4">
                  {filteredPosts.map((post) => (
                    <Post
                      key={post.id}
                      post={post}
                      onLike={handleLike}
                      onDislike={handleDislike}
                      onComment={handleComment}
                      currentUser={currentUser}
                    />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="latest" className="space-y-4">
                <div className="space-y-4">
                  {filteredPosts.map((post) => (
                    <Post
                      key={post.id}
                      post={post}
                      onLike={handleLike}
                      onDislike={handleDislike}
                      onComment={handleComment}
                      currentUser={currentUser}
                    />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="top" className="space-y-4">
                <div className="space-y-4">
                  {filteredPosts.map((post) => (
                    <Post
                      key={post.id}
                      post={post}
                      onLike={handleLike}
                      onDislike={handleDislike}
                      onComment={handleComment}
                      currentUser={currentUser}
                    />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </Layout>
      ) : (
        <div className="flex h-[86vh] min-h-[86vh] max-h-[86vh] w-full justify-center items-center flex-col">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="100px"
            viewBox="0 -960 960 960"
            width="100px"
            fill="#F0ECE5"
          >
            <path d="M479.91-120q-28.91 0-49.41-20.59-20.5-20.59-20.5-49.5t20.59-49.41q20.59-20.5 49.5-20.5t49.41 20.59q20.5 20.59 20.5 49.5t-20.59 49.41q-20.59 20.5-49.5 20.5ZM410-360v-480h140v480H410Z" />
          </svg>

          <h3 className="w-[50%] text-[2rem] font-semibold tracking-wide mb-4 text-center">
            <span className="font-black text-tertiary"> Oops! </span> Looks like
            you're not signed in. Please sign up or log in to access this
            feature!{" "}
          </h3>
          <Link to={"/login"}>
            <div className="font-sora text-xl bg-textColor text-primary font-black p-4 pl-8 pr-8 rounded-full">
              Sign in
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UniCollab;

// <---------This Below code works completely fine--------->
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Layout from "./layout/Layout.jsx";
// import { Button } from "./ui/Button.jsx";
// import { Card, CardContent, CardFooter, CardHeader } from "./ui/Card.jsx";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/Tabs.jsx";
// import HeaderUniCollab from "./layout/HeaderUniCollab.jsx";
// import CreatePost from "./post/CreatePost.jsx";
// import Post from "./post/Post.jsx";

// import { useAuth } from "../utils/AuthContext.jsx";
// import axios from "axios";

// const UniCollab = () => {
//   const [posts, setPosts] = useState([]);
//   const { currentUser, isAuthenticated } = useAuth();

//   const handleCreatePost = (newPost) => {
//     setPosts((prevPosts) => [
//       {
//         ...newPost,
//         likes: 0,
//         dislikes: 0,
//         comments: [],
//       },
//       ...prevPosts,
//     ]);
//   };

//   const handleLike = (postId) => {
//     setPosts((prevPosts) =>
//       prevPosts.map((post) =>
//         post.id === postId ? { ...post, likes: post.likes + 1 } : post
//       )
//     );
//   };

//   const handleDislike = (postId) => {
//     setPosts((prevPosts) =>
//       prevPosts.map((post) =>
//         post.id === postId
//           ? { ...post, dislikes: (post.dislikes || 0) + 1 }
//           : post
//       )
//     );
//   };

//   const handleComment = (postId, newComment) => {
//     setPosts((prevPosts) =>
//       prevPosts.map((post) =>
//         post.id === postId
//           ? { ...post, comments: [newComment, ...post.comments] }
//           : post
//       )
//     );
//   };

//   return (
//     <div className="max-w-[100vw] font-sora relative top-[13vh] ">
//       {isAuthenticated ? (
//         <Layout>
//           <HeaderUniCollab />
//           <div className="space-y-4">
//             <Tabs defaultValue="relevant" className="w-full">
//               <TabsList>
//                 <TabsTrigger value="relevant">Relevant</TabsTrigger>
//                 <TabsTrigger value="latest">Latest</TabsTrigger>
//                 <TabsTrigger value="top">Top</TabsTrigger>
//               </TabsList>
//               <TabsContent value="relevant" className="space-y-4">
//                 <Card>
//                   <CardHeader className="flex flex-row items-center gap-4">
//                     <div>
//                       <h2 className="text-xl font-semibold">
//                         Welcome to UniCollab Community
//                       </h2>
//                       <p className="text-sm text-muted-foreground">
//                         UniCollab Community is a community where people help
//                         each other.
//                       </p>
//                     </div>
//                   </CardHeader>
//                   <CardContent>
//                     <p className="text-muted-foreground">
//                       We&apos;re a place where students share, stay up-to-date
//                       and grow their careers.
//                     </p>
//                   </CardContent>
//                   <CardFooter>
//                     <Button variant="outline" size="sm">
//                       Read more
//                     </Button>
//                   </CardFooter>
//                 </Card>

//                 <CreatePost onPostCreate={handleCreatePost} />

//                 <div className="space-y-4">
//                   {posts.map((post) => (
//                     <Post
//                       key={post.id}
//                       post={post}
//                       onLike={handleLike}
//                       onDislike={handleDislike}
//                       onComment={handleComment}
//                     />
//                   ))}
//                 </div>
//               </TabsContent>

//               <TabsContent value="latest" className="space-y-4">
//                 <div className="space-y-4">
//                   {[...posts]
//                     .sort(
//                       (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
//                     )
//                     .map((post) => (
//                       <Post
//                         key={post.id}
//                         post={post}
//                         onLike={handleLike}
//                         onDislike={handleDislike}
//                         onComment={handleComment}
//                       />
//                     ))}
//                 </div>
//               </TabsContent>

//               <TabsContent value="top" className="space-y-4">
//                 <div className="space-y-4">
//                   {[...posts]
//                     .sort((a, b) => b.likes - a.likes)
//                     .map((post) => (
//                       <Post
//                         key={post.id}
//                         post={post}
//                         onLike={handleLike}
//                         onDislike={handleDislike}
//                         onComment={handleComment}
//                       />
//                     ))}
//                 </div>
//               </TabsContent>
//             </Tabs>
//           </div>
//         </Layout>
//       ) : (
//         <div className="flex h-[86vh] min-h-[86vh] max-h-[86vh] w-full justify-center items-center flex-col">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             height="100px"
//             viewBox="0 -960 960 960"
//             width="100px"
//             fill="#F0ECE5"
//           >
//             <path d="M479.91-120q-28.91 0-49.41-20.59-20.5-20.59-20.5-49.5t20.59-49.41q20.59-20.5 49.5-20.5t49.41 20.59q20.5 20.59 20.5 49.5t-20.59 49.41q-20.59 20.5-49.5 20.5ZM410-360v-480h140v480H410Z" />
//           </svg>

//           <h3 className="w-[50%] text-[2rem] font-semibold tracking-wide mb-4 text-center">
//             <span className="font-black text-tertiary"> Oops! </span> Looks like
//             you're not signed in. Please sign up or log in to access this
//             feature!{" "}
//           </h3>
//           <Link to={"/login"}>
//             <div className="font-sora text-xl bg-textColor text-primary font-black p-4 pl-8 pr-8 rounded-full">
//               Sign in
//             </div>
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UniCollab;
