import { Form, Row, Col, Button } from "react-bootstrap";
import { HiOutlineX } from "react-icons/hi";


export default function AssignmentEditor() {
  return (
    <Form.Group id="wd-assignments-editor d-flex">
      <Form.Label htmlFor="wd-name" className="mb-3"><span className="wd-bold">Assignment Name</span></Form.Label>

      <div className="wd-textarea-container">
        <Form.Control id="wd-name" defaultValue="A1 - ENV + HTML" className="mb-3" />
        <Form.Control as="textarea" id="wd-description" className="mb-5 textarea">
          The assignment is available online Submit a link to the landing page of your Web application running on Netlify.
          The landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kanbas application
          Links to all relevant source code repositories
          The Kanbas application should include a link to navigate back to the landing page.
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
          <Row className="wd-row">

          </Row>
        </Col>


        <Col xs="7" className="text-start ms-3">
          <Row className="wd-row">
            <Form.Control id="wd-points" className="wd-assignment-editor-dropdown" defaultValue={100} />
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
              <Form.Select id="wd-submission-type" className="w-50 ms-2">
                <option value="ONLINE">Online</option>
                <option value="NO-SUBMISSION">No Submission</option>
                <option value="IN-PERSON">In-Person</option>
              </Form.Select>

            </Row>
            <Row className="wd-row-small">
              <Form.Label className="wd-bold">Online Entry Options</Form.Label>
            </Row>
            <Row className="wd-row-small flex-nowrap">
              <Form.Check type="checkbox" name="wd-submission-type" id="wd-text-entry" className="w-auto" />
              <Form.Label htmlFor="wd-text-entry" >Text Entry</Form.Label>
            </Row>
            <Row className="wd-row-small flex-nowrap">
              <Form.Check type="checkbox" name="wd-submission-type" id="wd-website-url" className="w-auto" />
              <Form.Label htmlFor="wd-website-url" className="me-2">Website URL</Form.Label>
            </Row>
            <Row className="wd-row-small flex-nowrap">
              <Form.Check type="checkbox" name="wd-submission-type" id="wd-media-recordings" className="w-auto" />
              <Form.Label htmlFor="wd-media-recordings" className="me-2">Media Recordings</Form.Label>
            </Row>
            <Row className="wd-row-small flex-nowrap">
              <Form.Check type="checkbox" name="wd-submission-type" id="wd-student-annotation" className="w-auto" />
              <Form.Label htmlFor="wd-student-annotation" className="me-2">Student Annotation</Form.Label>
            </Row>
            <Row className="wd-row-small flex-nowrap">
              <Form.Check type="checkbox" name="wd-submission-type" id="wd-file-upload" className="w-auto" />
              <Form.Label htmlFor="wd-file-upload" className="me-2">File Uploads</Form.Label>
            </Row>
          </div>

        </Col>
      </Col>

      <div className="mt-3">
        <Col className="d-flex">
          <Col xs="2" className="text-end">
            <Row className="wd-row-small">
              <Form.Label>Assign</Form.Label>
            </Row>
          </Col>
          <Col xs="7" className="text-start ms-3">
            <div className="border wd-assignment-dates-container">
              <Row className="wd-row-small wd-slight-right">
                <Form.Label htmlFor="wd-assign-to" className="wd-bold">Assign to </Form.Label>
              </Row>
              <Row className="wd-row ms-1">
                <div className="border wd-everyone-container">
                  <div className="wd-everyone-tag-box border">
                    <span className="wd-everyone-tag ms-1">Everyone</span>
                    <HiOutlineX />
                  </div>
                </div>
              </Row>
              <Row className="wd-row-small wd-slight-right">
                <Form.Label htmlFor="wd-due-date" className="wd-bold">Due</Form.Label>
              </Row>
              <Row className="wd-row-small ms-1">
                <Form.Control type="datetime-local" defaultValue="2024-05-13T23:59" id="wd-due-date" className="wd-date-time" />
              </Row>
              <Row className="wd-row-small mt-1 g-2">
                <Col xs={12} md={6} className="d-flex flex-column">
                  <Form.Label htmlFor="wd-available-from" className="wd-bold">
                    Available From
                  </Form.Label>
                  <Form.Control
                    type="datetime-local"
                    defaultValue="2024-05-06T00:00"
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
                    defaultValue="2024-05-20T23:59"
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
        <Button type="button" id="wd-editor-cancel" className="btn-secondary">Cancel</Button>
        <Button type="button" id="wd-editor-save" className="btn-save">Save</Button>
      </div>
    </Form.Group >



  );
}