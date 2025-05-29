import { useContext, useRef, useState } from "react";
import { PostListContext } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostListContext);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const userId = userIdElement.current.value;
      const postBody = postBodyElement.current.value;
      const tags = tagsElement.current.value.split(" ").filter(tag => tag.trim() !== "");
      const postTitle = postTitleElement.current.value;

      const newPost = {
        userId: parseInt(userId),
        title: postTitle,
        body: postBody,
        reactions: {
          likes: 0,
          dislikes: 0
        },
        tags: tags,
        views: 0
      };

      const response = await fetch('https://dummyjson.com/posts/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPost)
      });

      if (!response.ok) {
        throw new Error('Failed to create post');
      }

      const createdPost = await response.json();
      addPost(createdPost);

      // Clear form
      userIdElement.current.value = "";
      postBodyElement.current.value = "";
      tagsElement.current.value = "";
      postTitleElement.current.value = "";
      reactionsElement.current.value = "";
    } catch (error) {
      console.error('Error creating post:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="UserId" className="form-label">
          UserId
        </label>
        <input
          type="number"
          ref={userIdElement}
          className="form-control"
          id="userIdElement"
          placeholder="Enter your id"
          required
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
          placeholder="Enter your title"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="Content" className="form-label">
          Content
        </label>
        <textarea
          ref={postBodyElement}
          className="form-control"
          rows="4"
          id="postBodyElement"
          placeholder="Enter your content"
          required
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
          placeholder="Enter tags (space-separated)"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="Reactions" className="form-label">
          Reactions
        </label>
        <input
          type="number"
          ref={reactionsElement}
          className="form-control"
          id="reactionsElement"
          placeholder="Number of reactions"
          min="0"
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Creating...' : 'Create Post'}
      </button>
    </form>
  );
};

export default CreatePost;
