import { Form, redirect } from "react-router-dom";
import { PostListContext } from "../store/post-list-store";
import { useContext } from "react";

const CreatePost = () => {
  return (
    <Form method="POST" action="/create-post">
      <div className="mb-3">
        <label htmlFor="UserId" className="form-label">
          User ID
        </label>
        <input
          type="number"
          name="userId"
          className="form-control"
          id="userIdElement"
          placeholder="Enter your user ID"
          required
          min="1"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="Post Title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          name="title"
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
          name="body"
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
          name="tags"
          className="form-control"
          id="tagsElement"
          placeholder="Enter tags (space-separated)"
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
      >
        Create Post
      </button>
    </Form>
  );
};

export async function createPostAction({ request }) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);

  const newPost = {
    userId: parseInt(postData.userId),
    title: postData.title,
    body: postData.body,
    reactions: {
      likes: 0,
      dislikes: 0
    },
    tags: postData.tags ? postData.tags.split(" ").filter(tag => tag.trim() !== "") : [],
    views: 0
  };

  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: postData.title,
      body: postData.body,
      userId: parseInt(postData.userId)
    })
  });

  if (!response.ok) {
    throw new Error('Failed to create post');
  }

  const createdPost = await response.json();
  console.log(createdPost);

  // We need to return redirect here
  return redirect("/");
}

export default CreatePost;
