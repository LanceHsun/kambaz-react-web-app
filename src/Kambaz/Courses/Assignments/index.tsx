import { ListGroup } from "react-bootstrap";
import AssignmentsControls from "./AssignmentsControls";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import AssignmentsControlButtons from "./AssignmentsControlButtons"
import { HiMagnifyingGlass } from "react-icons/hi2";
import { LuNotebookPen } from "react-icons/lu";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <div className="wd-assignments-controls-container mb-5">
        <span className="wd-search-icon">
          <HiMagnifyingGlass />
        </span>
        <input placeholder="Search..." id="wd-search-assignment" />
        <span className="float-end"><AssignmentsControls /></span>
      </div>

      <div>

        <ListGroup className="rounded-0" id="wd-assignments-list">
          <ListGroup.Item className="wd-assignments p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3 wd-assignment-drag" /> Assignments <AssignmentsControlButtons />
            </div>
            <ListGroup>
              <ListGroup.Item className="wd-assignment p-3 ps-1 list-group-item rounded-0 d-flex align-items-center">
                <span className="wd-assignment-icon-container">
                  <BsGripVertical className="me-2 fs-3 wd-assignment-drag" />
                  <LuNotebookPen className="wd-assignment-icon" />
                </span>
                <div className="wd-assignment-text flex-grow-1">
                  <a href="#/Kambaz/Courses/1234/Assignments/123" className="wd-assignment-name">A1 - ENV + HTML </a>
                  <label className="wd-assignment-description">
                    <span className="text-danger"> Multiple Modules </span> | <span className="wd-bold">
                      Not available until
                    </span> May 6 at 12:00am | <span className="wd-bold"> Due </span> May 13 at 11:59pm | 100 pts</label>
                </div>
                <LessonControlButtons />
              </ListGroup.Item>
              <ListGroup.Item className="wd-assignment p-3 ps-1 list-group-item rounded-0 d-flex align-items-center">
                <span className="wd-assignment-icon-container">
                  <BsGripVertical className="me-2 fs-3 wd-assignment-drag" />
                  <LuNotebookPen className="wd-assignment-icon" />
                </span>
                <div className="wd-assignment-text flex-grow-1">
                  <a href="#/Kambaz/Courses/1234/Assignments/123" className="wd-assignment-name">A2 - CSS + BOOTSTRAP</a>
                  <label className="wd-assignment-description">
                    <span className="text-danger"> Multiple Modules </span> | <span className="wd-bold">
                      Not available until
                    </span> May 13 at 12:00am | <span className="wd-bold"> Due </span> May 20 at 11:59pm | 100 pts</label>
                </div>
                <LessonControlButtons />
              </ListGroup.Item>
              <ListGroup.Item className="wd-assignment p-3 ps-1 list-group-item rounded-0 d-flex align-items-center">
                <span className="wd-assignment-icon-container">
                  <BsGripVertical className="me-2 fs-3 wd-assignment-drag" />
                  <LuNotebookPen className="wd-assignment-icon" />
                </span>
                <div className="wd-assignment-text flex-grow-1">
                  <a href="#/Kambaz/Courses/1234/Assignments/123" className="wd-assignment-name">A3 - JAVASCRIPT + REACT</a>
                  <label className="wd-assignment-description">
                    <span className="text-danger"> Multiple Modules </span> | <span className="wd-bold">
                      Not available until
                    </span> May 20 at 12:00am | <span className="wd-bold"> Due </span> May 27 at 11:59pm | 100 pts</label>
                </div>
                <LessonControlButtons />
              </ListGroup.Item>
            </ListGroup>
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
}
