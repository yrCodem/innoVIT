const express = require("express");
const router = express.Router();
const Post = require("../models/Posts.js");
const isLoggedin = require("../middlewares/isLoggedinMiddleware.js");
const mongoose = require("mongoose");

router.get("/posts", async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json(posts);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "something went wrong" });
  }
});

router.post("/createNewPost", isLoggedin, async (req, res) => {
  try {
    const newPost = new Post({
      title: req.body.title,
      postContent: req.body.postContent,
      createdBy: req.body.createdBy,
    });
    await newPost.save();
    res.status(200).json({ message: "post created successfully" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "something went wrong" });
  }
});

router.delete("/deletePost/:id", isLoggedin, async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid post ID" });
  }

  try {
    const deletedPost = await Post.findByIdAndDelete(id);
    if (!deletedPost) {
      return res.status(404).json({
        success: false,
        message: "Post not Found...!",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Post Deleted Successfully",
      deletedPost,
    });
  } catch (e) {
    console.error("Error deleting post:", e);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

module.exports = router;


// const express = require("express");
// const mongoose = require("mongoose");
// const Post = require("../models/Posts.js");
// const isLoggedin = require("../middlewares/isLoggedinMiddleware.js");

// const router = express.Router();

// router.get("/fetchAllPosts", async (req, res) => {
//   try {
//     const posts = await Post.find({});
//     res.status(200).json(posts);
//   } catch (e) {
//     console.log(e);
//     res.status(500).json({ message: "something went wrong" });
//   }
// });

// router.post("/createNewPost", async (req, res) => {
//   try {
//     const newPost = new Post({
//       title: req.body.title,
//       postContent: req.body.postContent,
//       createdBy: req.body.createdBy,
//     });
//     await newPost.save();
//     res.status(200).json({ message: "post created successfully" });
//   } catch (e) {
//     console.log(e);
//     res.status(500).json({ message: "something went wrong" });
//   }
// });

// router.delete("/deletePost/:id", isLoggedin, async (req, res) => {
//   const { id } = req.params;

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(400).json({ message: "Invalid post ID" });
//   }

//   try {
//     const deletedPost = await Post.findByIdAndDelete(id);
//     if (!deletedPost) {
//       return res.status(404).json({
//         success: false,
//         message: "Post not Found...!",
//       });
//     }

//     return res.status(200).json({
//       success: true,
//       message: "Post Deleted Successfully",
//       deletedPost,
//     });
//   } catch (e) {
//     console.error("Error deleting post:", e);

//     return res.status(500).json({
//       success: false,
//       message: "Internal Server Error",
//     });
//   }
// });

// module.exports = router;
