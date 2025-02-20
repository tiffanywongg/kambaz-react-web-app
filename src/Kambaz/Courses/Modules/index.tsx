// import { ListGroup } from "react-bootstrap";
import ModulesControls from "./ModulesControls";
// import ModuleControlButtons from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";

import { useParams } from "react-router";
import * as db from "../../Database";

export default function Modules() {
  const { cid } = useParams();
  const modules = db.modules;
    return (
      <div>

        <ModulesControls /><br /><br /><br /><br />
        <ul id="wd-modules" className="list-group rounded-0">
          {modules
            .filter((module: any) => module.course === cid)
            .map((module: any) => (
            <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" /> {module.name} <LessonControlButtons />
              </div>
              {module.lessons && (
                <ul className="wd-lessons list-group rounded-0">
                  {module.lessons.map((lesson: any) => (
                    <li className="wd-lesson list-group-item p-3 ps-1">
                      <BsGripVertical className="me-2 fs-3" /> {lesson.name} <LessonControlButtons />
                    </li>
                  ))}</ul>)}</li>))}</ul>

        {/* <ModulesControls /><br /><br /><br /><br />
        <ListGroup className="rounded-0" id="wd-modules">
          {modules
              .filter((module: any) => module.course === cid)
              .map((module: any) => (
          <ListGroup.Item id="wd-modules p-0 mb-5 fs-5 border-gray">
            <div className="wd-title  p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" /> {module.name} <ModuleControlButtons />
            </div>
            {module.lessons && (
              <ListGroup className="wd-lessons rounded-0">
                {module.lessons.map((lesson: any) => (
                  <ListGroup.Item className="wd-lesson p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" /> {lesson.name} <LessonControlButtons />
                  </ListGroup.Item>
                ))}</ListGroup>)}
          </ListGroup.Item>))}
        </ListGroup>  */}

            {/* //   <ListGroup.Item className="wd-lesson p-3 ps-1">
            //   <BsGripVertical className="me-2 fs-3" /> Introduction to the course <LessonControlButtons />
            //   </ListGroup.Item>
            //   <ListGroup.Item className="wd-lesson p-3 ps-1">
            //   <BsGripVertical className="me-2 fs-3" />Learn what is Web Development<LessonControlButtons />
            //   </ListGroup.Item>
            // </ListGroup>

            // <ListGroup className="wd-lessons rounded-0">
            //   <ListGroup.Item className="wd-lesson p-3 ps-1">
            //   <BsGripVertical className="me-2 fs-3" />READING<LessonControlButtons />
            //   </ListGroup.Item>
            //   <ListGroup.Item className="wd-lesson p-3 ps-1">
            //   <BsGripVertical className="me-2 fs-3" />Full Stack Developer - Chapter 1 - Introduction<LessonControlButtons />
            //   </ListGroup.Item>
            //   <ListGroup.Item className="wd-lesson p-3 ps-1">
            //   <BsGripVertical className="me-2 fs-3" />Full Stack Developer - Chapter 2 - Creating User<LessonControlButtons />
            //   </ListGroup.Item>
            // </ListGroup>

            // <ListGroup className="wd-lessons rounded-0">
            //   <ListGroup.Item className="wd-lesson p-3 ps-1">
            //   <BsGripVertical className="me-2 fs-3" />SLIDES<LessonControlButtons />
            //   </ListGroup.Item>
            //   <ListGroup.Item className="wd-lesson p-3 ps-1">
            //   <BsGripVertical className="me-2 fs-3" />Introduction to Web Development<LessonControlButtons />
            //   </ListGroup.Item>
            //   <ListGroup.Item className="wd-lesson p-3 ps-1">
            //   <BsGripVertical className="me-2 fs-3" />Creating an HTTP server with Node.js<LessonControlButtons />
            //   </ListGroup.Item>
            //   <ListGroup.Item className="wd-lesson p-3 ps-1">
            //   <BsGripVertical className="me-2 fs-3" />Creating a React Application<LessonControlButtons />
            //   </ListGroup.Item>
            // </ListGroup> */}

        {/* <br />

          <ListGroup className="rounded-0" id="wd-modules">
          <ListGroup.Item id="wd-modules p-0 mb-5 fs-5 border-gray">
            <div className="wd-title  p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />Week 1, Lecture 2 - Formatting User Interfaces with HTML<LessonControlButtons />
            </div>
            <ListGroup className="wd-lessons rounded-0">
              <ListGroup.Item className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />LEARNING OBJECTIVES<LessonControlButtons />
              </ListGroup.Item>
              <ListGroup.Item className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />Learn how to create user interfaces with HTML<LessonControlButtons />
              </ListGroup.Item>
              <ListGroup.Item className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />Deploy the assignment to Netlify<LessonControlButtons />
              </ListGroup.Item>
            </ListGroup>

            <ListGroup className="wd-lessons rounded-0">
              <ListGroup.Item className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />SLIDES<LessonControlButtons /></ListGroup.Item>
              <ListGroup.Item className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />Introduction to HTML and the DOM<LessonControlButtons />
              </ListGroup.Item>
              <ListGroup.Item className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />Formatting Web Content with Headings and<LessonControlButtons />
              </ListGroup.Item>
              <ListGroup.Item className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />Formatting content with Lists and Tables<LessonControlButtons />
              </ListGroup.Item>
            </ListGroup>
          </ListGroup.Item>
        </ListGroup>

        <br />

          <ListGroup className="rounded-0" id="wd-modules">
          <ListGroup.Item id="wd-modules p-0 mb-5 fs-5 border-gray">
            <div className="wd-title  p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />Week 3<LessonControlButtons /></div>
            <ListGroup className="wd-lessons rounded-0">
              <ListGroup.Item className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />LEARNING OBJECTIVES<LessonControlButtons />
              </ListGroup.Item>
              <ListGroup.Item className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />Introduction to the course<LessonControlButtons />
              </ListGroup.Item>
              <ListGroup.Item className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />Learn what is Web Development<LessonControlButtons />
              </ListGroup.Item>
            </ListGroup>

            <ListGroup className="wd-lessons rounded-0">
              <ListGroup.Item className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />READING<LessonControlButtons />
              </ListGroup.Item>
              <ListGroup.Item className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />Full Stack Developer - Chapter 1 - Introduction<LessonControlButtons />
              </ListGroup.Item>
              <ListGroup.Item className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />Full Stack Developer - Chapter 2 - Creating User<LessonControlButtons />
              </ListGroup.Item>
            </ListGroup>

            <ListGroup className="wd-lessons rounded-0">
              <ListGroup.Item className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />SLIDES<LessonControlButtons /></ListGroup.Item>
              <ListGroup.Item className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />Introduction to Web Development<LessonControlButtons /></ListGroup.Item>
              <ListGroup.Item className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />Creating an HTTP server with Node.js<LessonControlButtons /></ListGroup.Item>
              <ListGroup.Item className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />Creating a React Application<LessonControlButtons /></ListGroup.Item>
            </ListGroup>
          </ListGroup.Item> */}
        {/* </ListGroup> */}
      </div>
  );}
  