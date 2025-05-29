const LoadingSpinner = () => {
  return (
    <>
      <center>
        <div className="spinner-border" style={{ width: '10rem', height: '10rem' }} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </center>
    </>

  );
};

export default LoadingSpinner;