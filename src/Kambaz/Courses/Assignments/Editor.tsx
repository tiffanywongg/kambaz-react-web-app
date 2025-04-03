import { FormGroup, FormLabel, FormControl, Col, Form, Row, FormSelect, Button, Card } from "react-bootstrap";
import { Link, useParams, useNavigate } from "react-router-dom";
import * as db from "../../Database";
import * as coursesClient from "../client";
import * as assignmentsClient from "./client";
import { addAssignment, editAssignment, updateAssignment, deleteAssignment }
    from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const course = db.courses.find((course: any) => course._id === cid);
    const assignment = db.assignments.find((assignment: any) => assignment._id === aid);
    const navigate = useNavigate();
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    const dispatch = useDispatch();

    const [assignmentTitle, setAssignmentTitle] = useState(assignment?.title || " ");
    const [assignmentDescription, setAssignmentDescription] = useState(assignment?.description || " ");
    const [assignmentPoints, setAssignmentPoints] = useState(assignment?.points || 100);
    const [assignmentDueDate, setAssignmentDueDate] = useState(assignment?.duedate || "2025-05-25");
    const [assignmentAvailableDate, setAssignmentAvailableDate] = useState(assignment?.availabledate || "2025-05-25");
    const [assignmentUntilDate, setAssignmentUntilDate] = useState(assignment?.duedate || "2025-05-25");

    // const handleSave = () => {
    //     const existingAssignment = assignments.find((assignment: any) => assignment._id === aid);
    //     if (existingAssignment) {
    //         dispatch(updateAssignment({
    //         _id: aid,
    //         title: assignmentName,
    //         course: cid,
    //         description: assignmentDescription,
    //         points: assignmentPoints,
    //         duedate: assignmentDueDate,
    //         availabledate: assignmentAvailableDate,
    //         untildate: assignmentUntilDate,
    //         }));
    //     } else {
    //         handleAddAssignment();
    //     }
    //     navigate(`/Kambaz/Courses/${cid}/Assignments`);
    // };

    const saveAssignment = async (assignment: any) => {
        await assignmentsClient.updateAssignment(assignment);
        dispatch(updateAssignment(assignment));
    };

    // const handleAddAssignment = () => {
    //     dispatch(addAssignment({
    //         _id: uuidv4(),
    //         title: assignmentName,
    //         course: cid,
    //         description: assignmentDescription,
    //     }));
    //     setAssignmentName("  ");
    //     setAssignmentDescription("  ");
    // };

    const createAssignment = async () => {
        if (!cid) return;
        const newAssignment = { title: assignmentTitle, course: cid };
        const assignment = await coursesClient.createAssignment(cid, newAssignment);
        dispatch(addAssignment(assignment));
    };

    return (
        <div id="wd-assignments-editor">

            <FormGroup className="mb-3" controlId="wd-name">
                <FormLabel><strong>Assignment Name</strong></FormLabel>
                <FormControl
                    type="text"
                    defaultValue={assignment?.title}
                    onChange={(e) => setAssignmentTitle(e.target.value)}
                />
            </FormGroup>


            <FormGroup className="mb-3" controlId="wd-textarea">
                {/* <FormControl as="textarea" value="The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kanbas application Links to all relevant source code repositories THe Kanbas application should include a link to navigate back to the landing page." /> */}
                <FormControl as="textarea"
                    defaultValue={assignment?.description}
                    onChange={(e) => setAssignmentDescription(e.target.value)}
                />
            </FormGroup>


            <FormGroup as={Row} className="mb-3" controlId="wd-points">
                <FormLabel column sm={4} className="text-end">Points</FormLabel>
                <Col sm={8}>
                    <FormControl type="number" defaultValue={assignment?.points}
                        onChange={(e) => setAssignmentPoints(e.target.value)} />
                </Col>
            </FormGroup>

            <FormGroup as={Row} className="mb-3" controlId="wd-group">
                <FormLabel column sm={4} className="text-end">Assignment Group</FormLabel>
                <Col sm={8}>
                    <FormSelect>
                        <option>ASSIGNMENTS</option>
                    </FormSelect>
                </Col>
            </FormGroup>

            <FormGroup as={Row} className="mb-3" controlId="wd-display-grade">
                <FormLabel column sm={4} className="text-end">Display Grade as</FormLabel>
                <Col sm={8}>
                    <FormSelect>
                        <option>Percentage</option>
                    </FormSelect>
                </Col>
            </FormGroup>

            <Row className="mb-3 align-items-center">
                <Col sm={4} className="text-end">
                    <FormLabel>Submission Type</FormLabel>
                </Col>
                <Col sm={8}>
                    <Card className="p-3">
                        <FormGroup className="mb-3" controlId="wd-submission-type">
                            <FormSelect>
                                <option>Online</option>
                            </FormSelect>
                        </FormGroup>

                        <FormGroup controlId="wd-online-entry-options">
                            <FormLabel>Online Entry Options</FormLabel>
                            <Form.Check label="Text Entry" />
                            <Form.Check label="Website URL" defaultChecked />
                            <Form.Check label="Media Recordings" />
                            <Form.Check label="Student Annotation" />
                            <Form.Check label="File Uploads" />
                        </FormGroup>
                    </Card>
                </Col>
            </Row>

            <Row className="mb-3 align-items-center">
                <Col sm={4} className="text-end">
                    <FormLabel>Assign</FormLabel>
                </Col>
                <Col sm={8}>
                    <Card className="p-3">
                        <FormGroup className="mb-3" controlId="wd-assign-to">
                            <FormLabel>Assign to</FormLabel>
                            <FormControl type="text" defaultValue="Everyone" />
                        </FormGroup>

                        <FormGroup className="mb-3" controlId="wd-due-date">
                            <FormLabel>Due</FormLabel>
                            <FormControl type="date"
                                defaultValue={assignment?.duedate}
                                onChange={(e) => setAssignmentDueDate(e.target.value)} />
                        </FormGroup>

                        <Row className="mb-3 align-items-center">
                            <Col sm={6}>
                                <FormGroup controlId="wd-available-from">
                                    <FormLabel>Available from</FormLabel>
                                    <FormControl type="date" defaultValue={assignment?.availabledate}
                                        onChange={(e) => setAssignmentAvailableDate(e.target.value)}
                                    />
                                </FormGroup>
                            </Col>

                            <Col sm={6}>
                                <FormGroup controlId="wd-available-until">
                                    <FormLabel>Until</FormLabel>
                                    <FormControl type="date" defaultValue="2025-05-25"
                                        onChange={(e) => setAssignmentUntilDate(e.target.value)} />
                                </FormGroup>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>

            {course && (
                <Row className="mb-3">
                    <Col className="text-end">
                        <Button variant="secondary" className="me-2" onClick={() => navigate(`/Kambaz/Courses/${course._id}/Assignments`)}>Cancel</Button>
                        <Link to={`/Kambaz/Courses/${course._id}/Assignments`} className="text-decoration-none">
                            <Button variant="danger" onClick={() => saveAssignment({
                                _id: aid,
                                title: assignmentTitle,
                                description: assignmentDescription,
                                points: assignmentPoints,
                                duedate: assignmentDueDate,
                                availabledate: assignmentAvailableDate,
                                untildate: assignmentUntilDate,
                            })}>Save</Button>
                        </Link>
                    </Col>
                </Row>
            )}


        </div>
    );
}
