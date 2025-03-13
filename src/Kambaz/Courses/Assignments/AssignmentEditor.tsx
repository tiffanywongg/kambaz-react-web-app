import { Modal, FormControl, Button } from "react-bootstrap";

export default function AssignmentEditor({ show, handleClose, dialogTitle, assignmentName, setAssignmentName, deleteAssignment,}: {
 show: boolean; handleClose: () => void; dialogTitle: string; assignmentName: string; setAssignmentName: (name: string) => void;
 deleteAssignment: () => void; }) {
 return (
  <Modal show={show} onHide={handleClose}>
   <Modal.Header closeButton>
    <Modal.Title>{dialogTitle}</Modal.Title>
   </Modal.Header>
   <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}> Cancel </Button>
    <Button variant="primary"
     onClick={() => {
        deleteAssignment();
      handleClose();
     }} > Yes </Button>
   </Modal.Footer>
  </Modal>
);}
