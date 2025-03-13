import { FormControl, ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { LuNotebookPen } from "react-icons/lu";
import { RiArrowDownSFill } from "react-icons/ri";
import { IoEllipsisVertical, IoEllipsisVerticalSharp } from "react-icons/io5";
import { LuPlus } from "react-icons/lu";

import { Link, useParams } from "react-router";
import * as db from "../../Database";
import { v4 as uuidv4 } from "uuid";
import AssignmentsControls from "./AssignmentControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
// import { addAssignment, editAssignment, updateAssignment, deleteAssignment }
  // from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment } from "./reducer";
import { useState } from "react";
import GreenCheckmark from "../Modules/GreenCheckmark";

export default function Assignments()
{
  const dispatch = useDispatch();
  const { cid } = useParams();
  const course = db.courses.find((course) => course._id === cid);
  // const [assignments, setAssignments] = useState<any[]>(db.assignments);
  // const [assignmentName, setAssignmentName] = useState("");
  // const addAssignment = () => {
  //   setAssignments([ ...assignments, { _id: uuidv4(), title: assignmentName, course: cid } ]);
  //   setAssignmentName("");
  // };

  // const deleteAssignment = (assignmentId: string) => {
  //   setAssignments(assignments.filter((a) => a._id !== assignmentId));
  // };

  // const editAssignment = (assignmentId: string) => {
  //   setAssignments(assignments.map((a) => (a._id === assignmentId ? { ...a, editing: true } : a)));
  // };

  // const updateAssignment = (assignment: any) => {
  //   setAssignments(assignments.map((a) => (a._id ===  assignment._id ? assignment : a)));
  // };
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser.role === "FACULTY";

  const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

    return (
      <div id="wd-assignments" className="text-nowrap">
        <AssignmentsControls isFaculty={isFaculty} />
    
        {course ? (
        <ListGroup className="rounded-0" id="wd-assignments-title">
        <ListGroup.Item id="wd-assignments p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-0.5 fs-2" />
              <RiArrowDownSFill />
              <strong> ASSIGNMENTS</strong> 
              <IoEllipsisVertical className="float-end fs-4" />
              <LuPlus className="float-end me-1 fs-4" />
              <div className="wd-rounded-corners-all-around 
              wd-border-thin wd-border-solid float-end me-2">
                40% of Total
              </div>
            </div>
            </ListGroup.Item>

            {assignments
              .filter((assignment: any) => assignment.course === cid)
              .map((assignment: any) => (
          <ListGroup className="rounded-0" id="wd-assignment-list">
              <ListGroup.Item className="wd-assignment p-3 ps-1">
              <BsGripVertical className="wd-grid-col-left-sidebar fs-3" />
                <LuNotebookPen className="wd-grid-col-left-sidebar" style={{ color: "green" }}/> 
                  <div className="wd-grid-col-main-content">
                    { isFaculty ? (
                    <Link to={`/Kambaz/Courses/${course._id}/Assignments/${assignment._id}`} style={{ textDecoration: "none" }}>
                    <strong style={{ color: "black" }}> {assignment.title}
                      
                    </strong>
                    </Link>
                    ) : (<span className="text-dark me-2"><strong>{assignment.title}</strong></span>)}
                  <br />
                    <span style={{ color: "red" }}>
                     Multiple Modules&nbsp;
                     </span>
                     <span>
                     | <strong>Not available until</strong> May 6 at 12:00 am |
                    </span>
                  <br />
                  <span>
                   <strong>Due</strong> {assignment.duedate} at 11:59pm | 100 pts
                  </span>
                  </div>
                    <div className="wd-grid-col-right-sidebar">
                    {/* <AssignmentControlButtons 
                      course={course}
                      assignment={assignment}
                      assignmentId={assignment._id} 
                      deleteAssignment={deleteAssignment}
                      editAssignment={editAssignment}
                    /> */}
                    { isFaculty ? (
                    <AssignmentControlButtons assignmentId={assignment._id} deleteAssignment={() => handleShow()}/>
                    ) : (
                      <><GreenCheckmark /><IoEllipsisVerticalSharp className="fs-4 mt-1" /></>
                    )}
                    </div>
              </ListGroup.Item>
              


              {/* <ListGroup.Item className="wd-assignment p-3 ps-1">
              <BsGripVertical className="wd-grid-col-left-sidebar fs-3" />
                <LuNotebookPen className="wd-grid-col-left-sidebar" style={{ color: "green" }}/> 
                  <div className="wd-grid-col-main-content">
                  <a href="#/Kambaz/Courses/1234/Assignments/123" style={{ textDecoration: "none" }}>
                  <strong style={{ color: "black" }}> A2 - CSS + BOOTSTRAP </strong>
                  </a>
                  <br />
                    <span style={{ color: "red" }}>
                     Multiple Modules&nbsp;
                     </span>
                     <span>
                     | <strong>Not available until</strong> May 13 at 12:00 am |
                    </span>
                  <br />
                  <span>
                   <strong>Due</strong> May 20 at 11:59pm | 100 pts
                  </span>
                  </div>
                  <div className="wd-grid-col-right-sidebar">
                <LessonControlButtons />
                </div>
              </ListGroup.Item>

              <ListGroup.Item className="wd-assignment p-3 ps-1">
              <BsGripVertical className="wd-grid-col-left-sidebar fs-3" />
                <LuNotebookPen className="wd-grid-col-left-sidebar" style={{ color: "green" }}/> 
                  <div className="wd-grid-col-main-content">
                  <a href="#/Kambaz/Courses/1234/Assignments/123" style={{ textDecoration: "none" }}>
                  <strong style={{ color: "black" }}> A3 - JAVASCRIPT + REACT </strong>
                  </a>
                  <br />
                    <span style={{ color: "red" }}>
                     Multiple Modules&nbsp;
                     </span>
                     <span>
                     | <strong>Not available until</strong> May 20 at 12:00 am |
                    </span>
                  <br />
                  <span>
                   <strong>Due</strong> May 27 at 11:59pm | 100 pts
                  </span>
                  </div>
                  <div className="wd-grid-col-right-sidebar">
                <LessonControlButtons />
                </div>
              </ListGroup.Item> */}
          </ListGroup>))}

        </ListGroup>
      ) : (
          <div>Course not found</div>
        )}
        
      </div>
  );}