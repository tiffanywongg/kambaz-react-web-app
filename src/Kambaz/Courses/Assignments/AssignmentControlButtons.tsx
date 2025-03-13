import { IoEllipsisVertical } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
// import { FaPencil } from "react-icons/fa6";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { deleteAssignment } from "./reducer";
// import { BsPlus } from "react-icons/bs";
// import { useNavigate } from "react-router-dom";
import AssignmentEditor from "./AssignmentEditor";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function AssignmentControlButtons(
    { assignmentName, assignmentId }:
    { assignmentName: string; assignmentId: string; }
) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteAssignment(assignmentId));
    handleClose();
  };
//   assignmentId: string;
//   deleteAssignment: (assignmentId: string) => void;
//   editAssignment: (assignmentId: string) => void;
// }) {
//   const navigate = useNavigate();

//   const handleEditClick = () => {
//     navigate(`/Kambaz/Courses/${course._id}/Assignments/${assignment._id}`);
//   };

  return (
    <div className="float-end">
        {/* <FaPencil onClick={() => editAssignment(assignmentId)} className="text-primary me-3" /> */}
        {/* <FaPencil onClick={handleEditClick} className="text-primary me-3" /> */}
        <FaTrash className="text-danger me-2 mb-1" 
        onClick={handleShow}
        />
        <GreenCheckmark />
        {/* <BsPlus className="fs-1" /> */}
        <IoEllipsisVertical className="fs-4" />
        <AssignmentEditor
        show={show}
        handleClose={handleClose}
        dialogTitle="Are you sure you want to remove the assignment?"
        assignmentName={assignmentName}
        setAssignmentName={() => {}}
        deleteAssignment={handleDelete}
      />
      </div>
  );
}

// function dispatch(arg0: void) {
//   throw new Error("Function not implemented.");
// }
