import { createContext, useReducer } from "react";

export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

// const postListReducer = (currPostList, action) => {
//   let newPostList = currPostList;
//   if (action.type)

// }

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  const addPost = (UserId) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        userId: userId,
      },
    });
  };

  <PostListContext.Provider value={{ PostList, addPost }}>
    {children}
  </PostListContext.Provider>;
};
