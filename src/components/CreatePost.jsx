import { useContext, useRef } from "react";
import { PostListContext } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostListContext);

  const userIdElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const UserId = userIdElement.current.value;

    addPost(UserId);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="UserId" className="form-label">
          UserId
        </label>
        <input
          type="email"
          className="form-control"
          ref={userIdElement}
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter your id "
        />
      </div>
      <div className="mb-3">
        <label htmlFor="Post Title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Enter your title here "
        />
      </div>
      <div className="mb-3">
        <label htmlFor="Content" className="form-label">
          Content
        </label>
        <textarea
          type="text"
          className="form-control"
          rows="4"
          id="exampleInputPassword1"
          placeholder="Enter your content here "
        />
      </div>
      <div className="mb-3">
        <label htmlFor="Tags" className="form-label">
          Tags
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Enter your tags here "
        />
      </div>
      <div className="mb-3">
        <label htmlFor="Reactions" className="form-label">
          Reactions
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputPassword1"
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
