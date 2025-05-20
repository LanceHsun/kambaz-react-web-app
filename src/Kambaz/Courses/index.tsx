import CourseNavigation from "./Navigation";
import { Navigate, Route, Routes } from "react-router";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import PeopleTable from "./People/Table";
import { FaAlignJustify, FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

export default function Courses() {
  const [showKambazNav, setShowKambazNav] = useState(false);
  const [showCourseNav, setShowCourseNav] = useState(false);

  return (
    <div id="wd-courses" className="container-fluid p-0">
      <div className="d-flex align-items-center justify-content-between w-100 bg-dark text-white p-2">
        <div className="d-flex align-items-center">
          <FaAlignJustify 
            className="d-md-none me-2 fs-4 text-white cursor-pointer" 
            onClick={() => setShowKambazNav(true)}
          />
          <div className="text-center">
            CS5610 SU1 24 MON/FRI
            <div>Modules</div>
          </div>
        </div>
        <FaBars 
          className="d-md-none fs-4 text-white cursor-pointer" 
          onClick={() => setShowCourseNav(true)}
        />
      </div>
      
      {/* Kambaz Navigation Offcanvas for mobile */}
      <div className={`offcanvas offcanvas-start ${showKambazNav ? 'show' : ''}`} id="kambazNav">
        <div className="offcanvas-header">
          <img src="/canvas-logo.png" alt="Canvas" className="me-2" style={{ height: "40px" }} />
          <h5 className="offcanvas-title text-danger">CANVAS</h5>
          <IoMdClose 
            className="btn-close cursor-pointer fs-4" 
            onClick={() => setShowKambazNav(false)}
          />
        </div>
        <div className="offcanvas-body">
          <div className="list-group">
            <a href="#" className="list-group-item border-0 d-flex align-items-center text-danger">
              <span className="me-2">🏠</span> Dashboard
            </a>
            <a href="#" className="list-group-item border-0 d-flex align-items-center text-danger">
              <span className="me-2">👤</span> Account
            </a>
            <a href="#" className="list-group-item border-0 d-flex align-items-center text-danger">
              <span className="me-2">📚</span> Courses
            </a>
            <a href="#" className="list-group-item border-0 d-flex align-items-center text-danger">
              <span className="me-2">📅</span> Calendar
            </a>
            <a href="#" className="list-group-item border-0 d-flex align-items-center text-danger">
              <span className="me-2">📩</span> Inbox <span className="badge bg-danger rounded-pill ms-1">22</span>
            </a>
            <a href="#" className="list-group-item border-0 d-flex align-items-center text-danger">
              <span className="me-2">🕒</span> History
            </a>
            <a href="#" className="list-group-item border-0 d-flex align-items-center text-danger">
              <span className="me-2">❓</span> Help
            </a>
          </div>
        </div>
      </div>
      
      {/* Course Navigation Offcanvas for mobile */}
      <div className={`offcanvas offcanvas-end ${showCourseNav ? 'show' : ''}`} id="courseNav">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Course Navigation</h5>
          <IoMdClose 
            className="btn-close cursor-pointer fs-4" 
            onClick={() => setShowCourseNav(false)}
          />
        </div>
        <div className="offcanvas-body">
          <div className="list-group">
            <a href="#/Kambaz/Courses/1234/Home" className="list-group-item border-0 d-flex align-items-center text-danger">
              <span className="me-2">🏠</span> Home
            </a>
            <a href="#/Kambaz/Courses/1234/Modules" className="list-group-item border-0 d-flex align-items-center text-danger">
              <span className="me-2">📖</span> Modules
            </a>
            <a href="#/Kambaz/Courses/1234/Piazza" className="list-group-item border-0 d-flex align-items-center text-danger">
              <span className="me-2">📋</span> Piazza
            </a>
            <a href="#/Kambaz/Courses/1234/Zoom" className="list-group-item border-0 d-flex align-items-center text-danger">
              <span className="me-2">🎥</span> Zoom Meetings
            </a>
            <a href="#/Kambaz/Courses/1234/Assignments" className="list-group-item border-0 d-flex align-items-center text-danger">
              <span className="me-2">📝</span> Assignments
            </a>
            <a href="#/Kambaz/Courses/1234/Quizzes" className="list-group-item border-0 d-flex align-items-center text-danger">
              <span className="me-2">✅</span> Quizzes
            </a>
            <a href="#/Kambaz/Courses/1234/Grades" className="list-group-item border-0 d-flex align-items-center text-danger">
              <span className="me-2">📊</span> Grades
            </a>
            <a href="#/Kambaz/Courses/1234/People" className="list-group-item border-0 d-flex align-items-center text-danger">
              <span className="me-2">👥</span> People
            </a>
            <a href="#/Kambaz/Courses/1234/Settings" className="list-group-item border-0 d-flex align-items-center text-danger">
              <span className="me-2">⚙️</span> Settings
            </a>
          </div>
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
  );}