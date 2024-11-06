export default function EventBox() {
  return (
    <div id="events" className="events-box">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="title-box">
              <h2>Events</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="event-inner">
              <div className="event-img">
                <img
                  className="img-fluid"
                  src="./images/family/event-img-01.jpg"
                  alt=""
                />
              </div>
              <h2>2 June 2018 Engagement</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard{' '}
              </p>
              <a href="#">See location</a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="event-inner">
              <div className="event-img">
                <img
                  className="img-fluid"
                  src="./images/family/event-img-02.jpg"
                  alt=""
                />
              </div>
              <h2>3 June 2018 Main Ceremony </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard{' '}
              </p>
              <a href="#">See location</a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="event-inner">
              <div className="event-img">
                <img
                  className="img-fluid"
                  src="./images/family/event-img-03.jpg"
                  alt=""
                />
              </div>
              <h2>4 June 2018 Wedding party </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard{' '}
              </p>
              <a href="#">See location </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
