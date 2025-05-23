import { ListGroup } from "react-bootstrap";
import AssignmentsControls from "./AssignmentsControls";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import AssignmentsControlButtons from "./AssignmentsControlButtons"
import { HiMagnifyingGlass } from "react-icons/hi2";
import { LuNotebookPen } from "react-icons/lu";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";
import AssignmentDelete from "./AssignmentDelete";

export default function Assignments() {
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const { cid } = useParams();
  const formatDate = (dateString: any) => {
    return new Date(dateString)
      .toLocaleString('en-US', { month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true })
      .replace(',', '')
  };
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [show, setShow] = useState(false);
  const [assignmentToDelete, setAssignmentToDelete] = useState<any>(null);


  const handleClose = () => setShow(false);
  const handleShow = (assignment: any) => {
    setAssignmentToDelete(assignment);
    setShow(true);
  };

  return (
    <div id="wd-assignments">
      <div className="wd-assignments-controls-container mb-5">
        <span className="wd-search-icon">
          <HiMagnifyingGlass />
        </span>
        <input placeholder="Search..." id="wd-search-assignment" />
        {currentUser.role === "FACULTY" && <span className="float-end"><AssignmentsControls /></span>}
      </div>

      <div>

        <ListGroup className="rounded-0" id="wd-assignments-list">
          <ListGroup.Item className="wd-assignments p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3 wd-assignment-drag" /> Assignments <AssignmentsControlButtons />
            </div>
            <ListGroup>
              {assignments
                .filter((assignment: any) => assignment.course === cid)
                .map((assignment: any) => (
                  <ListGroup.Item className="wd-assignment p-3 ps-1 list-group-item rounded-0 d-flex align-items-center" key={assignment._id}>
                    <span className="wd-assignment-icon-container">
                      <BsGripVertical className="me-2 fs-3 wd-assignment-drag" />
                      <LuNotebookPen className="wd-assignment-icon" />
                    </span>
                    <div className="wd-assignment-text flex-grow-1">
                      {currentUser.role === "FACULTY" ? (
                        <a href={`#/Kambaz/Courses/${cid}/Assignments/${assignment._id}`} className="wd-assignment-name">
                          {assignment.title}
                        </a>
                      ) : (
                        <span className="wd-assignment-name">{assignment.title}</span>
                      )}
                      <label className="wd-assignment-description">
                        <span className="text-danger"> Multiple Modules </span> | <span className="wd-bold">
                          Not available until
                        </span> {formatDate(assignment.available_dt)} | <span className="wd-bold"> Due </span> {formatDate(assignment.due_dt)} | {assignment.points} pts</label>
                    </div>
                    {currentUser.role === "FACULTY" && <FaTrash className="me-1" onClick={() => handleShow(assignment)}></FaTrash>}
                    {currentUser.role === "FACULTY" && assignmentToDelete && <AssignmentDelete show={show} handleClose={handleClose} dialogTitle={`Delete \"${assignmentToDelete.title}\" Assignment?`} assignment={assignmentToDelete}></AssignmentDelete>}
                    <LessonControlButtons />
                  </ListGroup.Item>
                ))
              }
            </ListGroup>
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
}

