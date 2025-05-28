


const WelcomeMessage = ({ onGetPostsClick }) => {
  return (
    <div className="welcome-container rounded-3 border shadow-lg">
      <div className="welcome-content">
        <h1 className="display-4 fw-bold lh-1 text-body-emphasis">Welcome to Social Media App</h1>
        <p className="lead">
          Connect with friends, share your moments, and discover amazing content from around the world.
          Join our community today and start sharing your story!
        </p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">
            Get Started
          </button>
          <button type="button" className="btn btn-outline-secondary btn-lg px-4">
            Learn More
          </button>
          <button type="button" onClick={onGetPostsClick} className="btn btn-outline-secondary btn-lg px-4">
            Get Posts from server
          </button>
        </div>
      </div>
      <div className="welcome-image">
        <img
          src="/images/2.jpeg"
          alt="Social Media Connection"
          className="rounded-lg-3 welcome-img"
        />
      </div>
    </div>
  );
};

export default WelcomeMessage;

