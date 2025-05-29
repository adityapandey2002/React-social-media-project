import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostListContext } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postListData, addInitialPosts } = useContext(PostListContext);
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


  return (
    <>
      {fetching && <LoadingSpinner />}
      {postListData.length === 0 && <WelcomeMessage /*onGetPostsClick={handleOnGetPostsClicked}*/ />}
      <div className="post-list-container">
        {postListData.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>

    </>
  );
};

export default PostList;
