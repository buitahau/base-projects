export default function FooterSection() {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>Hau Bui's Portfolio</h3>
          <p>
            Thank you for visiting my personal portfolio website. Connect with
            me over socials. <br /> <br /> Keep Rising 🚀. Connect with me over
            live chat!
          </p>
        </div>

        <div className="box">
          <h3>quick links</h3>
          <a href="#home">
            <i className="fas fa-chevron-circle-right"></i> home
          </a>
          <a href="#about">
            <i className="fas fa-chevron-circle-right"></i> about
          </a>
          <a href="#skills">
            <i className="fas fa-chevron-circle-right"></i> skills
          </a>
          <a href="#education">
            <i className="fas fa-chevron-circle-right"></i> education
          </a>
          <a href="#work">
            <i className="fas fa-chevron-circle-right"></i> work
          </a>
          <a href="#experience">
            <i className="fas fa-chevron-circle-right"></i> experience
          </a>
        </div>

        <div className="box">
          <h3>contact info</h3>
          <p>
            {' '}
            <i className="fas fa-phone"></i>+91 XXX-XXX-XXXX
          </p>
          <p>
            {' '}
            <i className="fas fa-envelope"></i>buitahau@gmail.com
          </p>
          <p>
            {' '}
            <i className="fas fa-map-marked-alt"></i>DaNang, VietNam-412206
          </p>
          <div className="share">
            <a
              href="https://www.linkedin.com/in/buitahau"
              className="fab fa-linkedin"
              aria-label="LinkedIn"
              target="_blank"
            ></a>
            <a
              href="https://github.com/buitahau"
              className="fab fa-github"
              aria-label="GitHub"
              target="_blank"
            ></a>
            <a
              href="mailto:buitahau@gmail.com"
              className="fas fa-envelope"
              aria-label="Mail"
              target="_blank"
            ></a>
          </div>
        </div>
      </div>

      <h1 className="credit">
        Designed with <i className="fa fa-heart pulse"></i> by{' '}
        <a href="https://www.linkedin.com/in/buitahau"> Hau Bui</a>
      </h1>
    </section>
  );
}
