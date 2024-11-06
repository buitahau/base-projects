import { Component, ReactNode } from 'react';

class AboutBox extends Component<{}, {}> {
  render(): ReactNode {
    return (
      <div id="about" className="about-box">
        <div className="about-a1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="title-box">
                  <h2>Tin's Family</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="row align-items-center about-main-info">
                  <div className="col-lg-8 col-md-6 col-sm-12">
                    <h2>
                      {' '}
                      About <span>Leida</span>
                    </h2>
                    <p>
                      Fusce convallis ante id purus sagittis malesuada. Sed erat
                      ipsum, suscipit sit amet auctor quis, vehicula ut leo.
                      Maecenas felis nulla, tincidunt ac blandit a, consectetur
                      quis elit. Nulla ut magna eu purus cursus sagittis.
                      Praesent fermentum tincidunt varius. Proin sit amet tempus
                      magna. Fusce pellentesque vulputate urna.{' '}
                    </p>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="about-img">
                      <img
                        className="img-fluid rounded"
                        src="./images/family/about-img-01.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="row align-items-center about-main-info">
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="about-img">
                      <img
                        className="img-fluid rounded"
                        src="./images/family/about-img-02.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-6 col-sm-12">
                    <h2>
                      {' '}
                      About <span>Dominic</span>
                    </h2>
                    <p>
                      Fusce convallis ante id purus sagittis malesuada. Sed erat
                      ipsum, suscipit sit amet auctor quis, vehicula ut leo.
                      Maecenas felis nulla, tincidunt ac blandit a, consectetur
                      quis elit. Nulla ut magna eu purus cursus sagittis.
                      Praesent fermentum tincidunt varius. Proin sit amet tempus
                      magna. Fusce pellentesque vulputate urna.{' '}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutBox;
