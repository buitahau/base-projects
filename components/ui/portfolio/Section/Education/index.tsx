export default function EducationSection() {
  return (
    <section className="education" id="education">
      <h1 className="heading">
        <i className="fas fa-graduation-cap"></i> My <span>Education</span>
      </h1>

      <p className="qoute">
        Education is not the learning of facts, but the training of the mind to
        think.
      </p>

      <div className="box-container">
        <div className="box">
          <div className="image">
            <img
              draggable="false"
              src="./assets/images/educat/college.jpg"
              alt=""
            />
          </div>
          <div className="content">
            <h3>
              Bachelor of Software Engineering in University Information
              Technology
            </h3>
            <h4>2007-2011 | Completed</h4>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <img
              className="false"
              src="./assets/images/educat/school.jpg"
              alt=""
            />
          </div>
          <div className="content">
            <h3>
              Master Bachelor of Software Engineering in University Information
              Technology
            </h3>
            <h4>2016-2018 | Completed</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
