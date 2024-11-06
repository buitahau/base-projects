export default function WorkSection() {
  return (
    <section className="work" id="work">
      <h2 className="heading">
        <i className="fas fa-laptop-code"></i> Projects <span>Made</span>
      </h2>

      <div className="box-container"></div>
      <div className="viewall">
        <a href="/projects" className="btn">
          <span>View All</span>
          <i className="fas fa-arrow-right"></i>
        </a>
      </div>
    </section>
  );
}
