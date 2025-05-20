import { Link } from "react-router-dom";
import { Row, Col, Card, Button } from "react-bootstrap";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link to="/Kambaz/Courses/1234/Home"
                    className="wd-dashboard-course-link text-decoration-none text-dark">
                <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160} alt="React JS"/>
                <Card.Body>
                <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS1234 React JS</Card.Title>
                <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                  Full Stack software developer</Card.Text>
                <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link to="/Kambaz/Courses/1234/Home"
                    className="wd-dashboard-course-link text-decoration-none text-dark">
                <Card.Img variant="top" src="/images/nodejs.jpg" width="100%" height={160} alt="Node JS"/>
                <Card.Body>
                <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS2345 Node JS</Card.Title>
                <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                  Server Side Development</Card.Text>
                <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link to="/Kambaz/Courses/1234/Home"
                    className="wd-dashboard-course-link text-decoration-none text-dark">
                <Card.Img variant="top" src="/images/mongodb.jpg" width="100%" height={160} alt="MongoDB"/>
                <Card.Body>
                <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS3456 MongoDB</Card.Title>
                <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                  NoSQL Database</Card.Text>
                <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link to="/Kambaz/Courses/1234/Home"
                    className="wd-dashboard-course-link text-decoration-none text-dark">
                <Card.Img variant="top" src="/images/angular.jpg" width="100%" height={160} alt="Angular"/>
                <Card.Body>
                <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS4567 Angular</Card.Title>
                <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                  Front End Development</Card.Text>
                <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link to="/Kambaz/Courses/1234/Home"
                    className="wd-dashboard-course-link text-decoration-none text-dark">
                <Card.Img variant="top" src="/images/vue.jpg" width="100%" height={160} alt="Vue JS"/>
                <Card.Body>
                <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS5678 Vue JS</Card.Title>
                <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                  Modern Web Development</Card.Text>
                <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link to="/Kambaz/Courses/1234/Home"
                    className="wd-dashboard-course-link text-decoration-none text-dark">
                <Card.Img variant="top" src="/images/express.jpg" width="100%" height={160} alt="Express JS"/>
                <Card.Body>
                <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS6789 Express JS</Card.Title>
                <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                  Web API Development</Card.Text>
                <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link to="/Kambaz/Courses/1234/Home"
                    className="wd-dashboard-course-link text-decoration-none text-dark">
                <Card.Img variant="top" src="/images/typescript.jpg" width="100%" height={160} alt="TypeScript"/>
                <Card.Body>
                <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS7890 TypeScript</Card.Title>
                <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                  Typed JavaScript</Card.Text>
                <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}