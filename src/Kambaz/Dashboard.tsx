import { Link } from "react-router-dom";
import { Row, Col, Card, FormControl, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import * as courseClient from "./Courses/client";
import * as userClient from "./Account/client";
import * as enrollmentsClient from "./enrollmentsClient";
import { enroll, unenroll, setEnrollments } from "./enrollmentsReducer";

export default function Dashboard() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const dispatch = useDispatch();
  const [courses, setCourses] = useState<any[]>([]);
  const [course, setCourse] = useState<any>({
    name: "New Course", 
    number: "New Number",
    startDate: "2023-09-10", 
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg", 
    description: "New Description"
  });
  const [showAll, setShowAll] = useState(false);

  const fetchCourses = async () => {
    try {
      if (showAll) {
        const courses = await userClient.allCourses();
        setCourses(courses);
      } else {
        const courses = await userClient.findMyCourses();
        setCourses(courses);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchEnrollments = async () => {
    try {
      const enrollments = await enrollmentsClient.getEnrollments();
      dispatch(setEnrollments(enrollments));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchEnrollments();
  }, []);

  useEffect(() => {
    fetchCourses();
  }, [currentUser, showAll]);

  const createCourse = async () => {
    try {
      const newCourse = await userClient.createCourse(course);
      setCourses([...courses, newCourse]);
    } catch (error) {
      console.error("Error creating course:", error);
    }
  };

  const deleteCourse = async (courseId: string) => {
    try {
      await courseClient.deleteCourse(courseId);
      setCourses(courses.filter((c) => c._id !== courseId));
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  const updateCourse = async () => {
    try {
      await courseClient.updateCourse(course);
      setCourses(courses.map((c) => 
        c._id === course._id ? course : c
      ));
    } catch (error) {
      console.error("Error updating course:", error);
    }
  };

  const enrollInCourse = async (user: any, course: any) => {
    await enrollmentsClient.enroll(user._id, course._id);
    dispatch(enroll({ user, course }));
  };

  const unenrollInCourse = async (user: any, course: any) => {
    await enrollmentsClient.unenroll(user._id, course._id);
    dispatch(unenroll({ user, course }));
    fetchCourses();
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard
        {currentUser.role !== "FACULTY" && (
          <Button className="float-end" onClick={() => setShowAll(!showAll)}>
            Enrollments
          </Button>
        )}
      </h1>
      <hr />
      
      {currentUser.role === "FACULTY" && (
        <>
          <h5>New Course
            <button className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={createCourse}> 
              Add 
            </button>
            <button className="btn btn-warning float-end me-2"
              onClick={updateCourse} 
              id="wd-update-course-click">
              Update
            </button>
          </h5>
          <br />
          <FormControl
            value={course.name}
            className="mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <FormControl
            value={course.description}
            as="textarea"
            rows={1}
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
          />
          <hr />
        </>
      )}

      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length})
      </h2>
      <hr />
      
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.map((course: any) => (
            <Col className="wd-dashboard-course" style={{ width: "300px" }} key={course._id}>
              <Card>
                <Link to={`/Kambaz/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark">
                  <Card.Img variant="top" src={course.image} width="100%" height={160} />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title overflow-hidden text-nowrap">
                      {course.name} 
                    </h5>
                    <p className="wd-dashboard-course-title card-text overflow-y-hidden" 
                       style={{ maxHeight: 50 }}>
                      {course.description} 
                    </p>
                    <button className="btn btn-primary wd-go-button"> 
                      Go 
                    </button>
                    
                    {currentUser.role === "FACULTY" && (
                      <>
                        <Button 
                          onClick={(event) => {
                            event.preventDefault();
                            deleteCourse(course._id);
                          }} 
                          className="btn btn-danger wd-card-delete-button float-end"
                          id="wd-delete-course-click">
                          Delete
                        </Button>
                        <Button 
                          id="wd-edit-course-click"
                          onClick={(event) => {
                            event.preventDefault();
                            setCourse(course);
                          }}
                          className="btn btn-warning me-2 wd-card-edit-button float-end">
                          Edit
                        </Button>
                      </>
                    )}
                    
                    {currentUser.role !== "FACULTY" && (
                      enrollments.some((enrollment: any) => 
                        enrollment.user === currentUser._id && enrollment.course === course._id
                      ) ? (
                        <Button 
                          className="btn btn-danger wd-card-delete-button" 
                          onClick={(e) => {
                            e.preventDefault();
                            unenrollInCourse(currentUser, course);
                          }}>
                          Unenroll
                        </Button>
                      ) : (
                        <Button 
                          className="btn btn-success wd-card-delete-button" 
                          onClick={(e) => {
                            e.preventDefault();
                            enrollInCourse(currentUser, course);
                          }}>
                          Enroll
                        </Button>
                      )
                    )}
                  </div>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}