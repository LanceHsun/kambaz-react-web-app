import { Form, Row, Col } from "react-bootstrap";
import { HiOutlineX } from "react-icons/hi";
import { useParams, Link } from "react-router-dom";
import * as db from "../../Database";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignments = db.assignments;
  const assignment = assignments.find((a: any) => a._id === aid);

  if (!assignment) {
    return <div>Assignment not found</div>;
  }

  const formatDateForInput = (dateString: string) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}T23:59`;
  };

  const dueDate = formatDateForInput(assignment.dueDate);
  const availableFrom = formatDateForInput(assignment.availableDate);
  
  const availableUntil = (() => {
    const date = new Date(assignment.dueDate);
    date.setDate(date.getDate() + 7);
    return formatDateForInput(date.toISOString());
  })();

  return (
    <Form.Group id="wd-assignments-editor d-flex">
      <Form.Label htmlFor="wd-name" className="mb-2"><span className="wd-bold">Assignment Name</span></Form.Label>

      <div className="wd-textarea-container">
        <Form.Control id="wd-name" defaultValue={assignment.title} className="mb-3" />
        <Form.Control as="textarea" id="wd-description" className="mb-4 textarea" defaultValue={assignment.description}>
        </Form.Control>
      </div>

      <Col className="d-flex">
        <Col xs="2" className="text-end">
          <Row className="wd-row">
            <Form.Label htmlFor="wd-points">Points</Form.Label>
          </Row>
          <Row className="wd-row">
            <Form.Label htmlFor="wd-group">Assignment Group </Form.Label>
          </Row>
          <Row className="wd-row">
            <Form.Label htmlFor="wd-display-grade-as">Display Grade As </Form.Label>
          </Row>
          <Row className="wd-row">
            <Form.Label htmlFor="wd-submission-type" className="me-1">Submission Type </Form.Label>
          </Row>
        </Col>

        <Col xs="7" className="text-start ms-3">
          <Row className="wd-row">
            <Form.Control id="wd-points" className="wd-assignment-editor-dropdown" defaultValue={assignment.points} />
          </Row>
          <Row className="wd-row">
            <Form.Select id="wd-group" className="wd-assignment-editor-dropdown">
              <option value="ASSIGNMENTS">Assignments</option>
              <option value="QUIZZES">Quizzes</option>
              <option value="EXAMS">Exams</option>
              <option value="PROJECTS">Projects</option>
            </Form.Select>
          </Row>
          <Row className="wd-row">
            <Form.Select id="wd-display-grade-as" className="wd-assignment-editor-dropdown">
              <option value="PERCENTAGE">Percentage</option>
              <option value="POINTS">Points</option>
              <option value="COMPLETE/INCOMPLETE">Complete/Incomplete</option>
            </Form.Select>
          </Row>
          <div className="border wd-submission-type-container">
            <Row className="wd-row">
              <Form.Select id="wd-submission-type" className="w-50 ms-2 mt-2">
                <option value="ONLINE">Online</option>
                <option value="NO-SUBMISSION">No Submission</option>
                <option value="IN-PERSON">In-Person</option>
              </Form.Select>
            </Row>

            <Row className="wd-row-small mt-3">
              <Form.Label className="wd-bold ms-2">Online Entry Options</Form.Label>
            </Row>

            <div className="ms-2">
              <Row className="wd-row-small d-flex align-items-center">
                <Col className="d-flex align-items-center" xs="auto">
                  <Form.Check type="checkbox" name="wd-submission-type" id="wd-text-entry" className="me-2 mb-0" />
                  <Form.Label htmlFor="wd-text-entry" className="mb-0">Text Entry</Form.Label>
                </Col>
              </Row>
              
              <Row className="wd-row-small d-flex align-items-center">
                <Col className="d-flex align-items-center" xs="auto">
                  <Form.Check type="checkbox" name="wd-submission-type" id="wd-website-url" className="me-2 mb-0" defaultChecked />
                  <Form.Label htmlFor="wd-website-url" className="mb-0">Website URL</Form.Label>
                </Col>
              </Row>
              
              <Row className="wd-row-small d-flex align-items-center">
                <Col className="d-flex align-items-center" xs="auto">
                  <Form.Check type="checkbox" name="wd-submission-type" id="wd-media-recordings" className="me-2 mb-0" />
                  <Form.Label htmlFor="wd-media-recordings" className="mb-0">Media Recordings</Form.Label>
                </Col>
              </Row>
              
              <Row className="wd-row-small d-flex align-items-center">
                <Col className="d-flex align-items-center" xs="auto">
                  <Form.Check type="checkbox" name="wd-submission-type" id="wd-student-annotation" className="me-2 mb-0" />
                  <Form.Label htmlFor="wd-student-annotation" className="mb-0">Student Annotation</Form.Label>
                </Col>
              </Row>
              
              <Row className="wd-row-small d-flex align-items-center">
                <Col className="d-flex align-items-center" xs="auto">
                  <Form.Check type="checkbox" name="wd-submission-type" id="wd-file-upload" className="me-2 mb-0" />
                  <Form.Label htmlFor="wd-file-upload" className="mb-0">File Uploads</Form.Label>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Col>

      <div className="mt-4">
        <Col className="d-flex">
          <Col xs="2" className="text-end">
            <Row className="wd-row-small">
              <Form.Label>Assign</Form.Label>
            </Row>
          </Col>
          <Col xs="7" className="text-start ms-3">
            <div className="border wd-assignment-dates-container">
              <Row className="wd-row-small mt-2">
                <Form.Label htmlFor="wd-assign-to" className="wd-bold ms-2">Assign to </Form.Label>
              </Row>
              <Row className="wd-row ms-2">
                <div className="border wd-everyone-container">
                  <div className="wd-everyone-tag-box border">
                    <span className="wd-everyone-tag ms-1">Everyone</span>
                    <HiOutlineX />
                  </div>
                </div>
              </Row>
              <Row className="wd-row-small">
                <Form.Label htmlFor="wd-due-date" className="wd-bold ms-2">Due</Form.Label>
              </Row>
              <Row className="wd-row-small ms-2 mb-3">
                <Form.Control type="datetime-local" defaultValue={dueDate} id="wd-due-date" className="wd-date-time" />
              </Row>
              <Row className="wd-row-small g-2">
                <Col xs={12} md={6} className="d-flex flex-column ms-2">
                  <Form.Label htmlFor="wd-available-from" className="wd-bold">
                    Available From
                  </Form.Label>
                  <Form.Control
                    type="datetime-local"
                    defaultValue={availableFrom}
                    id="wd-available-from"
                    className="wd-date-time"
                  />
                </Col>
                <Col xs={12} md={6} className="d-flex flex-column">
                  <Form.Label htmlFor="wd-available-until" className="wd-bold">
                    Until
                  </Form.Label>
                  <Form.Control
                    type="datetime-local"
                    defaultValue={availableUntil}
                    id="wd-available-until"
                    className="wd-date-time"
                  />
                </Col>
              </Row>
            </div>
          </Col>
        </Col>
      </div>

      <hr />
      <div className="text-end">
        <Link to={`/Kambaz/Courses/${cid}/Assignments`} className="btn btn-secondary me-2" id="wd-editor-cancel">Cancel</Link>
        <Link to={`/Kambaz/Courses/${cid}/Assignments`} className="btn btn-danger" id="wd-editor-save">Save</Link>
      </div>
    </Form.Group>
  );
}