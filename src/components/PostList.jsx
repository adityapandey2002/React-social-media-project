import { useContext } from "react";
import Post from "./Post";
import { PostListContext } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";

const PostList = () => {
  const { postListData, addInitialPosts } = useContext(PostListContext);
  const handleOnGetPostsClicked = () => {
    fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
      });
  }
  return (
    <>
      {postListData.length === 0 && <WelcomeMessage onGetPostsClick={handleOnGetPostsClicked} />}
      <div className="post-list-container">
        {postListData.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>

    </>
  );
};

export default PostList;
