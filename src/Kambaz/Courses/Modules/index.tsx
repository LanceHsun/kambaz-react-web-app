import { ListGroup } from "react-bootstrap";
import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { useParams } from "react-router-dom";
import * as db from "../../Database";

export default function Modules() {
  const { cid } = useParams();
  const modules = db.modules;

  const courseModules = modules.filter((module: any) => module.course === cid);
  
  return (
    <div className="w-100">
      <ModulesControls />
      <ListGroup className="rounded-0 w-100" id="wd-modules">
        {courseModules.map((module: any) => (
          <ListGroup.Item key={module._id} className="wd-module p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 d-flex align-items-center bg-secondary">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" /> 
                <div>{module.name}</div>
              </div>
              <ModuleControlButtons />
            </div>
            {module.lessons && module.lessons.length > 0 ? (
              <ListGroup className="wd-lessons rounded-0">
                {module.lessons.map((lesson: any) => (
                  <ListGroup.Item key={lesson._id} className="wd-lesson p-3 ps-1 d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <BsGripVertical className="me-2 fs-3" /> {lesson.name}
                    </div>
                    <LessonControlButtons />
                  </ListGroup.Item>
                ))}
              </ListGroup>
            ) : (
              <ListGroup className="wd-lessons rounded-0">
                <ListGroup.Item className="wd-lesson p-3 ps-1 d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <BsGripVertical className="me-2 fs-3" /> {module.description || "No lessons available yet"}
                  </div>
                  <LessonControlButtons />
                </ListGroup.Item>
              </ListGroup>
            )}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}