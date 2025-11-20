import { axiosConfig } from '../../../axiosConfig';

const getUserLikedPosts = async (likerId, token, query) => {
  try {
    const res = await axiosConfig.get(`/api/posts/liked/${likerId}`, {
      params: query,
      headers: {
        'x-access-token': token,
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const getPosts = async (token, query) => {
  try {
    const res = await axiosConfig.get('/api/posts', {
      params: query,
      headers: {
        'x-access-token': token,
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const getPost = async (postId, token) => {
  try {
    const res = await axiosConfig.get(`/api/posts/${postId}`, {
      headers: {
        'x-access-token': token,
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const getUserLikes = async (postId, anchor) => {
  try {
    const res = await axiosConfig.get(`/api/posts/like/${postId}/users`, {
      params: { anchor },
    });
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const createPost = async (post, user) => {
  try {
    const res = await axiosConfig.post('/api/posts', post, {
      headers: {
        'x-access-token': user.token,
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const updatePost = async (postId, user, data) => {
  try {
    const res = await axiosConfig.patch(`/api/posts/${postId}`, data, {
      headers: {
        'x-access-token': user.token,
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const deletePost = async (postId, user) => {
  try {
    const res = await axiosConfig.delete(`/api/posts/${postId}`, {
      headers: {
        'x-access-token': user.token,
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const getComments = async (params) => {
  try {
    const { id } = params;
    const res = await axiosConfig.get(`/api/comments/post/${id}`);
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const getUserComments = async (params) => {
  try {
    const { id, query } = params;
    const res = await axiosConfig.get(`/api/comments/user/${id}`, {
      params: query,
    });
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const createComment = async (comment, params, user) => {
  try {
    const { id } = params;
    const res = await axiosConfig.post(`/api/comments/${id}`, comment, {
      headers: {
        'x-access-token': user.token,
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const updateComment = async (commentId, user, data) => {
  try {
    const res = await axiosConfig.patch(`/api/comments/${commentId}`, data, {
      headers: {
        'x-access-token': user.token,
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const deleteComment = async (commentId, user) => {
  try {
    const res = await axiosConfig.delete(`/api/comments/${commentId}`, {
      headers: {
        'x-access-token': user.token,
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const likePost = async (postId, user) => {
  try {
    const res = await axiosConfig.post(`/api/posts/like/${postId}`, {}, {
      headers: {
        'x-access-token': user.token,
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const unlikePost = async (postId, user) => {
  try {
    const res = await axiosConfig.delete(`/api/posts/like/${postId}`, {
      headers: {
        'x-access-token': user.token,
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export {
  getPost,
  createPost,
  updatePost,
  deletePost,
  getPosts,
  getUserComments,
  getUserLikedPosts,
  getComments,
  createComment,
  deleteComment,
  updateComment,
  likePost,
  unlikePost,
  getUserLikes,
};
