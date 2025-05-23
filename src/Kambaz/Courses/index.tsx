import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { Navigate, Routes, Route, useParams, useLocation } from "react-router";
import { FaAlignJustify } from "react-icons/fa6";
import PeopleTable from "./People/Table";
import ProtectedCourseRoute from "./ProtectedCourseRoute";
import { useSelector } from "react-redux";

export default function Courses() {
  const { cid } = useParams();
  const { courses } = useSelector((state: any) => state.coursesReducer);
  const { pathname } = useLocation();
  const course = courses.find((c: any) => c._id === cid);

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.name} &gt; {pathname.split("/").pop()}</h2> <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CourseNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<ProtectedCourseRoute><Navigate to="Home" /></ProtectedCourseRoute>} />
            <Route path="Home" element={<ProtectedCourseRoute><Home /></ProtectedCourseRoute>} />
            <Route path="Modules" element={<ProtectedCourseRoute><Modules /></ProtectedCourseRoute>} />
            <Route path="Piazza" element={<ProtectedCourseRoute><h2>Piazza</h2></ProtectedCourseRoute>} />
            <Route path="Zoom" element={<ProtectedCourseRoute><h2>Zoom</h2></ProtectedCourseRoute>} />
            <Route path="Assignments" element={<ProtectedCourseRoute><Assignments /></ProtectedCourseRoute>} />
            <Route path="Assignments/:aid" element={<ProtectedCourseRoute><AssignmentEditor /></ProtectedCourseRoute>} />
            <Route path="Quizzes" element={<ProtectedCourseRoute><h2>Quizzes</h2></ProtectedCourseRoute>} />
            <Route path="Grades" element={<ProtectedCourseRoute><h2>Grades</h2></ProtectedCourseRoute>} />
            <Route path="People" element={<ProtectedCourseRoute><PeopleTable /></ProtectedCourseRoute>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
