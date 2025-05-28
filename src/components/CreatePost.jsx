import { useContext, useRef } from "react";
import { PostListContext } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostListContext);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");
    const postTitle = postTitleElement.current.value;

    userIdElement.current.value = "";
    postBodyElement.current.value = "";
    tagsElement.current.value = "";
    postTitleElement.current.value = "";
    reactionsElement.current.value = "";

    addPost(userId, postTitle, postBody, reactions, tags);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="UserId" className="form-label">
          UserId
        </label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control"
          id="userIdElement"
          placeholder="Enter your id "
        />
      </div>
      <div className="mb-3">
        <label htmlFor="Post Title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={postTitleElement}
          className="form-control"
          id="postTitleElement"
          placeholder="Enter your title here "
        />
      </div>
      <div className="mb-3">
        <label htmlFor="Content" className="form-label">
          Content
        </label>
        <textarea
          type="text"
          ref={postBodyElement}
          className="form-control"
          rows="4"
          id="postBodyElement"
          placeholder="Enter your content here "
        />
      </div>
      <div className="mb-3">
        <label htmlFor="Tags" className="form-label">
          Tags
        </label>
        <input
          type="text"
          ref={tagsElement}
          className="form-control"
          id="tagsElement"
          placeholder="Enter your tags here "
        />
      </div>
      <div className="mb-3">
        <label htmlFor="Reactions" className="form-label">
          Reactions
        </label>
        <input
          type="text"
          ref={reactionsElement}
          className="form-control"
          id="reactionsElement"
          placeholder="Enter your reactions here "
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default CreatePost;
