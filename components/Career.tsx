import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My education <span>&</span>
          <br /> background
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in CSE (AI & ML)</h4>
                <h5>GALGOTIAS UNIVERSITY</h5>
              </div>
              <h3>Present</h3>
            </div>
            <p>
              Currently Pursuing – 4th Semester. Focusing on Artificial Intelligence and Machine Learning concepts, Data Structures, and Core CS principles.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Diploma in Computer Science</h4>
                <h5>GOVERNMENT POLYTECHNIC GOPALGANJ</h5>
              </div>
              <h3>Completed</h3>
            </div>
            <p>
              Completed Diploma in Computer Science, gaining foundational knowledge in programming, web development, and database management.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
