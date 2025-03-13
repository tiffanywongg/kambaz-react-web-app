import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
import * as db from "./Database";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ProtectedRoute from "./Account/ProtectedRoute";
import { addCourse, deleteCourse, updateCourse } from "./Courses/reducer";
import { useDispatch } from "react-redux";

export default function Kambaz() {
  const dispatch = useDispatch();
  const [courses, setCourses] = useState<any[]>(db.courses);
  const [course, setCourse] = useState<any>({
    _id: "1234", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
  });
  // const addNewCourse = () => {
  //   setCourses([...courses, { ...course, _id: uuidv4() }]);
  // };
  // const deleteCourse = (courseId: any) => {
  //   setCourses(courses.filter((course) => course._id !== courseId));
  // };
  // const updateCourse = () => {
  //   setCourses(
  //     courses.map((c) => {
  //       if (c._id === course._id) {
  //         return course;
  //       } else {
  //         return c;
  //       }
  //     })
  //   );
  // };

  return (
    // <div id="wd-kambaz">
    //   <table width = "100%">
    //     <tr>
    //       <td valign="top">
    //         <KambazNavigation />
    //       </td>
    //       <td valign="top">
    //         <Routes>
    //           <Route path="/" element={<Navigate to="Account" />} />
    //           <Route path="/Account/*" element={<Account />} />
    //           <Route path="/Dashboard" element={<Dashboard />} />
    //           <Route path="/Courses/:cid/*" element={<Courses />} />
    //           <Route path="/Calendar" element={<h1>Calendar</h1>} />
    //           <Route path="/Inbox" element={<h1>Inbox</h1>} />
    //         </Routes>
    //       </td>
    //     </tr>
    //   </table>
    // </div>
<div id="wd-kambaz">
    <KambazNavigation />
  <div className="wd-main-content-offset p-3">
    <Routes>
      <Route path="/" element={<Navigate to="Account" />} />
      <Route path="/Account/*" element={<Account />} />
      <Route path="/Dashboard" element={
       <ProtectedRoute>
        <Dashboard
       courses={courses}
       course={course}
       setCourse={setCourse}
       addNewCourse={() => {
        dispatch(addCourse(course));
       }}
       deleteCourse={() => {
        dispatch(deleteCourse({ _id: course._id }));}}
       updateCourse={() => {
        dispatch(updateCourse(course));
       }}/>
       </ProtectedRoute>
      } />
      <Route path="/Courses/:cid/*" element={
        <ProtectedRoute><Courses courses={[]} /></ProtectedRoute>} />
      <Route path="/Calendar" element={<h1>Calendar</h1>} />
      <Route path="/Inbox" element={<h1>Inbox</h1>} />
    </Routes>
  </div>
</div>

  );
}
