import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/image1.jpg" width={200} />
            <div>
              <h5> ARTF1250 </h5>
              <p className="wd-dashboard-course-title">
                Design  </p>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/image2.jpg" width={200} />
            <div>
              <h5> CS3000 </h5>
              <p className="wd-dashboard-course-title">
                Algorithms  </p>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/image3.jpg" width={200} />
            <div>
              <h5> ARTF1234 </h5>
              <p className="wd-dashboard-course-title">
                Random Class  </p>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/image4.jpg" width={200} />
            <div>
              <h5> CS2345 </h5>
              <p className="wd-dashboard-course-title">
                Random Class  </p>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/image5.jpg" width={200} />
            <div>
              <h5> CS3456 </h5>
              <p className="wd-dashboard-course-title">
                Random Class  </p>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/image6.jpg" width={200} />
            <div>
              <h5> ARTG2262 </h5>
              <p className="wd-dashboard-course-title">
                Prototyping with Code  </p>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/image7.jpg" width={200} />
            <div>
              <h5> CS3540 </h5>
              <p className="wd-dashboard-course-title">
                Game Programming  </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
);}
