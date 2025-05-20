import CourseNavigation from "./Navigation";
import { Navigate, Route, Routes, useLocation } from "react-router";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import PeopleTable from "./People/Table";
import { FaAlignJustify, FaBars, FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid } from "react-icons/lia";
import { AiOutlineDashboard } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Courses() {
  const [showKambazNav, setShowKambazNav] = useState(false);
  const [showCourseNav, setShowCourseNav] = useState(false);
  const [activeButton, setActiveButton] = useState("Courses");
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
        <div className="offcanvas-header border-bottom">
          <div className="d-flex align-items-center">
            <img src="/logo.png" alt="N Logo" className="me-2" width="40" height="40" />
            <h5 className="offcanvas-title text-danger">CANVAS</h5>
          </div>
          <IoMdClose 
            className="btn-close cursor-pointer fs-4" 
            onClick={() => setShowKambazNav(false)}
          />
        </div>
        <div className="offcanvas-body p-0">
          <div className="list-group rounded-0">
            <Link to="/Kambaz/Dashboard" id="wd-dashboard-link"
              className={`list-group-item border-0 d-flex align-items-center py-3 ps-3 ${activeButton === "Dashboard" ? "bg-light" : ""}`}
              onClick={() => {
                setActiveButton("Dashboard");
                setShowKambazNav(false);
              }}>
              <div className="d-flex align-items-center">
                <AiOutlineDashboard className={`me-3 fs-4 ${activeButton === "Dashboard" ? "text-danger" : "text-secondary"}`} />
                <span className={activeButton === "Dashboard" ? "text-danger" : ""}>Dashboard</span>
              </div>
            </Link>
            <Link to="/Kambaz/Account" id="wd-account-link"
              className={`list-group-item border-0 d-flex align-items-center py-3 ps-3 ${activeButton === "Account" ? "bg-light" : ""}`}
              onClick={() => {
                setActiveButton("Account");
                setShowKambazNav(false);
              }}>
              <div className="d-flex align-items-center">
                <FaRegCircleUser className={`me-3 fs-4 ${activeButton === "Account" ? "text-danger" : "text-secondary"}`} />
                <span className={activeButton === "Account" ? "text-danger" : ""}>Account</span>
              </div>
            </Link>
            <Link to="/Kambaz/Courses" id="wd-courses-link"
              className={`list-group-item border-0 d-flex align-items-center py-3 ps-3 ${activeButton === "Courses" ? "bg-light" : ""}`}
              onClick={() => {
                setActiveButton("Courses");
                setShowKambazNav(false);
              }}>
              <div className="d-flex align-items-center">
                <LiaBookSolid className="me-3 fs-4 text-danger" />
                <span className="text-danger">Courses</span>
              </div>
            </Link>
            <Link to="/Kambaz/Calendar" id="wd-calendar-link"
              className={`list-group-item border-0 d-flex align-items-center py-3 ps-3 ${activeButton === "Calendar" ? "bg-light" : ""}`}
              onClick={() => {
                setActiveButton("Calendar");
                setShowKambazNav(false);
              }}>
              <div className="d-flex align-items-center">
                <IoCalendarOutline className="me-3 fs-4 text-danger" />
                <span className="text-danger">Calendar</span>
              </div>
            </Link>
            <Link to="/Kambaz/Inbox" id="wd-inbox-link"
              className={`list-group-item border-0 d-flex align-items-center py-3 ps-3 ${activeButton === "Inbox" ? "bg-light" : ""}`}
              onClick={() => {
                setActiveButton("Inbox");
                setShowKambazNav(false);
              }}>
              <div className="d-flex align-items-center">
                <FaInbox className="me-3 fs-4 text-danger" />
                <span className="text-danger">Inbox</span>
                <span className="ms-2 bg-danger text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '20px', height: '20px', fontSize: '0.7rem' }}>22</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      
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