import { Button, FormControl, FormGroup, ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { LuNotebookPen } from "react-icons/lu";
import { RiArrowDownSFill } from "react-icons/ri";
import { IoEllipsisVertical } from "react-icons/io5";
import { LuPlus } from "react-icons/lu";

export default function Assignments() {
    return (
      <div id="wd-assignments" className="text-nowrap">
      <Button variant="danger" className="me-1 float-end" id="wd-add-assignment">
      <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
            Assignment
      </Button>
      <Button variant="secondary" className="me-1 float-end" id="wd-add-assignment-group">
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
            Group
          </Button>
        <FormGroup className="input-group mb-3 float" style={{ width: "50%" }}>
          <FormControl placeholder="Search for Assignments" id="wd-search-assignment" />
            <span className="input-group-text me-1 float" style={{ width: "auto" }}>
            <IoIosSearch />
            </span>
        </FormGroup>


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
          <ListGroup className="rounded-0" id="wd-assignment-list">
              <ListGroup.Item className="wd-assignment p-3 ps-1">
              <BsGripVertical className="wd-grid-col-left-sidebar fs-3" />
                <LuNotebookPen className="wd-grid-col-left-sidebar" style={{ color: "green" }}/> 
                  <div className="wd-grid-col-main-content">
                    <a href="#/Kambaz/Courses/1234/Assignments/123" style={{ textDecoration: "none" }}>
                    <strong style={{ color: "black" }}> A1 - ENV + HTML </strong>
                    </a>
                  <br />
                    <span style={{ color: "red" }}>
                     Multiple Modules&nbsp;
                     </span>
                     <span>
                     | <strong>Not available until</strong> May 6 at 12:00 am |
                    </span>
                  <br />
                  <span>
                   <strong>Due</strong> May 13 at 11:59pm | 100 pts
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
              </ListGroup.Item>
          </ListGroup>

        </ListGroup.Item>
        </ListGroup>
      </div>
  );}
  