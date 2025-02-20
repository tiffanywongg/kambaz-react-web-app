import { ListGroup } from "react-bootstrap";
import { Link, useLocation, useParams } from "react-router-dom";
import { courses } from "../Database";

export default function CourseNavigation() {
  const { pathname } = useLocation();
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const links = course ? [
    { label: "Home",        path: `/Kambaz/Courses/${course._id}/Home` },
    { label: "Modules",     path: `/Kambaz/Courses/${course._id}/Modules` },
    { label: "Piazza",      path: `/Kambaz/Courses/${course._id}/Piazza` },
    { label: "Zoom",        path: `/Kambaz/Courses/${course._id}/Zoom` },
    { label: "Assignments", path: `/Kambaz/Courses/${course._id}/Assignments` },
    { label: "Quizzes",     path: `/Kambaz/Courses/${course._id}/Quizzes` },
    { label: "Grades",      path: `/Kambaz/Courses/${course._id}/Grades` },
    { label: "People",      path: `/Kambaz/Courses/${course._id}/People` },] : [];
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <ListGroup.Item key={link.path} as={Link} to={link.path} className={`list-group-item border border-0
              ${pathname.includes(link.label) ? "text-black bg-white active border border-0" : "text-danger bg-white"}`}>
          <br />
          {link.label}
        </ListGroup.Item>
      ))}

      {/* <Link to="/Kambaz/Courses/1234/Home" id="wd-course-home-link"
        className="list-group-item active border border-0">Home</Link>
      <Link to="/Kambaz/Courses/1234/Modules" id="wd-course-modules-link"
        className="list-group-item text-danger border border-0">Modules</Link>
      <Link to="/Kambaz/Courses/1234/Piazza" id="wd-course-piazza-link"
        className="list-group-item text-danger border border-0">Piazza</Link>
      <Link to="/Kambaz/Courses/1234/Zoom" id="wd-course-zoom-link"
        className="list-group-item text-danger border border-0">Zoom</Link>
      <Link to="/Kambaz/Courses/1234/Assignments" id="wd-course-quizzes-link"
        className="list-group-item text-danger border border-0">Assignments</Link>
      <Link to="/Kambaz/Courses/1234/Quizzes" id="wd-course-assignments-link"
        className="list-group-item text-danger border border-0">Quizzes</Link>
      <Link to="/Kambaz/Courses/1234/Grades" id="wd-course-grades-link"
        className="list-group-item text-danger border border-0">Grades</Link>
      <Link to="/Kambaz/Courses/1234/People" id="wd-course-people-link"
        className="list-group-item text-danger border border-0">People</Link> */}
    </div>
  );
}
