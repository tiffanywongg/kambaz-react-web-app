import AssignmentEditor from "./AssignmentEditor";
import { FaPlus } from "react-icons/fa6";
import { Button, Dropdown, FormControl, FormGroup } from "react-bootstrap";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { courses } from "../../Database";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";

import * as coursesClient from "../client";

export default function AssignmentControls(
) {
  const { cid } = useParams();
  const course = courses.find((c: any) => c._id === cid);
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const createAssignment = async () => {
    if (!cid) return;
    const newAssignment = { title: "New Assignment", course: cid };
    const assignment = await coursesClient.createAssignment(cid, newAssignment);
    if (course) {
      navigate(`/Kambaz/Courses/${course._id}/Assignments/${assignment._id}`);
    }
  };

  return (
    <div id="wd-assignments-controls" className="text-nowrap">
      {/* {isFaculty && (
        <> */}
      <Button variant="danger" onClick={createAssignment} className="me-1 float-end" id="wd-add-assignment">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment
      </Button>
      <Button variant="secondary" className="me-1 float-end" id="wd-add-assignment-group">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group
      </Button>
      {/* </> */}


      <FormGroup className="input-group mb-3 float" style={{ width: "50%" }}>
        <FormControl placeholder="Search for Assignments" id="wd-search-assignment" />
        <span className="input-group-text me-1 float" style={{ width: "auto" }}>
          <IoIosSearch />
        </span>
      </FormGroup>
    </div>
  );
}
