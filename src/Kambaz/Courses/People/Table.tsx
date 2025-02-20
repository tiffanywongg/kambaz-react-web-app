import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
import * as db from "../../Database";
export default function PeopleTable() {
    const { cid } = useParams();
    const { users, enrollments } = db;
 return (
  <div id="wd-people-table">
   <Table striped>
    <thead>
     <tr><th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
    </thead>
    <tbody>
    {users
    .filter((usr) =>
      enrollments.some((enrollment) => enrollment.user === usr._id && enrollment.course === cid)
    )
    .map((user: any) => (

     <tr key={user._id}><td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">{user.firstName}</span>{" "}
          <span className="wd-last-name">{user.lastName}</span></td>
      <td className="wd-login-id">{user.loginId}</td>
      <td className="wd-section">{user.section}</td>
      <td className="wd-role">{user.role}</td>
      <td className="wd-last-activity">{user.lastActivity}</td>
      <td className="wd-total-activity">{user.totalActivity}</td></tr>))}

    {/* <tr><td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">Bruce</span>{" "}
          <span className="wd-last-name">Wayne</span></td>
      <td className="wd-login-id">002345678</td>
      <td className="wd-section">S101</td>
      <td className="wd-role">STUDENT</td>
      <td className="wd-last-activity">2025-05-02</td>
      <td className="wd-total-activity">09:18:12</td></tr>

    <tr><td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">Steve</span>{" "}
          <span className="wd-last-name">Rogers</span></td>
      <td className="wd-login-id">003456789</td>
      <td className="wd-section">S101</td>
      <td className="wd-role">STUDENT</td>
      <td className="wd-last-activity">2025-08-08</td>
      <td className="wd-total-activity">11:01:01</td></tr>

      <tr><td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">Natasha</span>{" "}
          <span className="wd-last-name">Romanoff</span></td>
      <td className="wd-login-id">004567890</td>
      <td className="wd-section">S101</td>
      <td className="wd-role">TA</td>
      <td className="wd-last-activity">2025-01-10</td>
      <td className="wd-total-activity">08:08:08</td></tr>

      <tr><td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">Tiffany</span>{" "}
          <span className="wd-last-name">Wong</span></td>
      <td className="wd-login-id">002905414</td>
      <td className="wd-section">S101</td>
      <td className="wd-role">TEACHER</td>
      <td className="wd-last-activity">2025-02-06</td>
      <td className="wd-total-activity">03:14:04</td></tr> */}
    </tbody>
   </Table>
  </div> );}