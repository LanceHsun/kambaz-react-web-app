import { Link, useLocation } from "react-router-dom";

export default function CourseNavigation() {
  const location = useLocation();
  const pathParts = location.pathname.split('/');
  const currentPath = pathParts[pathParts.length - 1];
  
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      <Link to="/Kambaz/Courses/1234/Home" id="wd-course-home-link"
        className={`list-group-item border border-0 ${currentPath === 'Home' ? 'active' : 'text-danger'}`}>
        Home
      </Link><br />
      <Link to="/Kambaz/Courses/1234/Modules" id="wd-course-modules-link"
        className={`list-group-item border border-0 ${currentPath === 'Modules' ? 'active' : 'text-danger'}`}>
        Modules
      </Link><br />
      <Link to="/Kambaz/Courses/1234/Piazza" id="wd-course-piazza-link"
        className={`list-group-item border border-0 ${currentPath === 'Piazza' ? 'active' : 'text-danger'}`}>
        Piazza
      </Link><br />
      <Link to="/Kambaz/Courses/1234/Zoom" id="wd-course-zoom-link"
        className={`list-group-item border border-0 ${currentPath === 'Zoom' ? 'active' : 'text-danger'}`}>
        Zoom
      </Link><br />
      <Link to="/Kambaz/Courses/1234/Assignments" id="wd-course-assignments-link"
        className={`list-group-item border border-0 ${currentPath === 'Assignments' ? 'active' : 'text-danger'}`}>
        Assignments
      </Link><br />
      <Link to="/Kambaz/Courses/1234/Quizzes" id="wd-course-quizzes-link"
        className={`list-group-item border border-0 ${currentPath === 'Quizzes' ? 'active' : 'text-danger'}`}>
        Quizzes
      </Link><br />
      <Link to="/Kambaz/Courses/1234/Grades" id="wd-course-grades-link"
        className={`list-group-item border border-0 ${currentPath === 'Grades' ? 'active' : 'text-danger'}`}>
        Grades
      </Link><br />
      <Link to="/Kambaz/Courses/1234/People" id="wd-course-people-link"
        className={`list-group-item border border-0 ${currentPath === 'People' ? 'active' : 'text-danger'}`}>
        People
      </Link><br />
    </div>
  );
}