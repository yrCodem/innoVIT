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
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Users,
  MessageSquare,
  Tag,
  HelpCircle,
  Trophy,
  BookOpen,
  Info,
  BookMarked,
  Shield,
  FileText
} from 'lucide-react';

const UniCollab = () => {
  const [posts, setPosts] = useState([]);
  const [activeTab, setActiveTab] = useState("relevant");
  const [stats, setStats] = useState({
    totalPosts: 0,
    activeUsers: 0,
    totalComments: 0
  });
  const { currentUser, isAuthenticated } = useAuth();

  // Load posts from localStorage on component mount
  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(storedPosts);
    calculateStats(storedPosts);
  }, []);

  // Calculate dashboard statistics
  const calculateStats = (posts) => {
    const totalPosts = posts.length;
    const totalComments = posts.reduce((sum, post) => sum + (post.comments?.length || 0), 0);

    // Extract unique authors
    const uniqueAuthors = new Set(posts.map(post => post.authorId));
    const activeUsers = uniqueAuthors.size;

    setStats({
      totalPosts,
      activeUsers,
      totalComments
    });
  };

  // Save posts to localStorage whenever posts change
  useEffect(() => {
    if (posts.length > 0) {
      localStorage.setItem('posts', JSON.stringify(posts));
      calculateStats(posts);
    }
  }, [posts]);

  const handleCreatePost = (newPost) => {
    const postWithDefaults = {
      ...newPost,
      likes: 0,
      dislikes: 0,
      comments: [],
      userReaction: null,
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
          newLikes = Math.max(0, post.likes - 1);
          newReaction = null;
        } else if (currentUserReaction === 'dislike') {
          newLikes = post.likes + 1;
          newDislikes = Math.max(0, post.dislikes - 1);
          newReaction = 'like';
        } else {
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
          newDislikes = Math.max(0, post.dislikes - 1);
          newReaction = null;
        } else if (currentUserReaction === 'like') {
          newDislikes = post.dislikes + 1;
          newLikes = Math.max(0, post.likes - 1);
          newReaction = 'dislike';
        } else {
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
          const aScore = (a.likes - a.dislikes) + (new Date() - new Date(a.createdAt)) / (1000 * 60 * 60 * 24);
          const bScore = (b.likes - b.dislikes) + (new Date() - new Date(b.createdAt)) / (1000 * 60 * 60 * 24);
          return bScore - aScore;
        });
    }
  };

  const filteredPosts = getFilteredPosts();

  // Animation variants
  const tabContentVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  const statCardVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    hover: { scale: 1.02, transition: { duration: 0.2 } }
  };

  return (
    <div className="max-w-[100vw] font-sora relative top-[13vh]">
      {isAuthenticated ? (
        <Layout>
          <HeaderUniCollab />
          <div className="container mx-auto px-4 py-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Main Content */}
              <div className="lg:col-span-3 space-y-6">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid w-full grid-cols-3 p-1 bg-muted/50 rounded-lg">
                    <TabsTrigger
                      value="relevant"
                      className="relative data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all duration-200"
                    >
                      <Home className="w-4 h-4 mr-2" />
                      Relevant
                    </TabsTrigger>
                    <TabsTrigger
                      value="latest"
                      className="relative data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all duration-200"
                    >
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Latest
                    </TabsTrigger>
                    <TabsTrigger
                      value="top"
                      className="relative data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all duration-200"
                    >
                      <Trophy className="w-4 h-4 mr-2" />
                      Top
                    </TabsTrigger>
                  </TabsList>

                  <AnimatePresence mode="wait">
                    <TabsContent value="relevant" className="space-y-6">
                      <motion.div
                        key="relevant"
                        variants={tabContentVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.3 }}
                      >
                        <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
                          <CardHeader className="flex flex-row items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                              <BookOpen className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                              <h2 className="text-xl font-semibold">
                                Welcome to UniCollab Community
                              </h2>
                              <p className="text-sm text-muted-foreground">
                                Connect, collaborate, and grow with fellow students.
                              </p>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground">
                              Share your projects, ask questions, and help each other succeed in academic journey.
                            </p>
                          </CardContent>
                          <CardFooter>
                            <Button variant="outline" size="sm" className="gap-2">
                              <BookMarked className="w-4 h-4" />
                              Community Guidelines
                            </Button>
                          </CardFooter>
                        </Card>

                        <CreatePost onPostCreate={handleCreatePost} />

                        <div className="space-y-4">
                          {filteredPosts.map((post) => (
                            <motion.div
                              key={post.id}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <Post
                                post={post}
                                onLike={handleLike}
                                onDislike={handleDislike}
                                onComment={handleComment}
                                currentUser={currentUser}
                              />
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </TabsContent>

                    <TabsContent value="latest" className="space-y-6">
                      <motion.div
                        key="latest"
                        variants={tabContentVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.3 }}
                      >
                        <div className="space-y-4">
                          {filteredPosts.map((post) => (
                            <motion.div
                              key={post.id}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <Post
                                post={post}
                                onLike={handleLike}
                                onDislike={handleDislike}
                                onComment={handleComment}
                                currentUser={currentUser}
                              />
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </TabsContent>

                    <TabsContent value="top" className="space-y-6">
                      <motion.div
                        key="top"
                        variants={tabContentVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.3 }}
                      >
                        <div className="space-y-4">
                          {filteredPosts.map((post, index) => (
                            <motion.div
                              key={post.id}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                              <Post
                                post={post}
                                onLike={handleLike}
                                onDislike={handleDislike}
                                onComment={handleComment}
                                currentUser={currentUser}
                              />
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </TabsContent>
                  </AnimatePresence>
                </Tabs>
              </div>

              {/* Dashboard Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                {/* Community Stats */}
                <motion.div
                  initial="initial"
                  animate="animate"
                  variants={statCardVariants}
                  transition={{ duration: 0.5 }}
                >
                  <Card>
                    <CardHeader>
                      <h3 className="font-semibold flex items-center gap-2">
                        <Home className="w-4 h-4" />
                        Community Stats
                      </h3>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                        <div className="flex items-center gap-2">
                          <MessageSquare className="w-4 h-4 text-primary" />
                          <span className="text-sm">Total Posts</span>
                        </div>
                        <span className="font-bold text-primary">{stats.totalPosts}</span>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-green-500" />
                          <span className="text-sm">Active Users</span>
                        </div>
                        <span className="font-bold text-green-500">{stats.activeUsers}</span>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                        <div className="flex items-center gap-2">
                          <MessageSquare className="w-4 h-4 text-blue-500" />
                          <span className="text-sm">Total Comments</span>
                        </div>
                        <span className="font-bold text-blue-500">{stats.totalComments}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Dashboard Navigation Tabs */}
                <motion.div
                  initial="initial"
                  animate="animate"
                  variants={statCardVariants}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <Card>
                    <CardHeader>
                      <h3 className="font-semibold">UniCollab++</h3>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      {/* Home Section */}
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 p-2 rounded-lg bg-muted/30">
                          <Home className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium">Home</span>
                        </div>
                      </div>

                      {/* UniCollab++ Section */}
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                          <Users className="w-4 h-4" />
                          <span className="text-sm">UniCollab++</span>
                        </div>
                      </div>

                      {/* Tags Section */}
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                          <Tag className="w-4 h-4" />
                          <span className="text-sm">Tags</span>
                        </div>
                      </div>

                      {/* UniCollab Help Section */}
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                          <HelpCircle className="w-4 h-4" />
                          <span className="text-sm">UniCollab Help</span>
                        </div>
                      </div>

                      {/* Challenges Section */}
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                          <Trophy className="w-4 h-4" />
                          <span className="text-sm">Challenges</span>
                        </div>
                      </div>

                      {/* UniCollab Blog Section */}
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                          <BookOpen className="w-4 h-4" />
                          <span className="text-sm">UniCollab Blog</span>
                        </div>
                      </div>

                      {/* Other Section */}
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                          <Info className="w-4 h-4" />
                          <span className="text-sm">Other</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* About Section */}
                <motion.div
                  initial="initial"
                  animate="animate"
                  variants={statCardVariants}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Card>
                    <CardHeader>
                      <h3 className="font-semibold">About</h3>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                        <Info className="w-4 h-4" />
                        <span className="text-sm">About</span>
                      </div>
                      <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                        <BookMarked className="w-4 h-4" />
                        <span className="text-sm">Guides</span>
                      </div>
                      <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                        <Shield className="w-4 h-4" />
                        <span className="text-sm">Code Of Conduct</span>
                      </div>
                      <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                        <FileText className="w-4 h-4" />
                        <span className="text-sm">Privacy Policy</span>
                      </div>
                      <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
                        <FileText className="w-4 h-4" />
                        <span className="text-sm">Terms of Service</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* User Profile Card */}
                {currentUser && (
                  <motion.div
                    initial="initial"
                    animate="animate"
                    variants={statCardVariants}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <Card>
                      <CardHeader>
                        <h3 className="font-semibold">Your Profile</h3>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold">
                            {currentUser.fullName?.charAt(0) || currentUser.username?.charAt(0) || 'U'}
                          </div>
                          <div>
                            <p className="font-medium text-sm">
                              {currentUser.fullName || currentUser.username || 'User'}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              Student Member
                            </p>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-center">
                          <div className="p-2 bg-muted/30 rounded">
                            <p className="font-bold text-sm">{posts.filter(p => p.authorId === currentUser.id).length}</p>
                            <p className="text-xs text-muted-foreground">Posts</p>
                          </div>
                          <div className="p-2 bg-muted/30 rounded">
                            <p className="font-bold text-sm">
                              {posts.reduce((sum, post) => sum + (post.comments?.filter(c => c.authorId === currentUser.id).length || 0), 0)}
                            </p>
                            <p className="text-xs text-muted-foreground">Comments</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </Layout>
      ) : (
        <div className="flex h-[86vh] min-h-[86vh] max-h-[86vh] w-full justify-center items-center flex-col">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="100px"
              viewBox="0 -960 960 960"
              width="100px"
              fill="#F0ECE5"
            >
              <path d="M479.91-120q-28.91 0-49.41-20.59-20.5-20.59-20.5-49.5t20.59-49.41q20.59-20.5 49.5-20.5t49.41 20.59q20.5 20.59 20.5 49.5t-20.59 49.41q-20.59 20.5-49.5 20.5ZM410-360v-480h140v480H410Z" />
            </svg>
          </motion.div>

          <motion.h3
            className="w-[50%] text-[2rem] font-semibold tracking-wide mb-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="font-black text-tertiary"> Oops! </span> Looks like
            you're not signed in. Please sign up or log in to access this
            feature!{" "}
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link to={"/login"}>
              <div className="font-sora text-xl bg-textColor text-primary font-black p-4 pl-8 pr-8 rounded-full hover:scale-105 transition-transform duration-200">
                Sign in
              </div>
            </Link>
          </motion.div>
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
