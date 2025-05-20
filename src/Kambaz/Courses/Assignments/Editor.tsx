import { Form, Button, Row, Col } from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="p-4">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="wd-name">Assignment Name</Form.Label>
          <Form.Control id="wd-name" defaultValue="A1 - ENV + HTML" />
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Control 
            as="textarea"
            id="wd-description"
            rows={5}
            defaultValue="The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kanbaz application Links to all relevant source code repositories The Kanbaz application should include a link to navigate back to the landing page."
          />
        </Form.Group>
        
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2} htmlFor="wd-points">Points</Form.Label>
          <Col sm={10}>
            <Form.Control id="wd-points" defaultValue={100} />
          </Col>
        </Form.Group>
        
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2} htmlFor="wd-group">Assignment Group</Form.Label>
          <Col sm={10}>
            <Form.Select id="wd-group">
              <option>ASSIGNMENTS</option>
              <option>QUIZZES</option>
              <option>EXAMS</option>
              <option>PROJECT</option>
            </Form.Select>
          </Col>
        </Form.Group>
        
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2} htmlFor="wd-display-grade-as">Display Grade as</Form.Label>
          <Col sm={10}>
            <Form.Select id="wd-display-grade-as">
              <option>Percentage</option>
              <option>Points</option>
              <option>Letter Grade</option>
              <option>Complete/Incomplete</option>
            </Form.Select>
          </Col>
        </Form.Group>
        
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2} htmlFor="wd-submission-type">Submission Type</Form.Label>
          <Col sm={10}>
            <Form.Select id="wd-submission-type">
              <option>Online</option>
              <option>On Paper</option>
              <option>No Submission</option>
            </Form.Select>
          </Col>
        </Form.Group>
        
        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <div>Online Entry Options</div>
            <Form.Check type="checkbox" id="wd-text-entry" label="Text Entry" />
            <Form.Check type="checkbox" id="wd-website-url" label="Website URL" />
            <Form.Check type="checkbox" id="wd-media-recordings" label="Media Recordings" />
            <Form.Check type="checkbox" id="wd-student-annotation" label="Student Annotation" />
            <Form.Check type="checkbox" id="wd-file-upload" label="File Uploads" />
          </Col>
        </Form.Group>
        
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2} htmlFor="wd-assign-to">Assign to</Form.Label>
          <Col sm={10}>
            <Form.Control id="wd-assign-to" defaultValue="Everyone" />
          </Col>
        </Form.Group>
        
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2} htmlFor="wd-due-date">Due</Form.Label>
          <Col sm={10}>
            <Form.Control id="wd-due-date" type="date" defaultValue="2024-05-13" />
          </Col>
        </Form.Group>
        
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2} htmlFor="wd-available-from">Available from</Form.Label>
          <Col sm={10}>
            <Form.Control id="wd-available-from" type="date" defaultValue="2024-05-06" />
          </Col>
        </Form.Group>
        
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2} htmlFor="wd-available-until">Until</Form.Label>
          <Col sm={10}>
            <Form.Control id="wd-available-until" type="date" defaultValue="2024-05-20" />
          </Col>
        </Form.Group>
        
        <div className="text-end">
          <Button variant="light" className="me-2">Cancel</Button>
          <Button variant="success">Save</Button>
        </div>
      </Form>
    </div>
  );
}