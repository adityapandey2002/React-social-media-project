import { createContext, useEffect, useReducer, useState } from "react";

export const PostListContext = createContext({
  postListData: [],
  addPost: () => { },
  deletePost: () => { },
  fetching: false,
});

const postListReducer = (currPostList, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [action.payload, ...currPostList];

    case "DELETE_POST":
      return currPostList.filter(post => post.id !== action.payload.id);

    case "ADD_INITIAL_POSTS":
      return action.payload.posts;

    default:
      return currPostList;
  }
};

const PostListProvider = ({ children }) => {
  const [postListData, dispatchPostList] = useReducer(
    postListReducer,
    []
  );

  const [fetching, setFetching] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setFetching(true);

    fetch('https://dummyjson.com/posts', { signal })
      .then(res => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });

    return () => {
      controller.abort();
    };
  }, []);



  const formatPost = (post) => ({
    id: post.id,
    title: post.title || 'Untitled',
    body: post.body || '',
    reactions: post.reactions || { likes: 0, dislikes: 0 },
    userId: post.userId || 'anonymous',
    tags: Array.isArray(post.tags) ? post.tags.filter(tag => tag.trim() !== '') : [],
    views: post.views || 0
  });

  const addPost = (post) => {
    const formattedPost = formatPost(post);
    dispatchPostList({
      type: "ADD_POST",
      payload: formattedPost
    });
  };

  const addInitialPosts = (posts) => {
    if (!Array.isArray(posts)) {
      console.error('Posts must be an array:', posts);
      return;
    }

    const formattedPosts = posts.map(formatPost);

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
    <PostListContext.Provider value={{ postListData, addPost, deletePost, fetching }}>
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;
