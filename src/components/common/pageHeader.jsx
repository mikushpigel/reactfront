const PageHeader = ({ title, description }) => {
  return (
    <>
      <div className="container-fluid">
        <div className="row text-center">
          <div>
            <h1>
              {title} Mika <i className="bi bi-camera-reels-fill"></i> Editing
            </h1>
          </div>
        </div>
        <div className="row text-center align-items-center d-flex justify-content-center">
          <div className="col-5">
            <h6>Adobe Premiere Pro</h6>
          </div>
          <div className="">
            <h4>&</h4>
          </div>
          <div className="col-5">
            <h6>After Effects</h6>
          </div>
        </div>
        {description && (
          <div className="row text-center">
            <div>
              <p>{description}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PageHeader;
