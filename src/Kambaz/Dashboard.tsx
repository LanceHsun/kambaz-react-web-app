import { Link } from "react-router-dom";
import { Row, Col, Card, FormControl, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import * as courseClient from "./Courses/client";
import * as userClient from "./Account/client";
import { setEnrollments } from "./enrollmentsReducer";

export default function Dashboard() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const dispatch = useDispatch();
  const [courses, setCourses] = useState<any[]>([]);
  const [course, setCourse] = useState<any>({
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/vue.jpg",
    description: "New Description"
  });
  const [showAll, setShowAll] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [enrolledCourses, setEnrolledCourses] = useState<any[]>([]);

  const fetchCourses = async () => {
    try {
      if (showAll) {
        const allCourses = await courseClient.fetchAllCourses();
        setCourses(allCourses.filter((course: any) => course != null));
        if (currentUser) {
          const myCourses = await userClient.findMyCourses();
          setEnrolledCourses(myCourses.filter((c: any) => c != null).map((c: any) => c._id));
          const enrollments = await userClient.findMyEnrollments();
          dispatch(setEnrollments(enrollments));
        }
      } else {
        if (currentUser) {
          const myCourses = await userClient.findMyCourses();
          setCourses(myCourses.filter((course: any) => course != null));
          setEnrolledCourses(myCourses.filter((c: any) => c != null).map((c: any) => c._id));
          const enrollments = await userClient.findMyEnrollments();
          dispatch(setEnrollments(enrollments));
        }
      }
    } catch (error) {
      console.error("Error fetching courses:", error);
      setError("Failed to load courses. Please try again later.");
    }
  };

  useEffect(() => {
    if (currentUser) {
      fetchCourses();
    }
  }, [currentUser, showAll]);

  const createCourse = async () => {
    try {
      const newCourse = await userClient.createCourse(course);
      setCourses([...courses, newCourse]);
    } catch (error) {
      console.error("Error creating course:", error);
      setError("Failed to create course. Please try again.");
    }
  };

  const deleteCourse = async (courseId: string) => {
    try {
      await courseClient.deleteCourse(courseId);
      setCourses(courses.filter((c) => c._id !== courseId));
    } catch (error) {
      console.error("Error deleting course:", error);
      setError("Failed to delete course. Please try again.");
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
      setError("Failed to update course. Please try again.");
    }
  };

  const enrollInCourse = async (user: any, course: any) => {
    try {
      await userClient.enrollIntoCourse(user._id, course._id);
      setEnrolledCourses([...enrolledCourses, course._id]);
      if (!showAll) fetchCourses();
    } catch (error) {
      console.error("Error enrolling in course:", error);
      setError("Failed to enroll in course. Please try again.");
    }
  };

  const unenrollInCourse = async (user: any, course: any) => {
    try {
      await userClient.unenrollFromCourse(user._id, course._id);
      setEnrolledCourses(enrolledCourses.filter((id) => id !== course._id));
      fetchCourses();
    } catch (error) {
      console.error("Error unenrolling from course:", error);
      setError("Failed to unenroll from course. Please try again.");
    }
  };

  if (!currentUser) {
    return null;
  }

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard
        {currentUser.role !== "FACULTY" && (
          <Button className="float-end" onClick={() => setShowAll(!showAll)}>
            {showAll ? "My Courses" : "All Courses"}
          </Button>
        )}
      </h1>
      <hr />
      {error && (
        <div className="alert alert-danger mb-3">
          {error}
          <button
            className="btn-close float-end"
            onClick={() => setError(null)}
            aria-label="Close"
          ></button>
        </div>
      )}
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
          {courses.length > 0 ? (
            courses.map((course: any) => (
              <Col className="wd-dashboard-course" style={{ width: "300px" }} key={course._id}>
                <Card>
                  <Card.Img variant="top" src={course.image} width="100%" height={160} />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title overflow-hidden text-nowrap">
                      {course.name}
                    </h5>
                    <p className="wd-dashboard-course-title card-text overflow-y-hidden"
                       style={{ maxHeight: 50 }}>
                      {course.description}
                    </p>
                    <Link to={`/Kambaz/Courses/${course._id}/Home`}>
                      <button className="btn btn-primary wd-go-button">Go</button>
                    </Link>
                    {currentUser.role === "FACULTY" && (
                      <>
                        <Button
                          onClick={() => deleteCourse(course._id)}
                          className="btn btn-danger wd-card-delete-button float-end"
                          id="wd-delete-course-click">
                          Delete
                        </Button>
                        <Button
                          id="wd-edit-course-click"
                          onClick={() => setCourse(course)}
                          className="btn btn-warning me-2 wd-card-edit-button float-end">
                          Edit
                        </Button>
                      </>
                    )}
                    {currentUser.role !== "FACULTY" && (
                      enrolledCourses.includes(course._id) ? (
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
                </Card>
              </Col>
            ))
          ) : (
            <div className="col-12 text-center">
              <p>No courses available. {showAll ? "Try enrolling in some courses." : ""}</p>
            </div>
          )}
        </Row>
      </div>
    </div>
  );
}