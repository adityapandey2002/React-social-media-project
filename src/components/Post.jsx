import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { BiLike, BiDislike } from "react-icons/bi";
import { PostListContext } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostListContext);

  // Add validation to ensure post has required properties
  if (!post || typeof post !== 'object') {
    console.error('Invalid post data:', post);
    return null;
  }

  // Extract and validate post properties
  const {
    id,
    title,
    body,
    reactions,
    tags = [],
    views = 0,
    userId
  } = post;

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src="/images/1.jpeg" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">
          {title}
          <span
            className="btn position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(id)}
          >
            <AiFillDelete />
          </span>
        </h5>
        <p className="card-text">{body}</p>
        <div className="tags-container">
          {Array.isArray(tags) && tags.map((tag, index) => (
            <span key={`${id}-${tag}-${index}`} className="badge text-bg-primary hashtag">
              {tag}
            </span>
          ))}
        </div>
        <div className="reactions-container">
          <span className="reaction-tag like-tag">
            <BiLike className="reaction-icon" />
            {reactions?.likes || 0}
          </span>
          <span className="reaction-tag dislike-tag">
            <BiDislike className="reaction-icon" />
            {reactions?.dislikes || 0}
          </span>
          <span className="reaction-tag view-tag">
            👁️ {views}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Post;
