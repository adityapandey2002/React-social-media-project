import { useContext } from "react";
import Post from "./Post";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";
import { useLoaderData } from "react-router-dom";
import { PostListContext } from "../store/post-list-store";

const PostList = () => {
  const postListData = useLoaderData();
  const { addPost } = useContext(PostListContext);

  if (!postListData) {
    return <LoadingSpinner />;
  }

  return (
    <>
      {postListData.length === 0 ? (
        <WelcomeMessage />
      ) : (
        <div className="post-list-container">
          {postListData.map((post) => (
            <Post
              key={`post-${post.id}`}
              post={post}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default PostList;
