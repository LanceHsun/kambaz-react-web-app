import { ListGroup } from "react-bootstrap";
import AssignmentsControls from "./AssignmentsControls";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import AssignmentsControlButtons from "./AssignmentsControlButtons";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { LuNotebookPen } from "react-icons/lu";
import { Link, useParams } from "react-router-dom";
import * as db from "../../Database";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;
  
  const courseAssignments = assignments.filter((assignment: any) => assignment.course === cid);
  
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
              {courseAssignments.map((assignment: any) => (
                <ListGroup.Item key={assignment._id} className="wd-assignment p-3 ps-1 list-group-item rounded-0 d-flex align-items-center">
                  <span className="wd-assignment-icon-container">
                    <BsGripVertical className="me-2 fs-3 wd-assignment-drag" />
                    <LuNotebookPen className="wd-assignment-icon" />
                  </span>
                  <div className="wd-assignment-text flex-grow-1">
                    <Link to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`} className="wd-assignment-name">
                      {assignment.title}
                    </Link>
                    <label className="wd-assignment-description">
                      <span className="text-danger"> Multiple Modules </span> | <span className="wd-bold">
                        Not available until
                      </span> {new Date(assignment.availableDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} | <span className="wd-bold"> Due </span> {new Date(assignment.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} at 11:59pm | {assignment.points} pts
                    </label>
                  </div>
                  <LessonControlButtons />
                </ListGroup.Item>
              ))}
            </ListGroup>
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
}