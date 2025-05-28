import { createContext, useReducer } from "react";

export const PostListContext = createContext({
  postListData: [],
  addPost: () => { },
  addInitialPosts: () => { },
  deletePost: () => { },
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  } else if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.id
    );
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  }

  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postListData, dispatchPostList] = useReducer(
    postListReducer,
    []
  );

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        userId: userId,
        title: postTitle,
        body: postBody,
        reactions: {
          likes: 0,
          dislikes: 0
        },
        tags: tags,
        views: 0
      },
    });
  };

  const addInitialPosts = (posts) => {
    if (!Array.isArray(posts)) {
      console.error('Posts must be an array:', posts);
      return;
    }

    // Format posts to ensure they have the correct structure
    const formattedPosts = posts.map(post => ({
      id: post.id,
      title: post.title || 'Untitled',
      body: post.body || '',
      reactions: post.reactions || { likes: 0, dislikes: 0 },
      userId: post.userId || 'anonymous',
      tags: Array.isArray(post.tags) ? post.tags : [],
      views: post.views || 0
    }));

    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts: formattedPosts
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        id: postId,
      },
    });
  };

  return (
    <PostListContext.Provider value={{ postListData, addPost, deletePost, addInitialPosts }}>
      {children}
    </PostListContext.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hi Friends, I am going to Mumbai for my vacations. Hope to enjoy a lot. Peace out.",
    reactions: 2,
    userId: "user-9",
    tags: ["vacation", "Mumbai", "Enjoying"],
  },
  {
    id: "2",
    title: "Paas ho bhai",
    body: "4 saal ki masti k baad bhi ho gaye hain paas. Hard to believe.",
    reactions: 15,
    userId: "user-12",
    tags: ["Graduating", "Unbelievable"],
  },
];

export default PostListProvider;
