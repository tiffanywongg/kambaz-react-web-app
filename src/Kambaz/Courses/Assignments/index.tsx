import { ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { LuNotebookPen } from "react-icons/lu";
import { RiArrowDownSFill } from "react-icons/ri";
import { IoEllipsisVertical } from "react-icons/io5";
import { LuPlus } from "react-icons/lu";

import { Link, useParams } from "react-router";
import * as db from "../../Database";
import * as coursesClient from "../client";
import * as assignmentsClient from "./client";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentControls from "./AssignmentControls";
import { setAssignment, addAssignment, editAssignment, updateAssignment, deleteAssignment } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

export default function Assignments() {
  const { cid } = useParams();
  const [assignmentTitle, setAssignmentTitle] = useState("");
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();
  const course = db.courses.find((course) => course._id === cid);
  // const { currentUser } = useSelector((state: any) => state.accountReducer);
  // const isFaculty = currentUser.role === "FACULTY";

  const fetchAssignments = async () => {
    const assignments = await coursesClient.findAssignment(cid as string);
    dispatch(setAssignment(assignments));
  };
  useEffect(() => {
    fetchAssignments();
  }, []);

  const createAssignment = async () => {
    if (!cid) return;
    const newAssignment = { title: assignmentTitle, course: cid };
    const assignment = await coursesClient.createAssignment(cid, newAssignment);
    dispatch(addAssignment(assignment));
  };

  const removeAssignment = async (assignmentId: string) => {
    await assignmentsClient.deleteAssignment(assignmentId);
    dispatch(deleteAssignment(assignmentId));
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div id="wd-assignments" className="text-nowrap">
      <AssignmentControls setAssignmentName={setAssignmentTitle} assignmentTitle={assignmentTitle} addAssignment={createAssignment} />

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
            // .filter((assignment: any) => assignment.course === cid)
            .map((assignment: any) => (
              <ListGroup className="rounded-0" id="wd-assignment-list">
                <ListGroup.Item className="wd-assignment p-3 ps-1">
                  <BsGripVertical className="wd-grid-col-left-sidebar fs-3" />
                  <LuNotebookPen className="wd-grid-col-left-sidebar" style={{ color: "green" }} />
                  <div className="wd-grid-col-main-content">
                    {/* {isFaculty ? (
                      <Link to={`/Kambaz/Courses/${course._id}/Assignments/${assignment._id}`} style={{ textDecoration: "none" }}>
                        <strong style={{ color: "black" }}> {assignment.title}

                        </strong>
                      </Link>
                    ) : (<span className="text-dark me-2"><strong>{assignment.title}</strong></span>)} */}
                    <Link to={`/Kambaz/Courses/${course._id}/Assignments/${assignment._id}`} style={{ textDecoration: "none" }}>
                        <strong style={{ color: "black" }}> {assignment.title}

                        </strong>
                      </Link>
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
                    {/* {isFaculty ? (
                      <AssignmentControlButtons assignmentId={assignment._id} deleteAssignment={() => handleShow()} />
                    ) : (
                      <><GreenCheckmark /><IoEllipsisVerticalSharp className="fs-4 mt-1" /></>
                    )} */}
                    <AssignmentControlButtons assignmentId={assignment._id} deleteAssignment={(assignmentId: string) => removeAssignment(assignmentId)} assignmentName={assignment.title}/>
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
  );
}