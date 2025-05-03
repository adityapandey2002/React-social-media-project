import "bootstrap-icons/font/bootstrap-icons.css";

const Sidebar = () => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 bg-body-tertiary sidebar"
      style={{ width: "4.5rem" }}
    >
      <a
        href="/"
        className="d-block p-3 link-body-emphasis text-decoration-none"
        data-bs-toggle="tooltip"
        data-bs-placement="right"
        data-bs-original-title="Icon-only"
      >
        <i
          className="bi bi-bootstrap"
          style={{ fontSize: "40px" }}
          aria-hidden="true"
        ></i>
        <span className="visually-hidden">Icon-only</span>
      </a>
      <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
        <li className="nav-item">
          <a
            href="#"
            className="nav-link active py-3 border-bottom rounded-0"
            aria-current="page"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            aria-label="Home"
            data-bs-original-title="Home"
          >
            <i
              className="bi bi-house"
              style={{ fontSize: "24px" }}
              aria-label="Home"
            ></i>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="nav-link py-3 border-bottom rounded-0"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            aria-label="Orders"
            data-bs-original-title="Orders"
          >
            <i
              className="bi bi-plus-square-fill"
              style={{ fontSize: "24px" }}
              aria-label="Orders"
            ></i>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="nav-link py-3 border-bottom rounded-0"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            aria-label="Dashboard"
            data-bs-original-title="Dashboard"
          >
            <i
              className="bi bi-speedometer2"
              style={{ fontSize: "24px" }}
              aria-label="Dashboard"
            ></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
