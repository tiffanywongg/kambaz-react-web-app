import CourseNavigation from './Navigation';
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { courses } from "../Database";
import { Routes, Route, useParams, useLocation } from 'react-router-dom';
import { FaAlignJustify } from 'react-icons/fa';
import PeopleTable from './People/Table';

export default function Courses() {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();
    return (
    <div id="wd-courses">
      <h2 className="text-danger">
          <FaAlignJustify className="me-4 fs-4 mb-1" />
          {course && course.name} &gt; {pathname.split("/")[4]}
          </h2> 
          <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CourseNavigation />
    </div>

    <div className="flex-fill">
    <Routes>
      <Route path="Home" element={<Home />} />
      <Route path="Modules" element={<Modules />} />
      <Route path="Assignments" element={<Assignments />} />
      <Route path="Assignments/:aid" element={<AssignmentEditor />} />
      <Route path="People" element={<PeopleTable />} />
    </Routes>
    </div></div>
</div> );}

// import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
// export default function Courses() {
//   const { cid } = useParams();
//   const course = courses.find((course) => course._id === cid);
//   const { pathname } = useLocation();
//   return (
//     <div id="wd-courses">
//       <h2 className="text-danger">
//         <FaAlignJustify className="me-3 fs-4 mb-1" />
//         {course && course.name} &gt; {pathname.split("/")[4]}
//       </h2> </div> );}
  