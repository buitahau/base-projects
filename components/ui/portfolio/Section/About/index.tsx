import { Zoom } from 'react-awesome-reveal';

export default function AboutSection() {
  return (
    <section className="about" id="about">
      <h2 className="heading">
        <i className="fas fa-user-alt"></i> About <span>Me</span>
      </h2>

      <div className="row">
        <div className="image">
          <img
            draggable="false"
            className="tilt"
            src="./images/web/profile.jpg"
            alt=""
          />
        </div>
        <div className="content">
          <Zoom>
            <h3>I'm Hau Bui</h3>
            <span className="tag">Full Stack Developer</span>
          </Zoom>

          <p>
            I am a Full-Stack developer based in Da Nang, VietNam. I am an
            Information Technology undergraduate from UIT. I am very passionate
            about improving my coding skills & developing applications &
            websites. Working for myself to improve my skills. Love to build
            Full-Stack clones.{' '}
          </p>

          <div className="box-container">
            <div className="box">
              <p>
                <span> email : </span> buitahau@gmail.com
              </p>
              <p>
                <span> place : </span> DaNang, VietNam (+84)933 656 289
              </p>
            </div>
          </div>

          <div className="resumebtn">
            <a
              href="https://drive.google.com/file/d/13Xrq29Qm1-lcxzKDv9dd2b43loBTDANN/view?usp=drive_link"
              target="_blank"
              className="btn"
            >
              <span>Resume</span>
              <i className="fas fa-chevron-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
