import { Form, FormSelect } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h1>Profile</h1>
      <Form.Control id="wd-username"
            defaultValue="alice"
             placeholder="username"
             className="mb-2"/>

      <Form.Control id="wd-password"
            defaultValue="123"
             placeholder="password" type="password"
             className="mb-2"/>

      <Form.Control id="wd-firstname"
            defaultValue="Alice"
            placeholder="First Name"
             className="mb-2"/>

      <Form.Control id="wd-lastname"
            defaultValue="Wonderland"
             placeholder="Last Name" 
             className="mb-2"/>

      <Form.Control id="wd-dob"
            defaultValue="2000-01-01"
             placeholder="verify password" type="date"
             className="mb-2"/>

      <Form.Control id="wd-email"
            defaultValue="alice@wonderland"
             placeholder="verify password" type="email"
             className="mb-2"/>
             
      <FormSelect id="wd-role"
          defaultValue="FACULTY"
          className="mb-2">
            <option>Faculty</option>
            <option>Student</option>
            <option>User</option>
            <option>Admin</option>
        </FormSelect>
      <Link id="wd-signin-btn"
            to="/Kambaz/Account/Profile"
            className="btn btn-danger w-100 mb-2">
            Sign Out </Link>
    </div>
);}
