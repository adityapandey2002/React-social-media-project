import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostListContext } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postListData, addInitialPosts } = useContext(PostListContext);
  const [fetching, setFetching] = useState(false);



  const normalizePost = (post) => {
    return {
      ...post,
      reactions: post.reactions || { likes: 0, dislikes: 0 },
      tags: Array.isArray(post.tags) ? post.tags.filter(tag => tag.trim() !== "") : [],
      views: post.views || 0
    };
  };

  return (
    <>
      {fetching && <LoadingSpinner />}
      {postListData.length === 0 && <WelcomeMessage />}
      <div className="post-list-container">
        {Array.isArray(postListData) && postListData.map((post) => {
          const normalizedPost = normalizePost(post);
          return post && post.id ? (
            <Post key={`post-${post.id}-${Date.now()}`} post={normalizedPost} />
          ) : null;
        })}
      </div>
    </>
  );
};

export default PostList;
