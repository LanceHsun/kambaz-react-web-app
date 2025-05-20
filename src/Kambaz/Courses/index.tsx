import CourseNavigation from "./Navigation";
import { Navigate, Route, Routes } from "react-router";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import PeopleTable from "./People/Table";
import { FaAlignJustify, FaBars } from "react-icons/fa";

export default function Courses() {
  return (
    <div id="wd-courses">
      <div className="d-flex align-items-center">
        <FaAlignJustify className="d-md-none me-2 fs-4" data-bs-toggle="offcanvas" data-bs-target="#kambazNav" />
        <h2 className="text-danger mb-0">Course 1234</h2>
        <FaBars className="d-md-none ms-auto fs-4" data-bs-toggle="offcanvas" data-bs-target="#courseNav" />
      </div>
      <hr />
      
      {/* Kambaz Navigation Offcanvas for mobile */}
      <div className="offcanvas offcanvas-start" id="kambazNav">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Kambaz Navigation</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
        </div>
        <div className="offcanvas-body">
          {/* This would contain the mobile version of KambazNavigation */}
        </div>
      </div>
      
      {/* Course Navigation Offcanvas for mobile */}
      <div className="offcanvas offcanvas-end" id="courseNav">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Course Navigation</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
        </div>
        <div className="offcanvas-body">
          <CourseNavigation />
        </div>
      </div>
      
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CourseNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="People" element={<PeopleTable />} />
            <Route path="Piazza" element={<h2>Piazza</h2>} />
            <Route path="Zoom" element={<h2>Zoom</h2>} />
            <Route path="Quizzes" element={<h2>Quizzes</h2>} />
            <Route path="Grades" element={<h2>Grades</h2>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}