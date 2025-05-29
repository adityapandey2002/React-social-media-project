import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreatePost, { createPostAction } from "./components/CreatePost.jsx";
import PostList from "./components/PostList.jsx";
import { postListLoader } from "./store/post-list-store.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <PostList />, loader: postListLoader },
      { path: "/create-post", element: <CreatePost />, action: createPostAction }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
