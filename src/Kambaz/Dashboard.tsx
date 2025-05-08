import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home" className="wd-dashboard-course-link">
            <img src="/images/reactjs.jpg" width={200} alt="React JS" />
            <div>
              <h5>CS1234 React JS</h5>
              <p className="wd-dashboard-course-title">Full Stack software developer</p>
              <Link to="/Kambaz/Courses/1234/Home">Go</Link>
            </div>
          </Link>
        </div>
        
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/2345/Home" className="wd-dashboard-course-link">
            <img src="/images/nodejs.jpg" width={200} alt="Node JS" />
            <div>
              <h5>CS2345 Node JS</h5>
              <p className="wd-dashboard-course-title">Server Side Development</p>
              <Link to="/Kambaz/Courses/2345/Home">Go</Link>
            </div>
          </Link>
        </div>
        
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/3456/Home" className="wd-dashboard-course-link">
            <img src="/images/mongodb.jpg" width={200} alt="MongoDB" />
            <div>
              <h5>CS3456 MongoDB</h5>
              <p className="wd-dashboard-course-title">NoSQL Database</p>
              <Link to="/Kambaz/Courses/3456/Home">Go</Link>
            </div>
          </Link>
        </div>
        
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/4567/Home" className="wd-dashboard-course-link">
            <img src="/images/angular.jpg" width={200} alt="Angular" />
            <div>
              <h5>CS4567 Angular</h5>
              <p className="wd-dashboard-course-title">Front End Development</p>
              <Link to="/Kambaz/Courses/4567/Home">Go</Link>
            </div>
          </Link>
        </div>
        
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/5678/Home" className="wd-dashboard-course-link">
            <img src="/images/vue.jpg" width={200} alt="Vue JS" />
            <div>
              <h5>CS5678 Vue JS</h5>
              <p className="wd-dashboard-course-title">Modern Web Development</p>
              <Link to="/Kambaz/Courses/5678/Home">Go</Link>
            </div>
          </Link>
        </div>
        
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/6789/Home" className="wd-dashboard-course-link">
            <img src="/images/express.jpg" width={200} alt="Express JS" />
            <div>
              <h5>CS6789 Express JS</h5>
              <p className="wd-dashboard-course-title">Web API Development</p>
              <Link to="/Kambaz/Courses/6789/Home">Go</Link>
            </div>
          </Link>
        </div>
        
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/7890/Home" className="wd-dashboard-course-link">
            <img src="/images/typescript.jpg" width={200} alt="TypeScript" />
            <div>
              <h5>CS7890 TypeScript</h5>
              <p className="wd-dashboard-course-title">Typed JavaScript</p>
              <Link to="/Kambaz/Courses/7890/Home">Go</Link>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}