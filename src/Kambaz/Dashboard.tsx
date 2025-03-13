import { Row, Col, Card, Button, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as db from "./Database";
import { useState } from "react";
import { addEnrollment, deleteEnrollment } from "./reducer";

export default function Dashboard(
  { courses, 
    course, 
    setCourse, 
    addNewCourse,
    deleteCourse, 
    updateCourse 
  }: {
    courses: any[]; 
    course: any; 
    setCourse: (course: any) => void;
    addNewCourse: () => void; 
    deleteCourse: (course: any) => void;
    updateCourse: () => void; })
    {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = db;
  const isFaculty = currentUser.role === "FACULTY";
  const dispatch = useDispatch();
  const [checkAllCourses, setCheckAllCourses] = useState(false);
  const userEnrollments = enrollments.filter(
    (enrollment: any) => enrollment.user === currentUser._id
  );
  const isEnrolled = (courseId: string) => {
    return userEnrollments.some((enrollment: any) => enrollment.course === courseId);
  };

  
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      { isFaculty && ( <> 
      <h5>New Course
          <button className="btn btn-primary float-end"
                  id="wd-add-new-course-click"
                  onClick={addNewCourse} > Add </button>
          <button className="btn btn-warning float-end me-2"
                onClick={updateCourse} id="wd-update-course-click">
          Update
        </button>
      </h5><br />
      <FormControl value={course.name} className="mb-2" 
        onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <FormControl as="textarea" value={course.description} rows={3}
      onChange={(e) => setCourse({ ...course, description: e.target.value }) }/>
      <br />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2><hr />
</>)}
      <br />
      <div>
      {!isFaculty && (
        <>
          <h2 id="wd-dashboard-published">
            {checkAllCourses
              ? `Published Courses (${courses.length})`
              : `Enrolled Courses (${userEnrollments.length})`}
        <Button
        className="btn btn-primary float-end"
        onClick={() => setCheckAllCourses(!checkAllCourses)}>
      {checkAllCourses ? "Enrolled Courses" : "Enrollments"}
      </Button>
      </h2>
      <hr />
      </>
      )}
      </div>

      {/* { isFaculty ? (
      <><h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2><hr /></>
      ) : (
        <><h2 id="wd-dashboard-published">Enrolled Courses ({userEnrollments.length})</h2><hr /></>
      )} */}
      
      <div id="wd-dashboard-courses">
      <Row xs={1} md={5} className="g-4">
      {courses
      .filter((course) =>
        // enrollments.some(
        //   (enrollment) =>
        //     enrollment.user === currentUser._id &&
        //     enrollment.course === course._id
        checkAllCourses || isEnrolled(course._id))
      .map((course) => (
        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
          <Link to={`/Kambaz/Courses/${course._id}/Home`}
                className="wd-dashboard-course-link text-decoration-none text-dark" >
            </Link>
            <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160}/>
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title" text-nowrap overflow-hidden> 
              {course.name} </Card.Title>
              <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
              {course.description} </Card.Text>
              <Link to={`/Kambaz/Courses/${course._id}/Home`}>
              <Button variant="primary">
                Go</Button></Link>
          

              { isFaculty && (
                <div className="float-end">
                  <button id="wd-edit-course-click"
                  onClick={(event) => {
                    event.preventDefault();
                    setCourse(course);
                  }}
                  className="btn btn-warning me-2">
                  Edit
                  </button>
                  <button onClick={(event) => {
                    event.preventDefault();
                    deleteCourse(course._id);
                  }} className="btn btn-danger"
                  id="wd-delete-course-click">
                  Delete
                  </button>
                </div>
              )}
              
              {!isFaculty &&
                (isEnrolled(course._id) ? (
                <Button variant="danger" className="float-end" onClick={() =>
                  dispatch(deleteEnrollment({
                  user: currentUser._id,
                  course: course._id,}))}>
                  Unenroll
                </Button>
                ) : (
                <Button
                 variant="success" className="float-end"
                  onClick={() =>
                  dispatch(
                  addEnrollment({user: currentUser._id,
                    course: course._id,}))}
                        >
                          Enroll
                        </Button>
                      ))}

            </Card.Body>
          </Card>
        </Col>
      ))}


        {/* <Col className="wd-dashboard-course" style={{ width: "300px" }}>
          <Card>
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark" >
            <Card.Img variant="top" src="/images/image1.jpg" width="100%" height={160} />
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title"> ARTF1250 </Card.Title>
              <Card.Text className="wd-dashboard-course-description">
                Design  </Card.Text>
              <Button variant="primary"> Go </Button>
            </Card.Body>
          </Link>
          </Card>
        </Col>


        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark" >
            <Card.Img src="/images/image2.jpg" width="100%" height={160} />
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title"> CS3000 </Card.Title>
              <Card.Text className="wd-dashboard-course-description">
                Algorithms  </Card.Text>
                <Button variant="primary"> Go </Button>
            </Card.Body>
          </Link>
          </Card>
        </Col>


        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img src="/images/image3.jpg" width="100%" height={160}/>
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title"> ARTF1234 </Card.Title>
              <Card.Text className="wd-dashboard-course-description">
                Random Class  </Card.Text>
                <Button variant="primary"> Go </Button>
            </Card.Body>
          </Link>
          </Card>
        </Col>


        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img src="/images/image4.jpg" width="100%" height={160} />
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title"> CS2345 </Card.Title>
              <Card.Text className="wd-dashboard-course-description">
                Random Class  </Card.Text>
                <Button variant="primary"> Go </Button>
            </Card.Body>
          </Link>
          </Card>
        </Col>


        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark" >
            <Card.Img src="/images/image5.jpg" width="100%" height={160} />
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title"> CS3456 </Card.Title>
              <Card.Text className="wd-dashboard-course-description">
                Random Class  </Card.Text>
                <Button variant="primary"> Go </Button>
            </Card.Body>
          </Link>
          </Card>
        </Col>


        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img src="/images/image6.jpg" width="100%" height={160} />
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title"> ARTG2262 </Card.Title>
              <Card.Text className="wd-dashboard-course-description">
                Prototyping with Code  </Card.Text>
                <Button variant="primary"> Go </Button>
            </Card.Body>
          </Link>
          </Card>
        </Col>


        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img src="/images/image7.jpg" width="100%" height={160} />
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title"> CS3540 </Card.Title>
              <Card.Text className="wd-dashboard-course-description">
                Game Programming  </Card.Text>
                <Button variant="primary"> Go </Button>
            </Card.Body>
          </Link>
          </Card>
          </Col> */}


        </Row>
      </div>
    </div>
);}
