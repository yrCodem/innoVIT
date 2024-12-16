// import React, { useEffect, useState } from "react";
// import { useAuth } from "../utils/AuthContext.jsx";
// import axios from "axios";

// const UniCollab = () => {
//   const { currentUser, isAuthenticated } = useAuth();
//   const [posts, setPosts] = useState([]);
//   const [formData, setFormData] = useState({
//     title: "",
//     postContent: "",
//     createdBy: currentUser,
//   });

//   const API_URL =
//     import.meta.env.VITE_NODE_ENV === "production"
//       ? "https://innovit-server.onrender.com"
//       : "http://localhost:5000";

//   const [showAlert, setShowAlert] = useState(false);
//   const [message, setMessage] = useState("");

//   const handleDelete = async (id) => {
//     try {
//       const response = await axios.delete(
//         `${API_URL}/api/uniCollab/deletePost/${id}`,
//         {
//           withCredentials: true,
//         }
//       );
//     } catch (e) {
//       console.log(e.response.data.message);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(formData);
//     try {
//       const response = await axios.post(
//         `${API_URL}/api/uniCollab/createNewPost`,
//         formData,
//         {
//           withCredentials: true,
//         }
//       );
//       setMessage(response.data.message);
//       setShowAlert(true);
//       setTimeout(() => {
//         setShowAlert(false);
//       }, 3000);
//     } catch (e) {
//       console.log(e.response.message);
//     }
//   };

//   useEffect(() => {
//     const fetchAllPosts = async () => {
//       try {
//         const response = await axios.get(
//           `${API_URL}/api/uniCollab/fetchAllPosts`
//         );

//         if (response) {
//           setPosts(response.data);
//         }
//         // console.log(response.data);
//       } catch (error) {
//         console.log("Error fetching posts:", error);
//       }
//     };

//     fetchAllPosts();
//   }, []);

//   return (
//     <div className="relative top-[12vh] max-h-[87vh] overflow-scroll w-screen">
//       <h1 className="text-center text-[1rem] m-2 border">
//         this is a testig fronted for unicollab backend.... make a good frontend
//         for this....
//       </h1>
//       <div>
//         {currentUser ? (
//           <h1 className="text-2xl m-2 text-center">{currentUser}</h1>
//         ) : (
//           <h1 className="text-2xl m-2 text-center">Please Sign in</h1>
//         )}
//       </div>
//       <div className="relative top-0 left-auto]">
//         {showAlert && (
//           <div className="mt-4 p-4 text-center text-textColor font-bold bg-green-500 rounded-md absolute top-0">
//             {message}
//           </div>
//         )}
//       </div>
//       <div className="flex flex-col w-fit border">
//         <h1 className="text-[2rem] ml-4 m-2 font-bold">All Posts</h1>
//         {posts.length > 0 ? (
//           posts.map((post, index) => (
//             <div key={index} className="m-2 border p-2 ">
//               <h2 className="text-[1rem] text-right text-slate-400 font-black mb-4">
//                 {post.createdBy}
//               </h2>
//               <h1 className="text-[1.5rem] font-bold mb-2">{post.title}</h1>
//               <p className="text-md">{post.postContent}</p>
//               <div className="text-right m-4">
//                 <button
//                   className="p-2 bg-red-600 text-lg font-bold rounded-xl"
//                   onClick={() => {
//                     handleDelete(post._id);
//                   }}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-center text-[1.5rem]">No posts available.</p>
//         )}
//         {isAuthenticated ? (
//           <div className="border w-[40%] p-2 fixed right-2 bottom-2 bg-gray-950">
//             <h3>create post --- {currentUser}</h3>
//             <form
//               noValidate=""
//               onSubmit={handleSubmit}
//               className="flex flex-col items-center"
//             >
//               <div className="mb-4 flex flex-col  w-full">
//                 <label htmlFor="title" className="text-lg mr-2">
//                   Title
//                 </label>
//                 <input
//                   type="text"
//                   id="title"
//                   name="title"
//                   value={formData.title}
//                   onChange={handleChange}
//                   className="w-full bg-stone-900 text-textColor focus:outline-none"
//                   placeholder="Enter post title"
//                 />
//               </div>
//               <div className="mb-4 flex flex-col w-full">
//                 <label htmlFor="postContent" className="text-lg mr-2">
//                   Post Content
//                 </label>
//                 <textarea
//                   id="postContent"
//                   name="postContent"
//                   rows="5"
//                   value={formData.postContent}
//                   onChange={handleChange}
//                   className="w-full bg-stone-900 text-textColor focus:outline-none "
//                   placeholder="Enter post content"
//                 ></textarea>
//               </div>
//               <button type="submit" className="bg-green-700 p-4 rounded-md">
//                 Submit
//               </button>
//             </form>
//           </div>
//         ) : (
//           <div className="border w-[40%] p-2 fixed right-2 bottom-2 bg-gray-950">
//             Please signin first to create new post...
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UniCollab;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "./layout/Layout.jsx";
import { Button } from "./ui/Button.jsx";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/Card.jsx";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/Tabs.jsx";
import HeaderUniCollab from "./layout/HeaderUniCollab.jsx";
import CreatePost from "./post/CreatePost.jsx";
import Post from "./post/Post.jsx";

import { useAuth } from "../utils/AuthContext.jsx";
import axios from "axios";

const UniCollab = () => {
  const [posts, setPosts] = useState([]);
  const { currentUser, isAuthenticated } = useAuth();

  const handleCreatePost = (newPost) => {
    setPosts((prevPosts) => [
      {
        ...newPost,
        likes: 0,
        dislikes: 0,
        comments: [],
      },
      ...prevPosts,
    ]);
  };

  const handleLike = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const handleDislike = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? { ...post, dislikes: (post.dislikes || 0) + 1 }
          : post
      )
    );
  };

  const handleComment = (postId, newComment) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? { ...post, comments: [newComment, ...post.comments] }
          : post
      )
    );
  };

  return (
    <div className="max-w-[100vw] font-sora relative top-[13vh] ">
      {isAuthenticated ? (
        <Layout>
          <HeaderUniCollab />
          <div className="space-y-4">
            <Tabs defaultValue="relevant" className="w-full">
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
                        Welcome to UniCollab Community
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        UniCollab Community is a community where people help
                        each other.
                      </p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We&apos;re a place where students share, stay up-to-date
                      and grow their careers.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm">
                      Read more
                    </Button>
                  </CardFooter>
                </Card>

                <CreatePost onPostCreate={handleCreatePost} />

                <div className="space-y-4">
                  {posts.map((post) => (
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

              <TabsContent value="latest" className="space-y-4">
                <div className="space-y-4">
                  {[...posts]
                    .sort(
                      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
                    )
                    .map((post) => (
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

              <TabsContent value="top" className="space-y-4">
                <div className="space-y-4">
                  {[...posts]
                    .sort((a, b) => b.likes - a.likes)
                    .map((post) => (
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
