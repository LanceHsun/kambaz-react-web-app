import { FaPlus, FaSearch } from "react-icons/fa";

export default function Assignments() {
  return (
    <div id="wd-assignments" className="p-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="position-relative w-25">
          <FaSearch className="position-absolute ms-2" style={{ top: "10px" }} />
          <input 
            placeholder="Search for Assignments"
            id="wd-search-assignment" 
            className="form-control ps-4"
          />
        </div>
        <div>
          <button id="wd-add-assignment-group" className="btn btn-danger ms-2">
            <FaPlus className="me-1" /> Group
          </button>
          <button id="wd-add-assignment" className="btn btn-danger ms-2">
            <FaPlus className="me-1" /> Assignment
          </button>
        </div>
      </div>

      <h3 id="wd-assignments-title" className="d-flex justify-content-between align-items-center">
        ASSIGNMENTS 40% of Total 
        <button className="btn btn-light">+</button>
      </h3>
      
      <ul id="wd-assignment-list" className="list-group">
        <li className="wd-assignment-list-item list-group-item border-0 border-start border-success border-5">
          <a href="#/Kambaz/Courses/1234/Assignments/123"
             className="wd-assignment-link text-dark fw-bold text-decoration-none">
            A1 - ENV + HTML
          </a><br />
          <small className="text-muted">
            Multiple Modules | <b>Not available until</b> May 6 at 12:00am | Due May 13 at 11:59pm | 100 pts
          </small>
        </li>
        <li className="wd-assignment-list-item list-group-item border-0 border-start border-success border-5">
          <a href="#/Kambaz/Courses/1234/Assignments/234"
             className="wd-assignment-link text-dark fw-bold text-decoration-none">
            A2 - CSS + BOOTSTRAP
          </a><br />
          <small className="text-muted">
            Multiple Modules | <b>Not available until</b> May 13 at 12:00am | Due May 20 at 11:59pm | 100 pts
          </small>
        </li>
        <li className="wd-assignment-list-item list-group-item border-0 border-start border-success border-5">
          <a href="#/Kambaz/Courses/1234/Assignments/345"
             className="wd-assignment-link text-dark fw-bold text-decoration-none">
            A3 - JAVASCRIPT + REACT
          </a><br />
          <small className="text-muted">
            Multiple Modules | <b>Not available until</b> May 20 at 12:00am | Due May 27 at 11:59pm | 100 pts
          </small>
        </li>
      </ul>
    </div>
  );
}