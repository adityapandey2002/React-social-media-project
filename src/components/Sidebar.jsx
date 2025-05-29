import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 bg-body-tertiary sidebar"
      style={{ width: "4.5rem" }}
    >
      <Link
        to="/"
        className="d-block p-3 link-body-emphasis text-decoration-none"
        title="Home"
      >
        <i
          className="bi bi-bootstrap"
          style={{ fontSize: "40px" }}
          aria-hidden="true"
        ></i>
        <span className="visually-hidden">Icon-only</span>
      </Link>
      <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
        <li className="nav-item">
          <Link
            to="/"
            className="nav-link py-3 border-bottom rounded-0"
            title="Home"
          >
            <i
              className="bi bi-house"
              style={{ fontSize: "24px" }}
            ></i>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/create-post"
            className="nav-link py-3 border-bottom rounded-0"
            title="Create Post"
          >
            <i
              className="bi bi-plus-square-fill"
              style={{ fontSize: "24px" }}
            ></i>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
