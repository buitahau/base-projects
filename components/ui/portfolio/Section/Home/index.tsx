import React from 'react';
import TypedTextHook from '../../TypedTextHook';
import { Fade } from 'react-awesome-reveal';

class HomeSection extends React.Component {
  render() {
    return (
      <section className="home" id="home">
        <div id="particles-js"></div>

        <div className="content">
          <Fade>
            <h2>
              Hi There,
              <br /> I'm Hau <span>Bui</span>
            </h2>
          </Fade>
          <p>
            i am into <TypedTextHook />
          </p>
          <a href="#about" className="btn">
            <span>About Me</span>
            <i className="fas fa-arrow-circle-down"></i>
          </a>
          <div className="socials">
            <ul className="social-icons">
              <li>
                <a
                  className="facebook"
                  aria-label="Facebook"
                  href="https://www.facebook.com/buitahau"
                  target="_blank"
                >
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a
                  className="github"
                  aria-label="GitHub"
                  href="https://github.com/buitahau"
                  target="_blank"
                >
                  <i className="fab fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="image">
          <img
            draggable="false"
            className="tilt"
            src="/images/web/avatar.jpg"
            alt=""
          />
        </div>
      </section>
    );
  }
}

export default HomeSection;
