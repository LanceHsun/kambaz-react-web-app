import CourseNavigation from "./Navigation";
import { Navigate, Route, Routes, useLocation } from "react-router";
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
  const location = useLocation();
  
  const getCurrentPageName = () => {
    const path = location.pathname.split('/').pop() || 'Home';
    return path.charAt(0).toUpperCase() + path.slice(1);
  };

  return (
    <div id="wd-courses" className="container-fluid p-0">
      <div className="d-flex align-items-center justify-content-between w-100 p-2 border-bottom">
        <div className="d-flex align-items-center">
          <FaAlignJustify 
            className="d-md-none me-2 fs-4 text-danger cursor-pointer" 
            onClick={() => setShowKambazNav(true)}
          />
          <div>
            <span className="text-danger">CS5610 SU1 24 MON/FRI</span>
            <span className="mx-2">›</span>
            <span>{getCurrentPageName()}</span>
          </div>
        </div>
        <div>
          <button className="btn btn-outline-secondary me-2 d-none d-md-inline-block">
            Student View
          </button>
          <FaBars 
            className="d-md-none fs-4 text-danger cursor-pointer" 
            onClick={() => setShowCourseNav(true)}
          />
        </div>
      </div>
      
      <div className={`offcanvas offcanvas-start ${showKambazNav ? 'show' : ''}`} id="kambazNav">
        <div className="offcanvas-header">
          <div className="d-flex align-items-center">
            <img src="/logo.png" alt="N Logo" className="me-2" width="40" height="40" />
            <h5 className="offcanvas-title">N</h5>
          </div>
          <IoMdClose 
            className="btn-close cursor-pointer fs-4" 
            onClick={() => setShowKambazNav(false)}
          />
        </div>
        <div className="offcanvas-body p-0">
          <div className="list-group rounded-0">
            <a href="#" className="list-group-item border-0 d-flex align-items-center py-3 ps-3">
              <div className="d-flex flex-column align-items-center text-center">
                <div className="rounded-circle bg-secondary text-white d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', fontSize: '1.5rem' }}>👤</div>
                <small>Account</small>
              </div>
            </a>
            <a href="#" className="list-group-item border-0 d-flex align-items-center py-3 ps-3">
              <div className="d-flex flex-column align-items-center text-center">
                <div className="rounded-circle bg-danger text-white d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', fontSize: '1.5rem' }}>📊</div>
                <small>Dashboard</small>
              </div>
            </a>
            <a href="#" className="list-group-item border-0 d-flex align-items-center py-3 ps-3">
              <div className="d-flex flex-column align-items-center text-center">
                <div className="rounded-circle bg-danger text-white d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', fontSize: '1.5rem' }}>📚</div>
                <small>Courses</small>
              </div>
            </a>
            <a href="#" className="list-group-item border-0 d-flex align-items-center py-3 ps-3">
              <div className="d-flex flex-column align-items-center text-center">
                <div className="rounded-circle bg-secondary text-white d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', fontSize: '1.5rem' }}>📅</div>
                <small>Calendar</small>
              </div>
            </a>
            <a href="#" className="list-group-item border-0 d-flex align-items-center py-3 ps-3">
              <div className="d-flex flex-column align-items-center text-center position-relative">
                <div className="rounded-circle bg-secondary text-white d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', fontSize: '1.5rem' }}>📩</div>
                <span className="position-absolute bg-danger text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '20px', height: '20px', fontSize: '0.7rem', top: '0', right: '-5px' }}>22</span>
                <small>Inbox</small>
              </div>
            </a>
          </div>
        </div>
      </div>
      
      {/* Course Navigation Offcanvas for mobile */}
      <div className={`offcanvas offcanvas-end ${showCourseNav ? 'show' : ''}`} id="courseNav">
        <div className="offcanvas-header border-bottom">
          <h5 className="offcanvas-title">CS5610 SU1 24 MON/FRI</h5>
          <IoMdClose 
            className="btn-close cursor-pointer fs-4" 
            onClick={() => setShowCourseNav(false)}
          />
        </div>
        <div className="offcanvas-body p-0">
          <div className="list-group rounded-0">
            <a href="#/Kambaz/Courses/1234/Home" className="list-group-item border-0 text-danger py-2 ps-3">
              Home
            </a>
            <a href="#/Kambaz/Courses/1234/Modules" className="list-group-item border-0 bg-light active py-2 ps-3">
              Modules
            </a>
            <a href="#/Kambaz/Courses/1234/Piazza" className="list-group-item border-0 text-danger py-2 ps-3">
              Piazza
            </a>
            <a href="#/Kambaz/Courses/1234/Zoom" className="list-group-item border-0 text-danger py-2 ps-3">
              Zoom Meetings
            </a>
            <a href="#/Kambaz/Courses/1234/Assignments" className="list-group-item border-0 text-danger py-2 ps-3">
              Assignments
            </a>
            <a href="#/Kambaz/Courses/1234/Quizzes" className="list-group-item border-0 text-danger py-2 ps-3">
              Quizzes
            </a>
            <a href="#/Kambaz/Courses/1234/Grades" className="list-group-item border-0 text-danger py-2 ps-3">
              Grades
            </a>
            <a href="#/Kambaz/Courses/1234/People" className="list-group-item border-0 text-danger py-2 ps-3">
              People
            </a>
            <a href="#/Kambaz/Courses/1234/Settings" className="list-group-item border-0 text-danger py-2 ps-3">
              Settings
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
  );
}