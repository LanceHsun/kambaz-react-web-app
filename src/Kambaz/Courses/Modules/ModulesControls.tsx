import { Button, Dropdown } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";

export default function ModulesControls() {
  return (
    <div id="wd-modules-controls" className="d-flex justify-content-end mb-4 w-100">
      <Button variant="light" id="wd-collapse-all" className="rounded-1 me-1 text-center">
        Collapse All
      </Button>
      
      <Button variant="light" id="wd-view-progress" className="rounded-1 me-1 text-center">
        View Progress
      </Button>
      
      <Dropdown className="me-1">
        <Dropdown.Toggle variant="light" id="wd-publish-all-btn" className="rounded-1 d-flex align-items-center">
          <div className="d-flex align-items-center">
            <span className="position-relative d-flex align-items-center me-1">
              <span className="bg-success rounded-circle d-flex align-items-center justify-content-center" 
                    style={{ width: '20px', height: '20px', marginRight: '5px' }}>
                <FaCheck className="text-white" style={{ fontSize: '12px' }} />
              </span>
            </span>
            Publish All
          </div>
        </Dropdown.Toggle>
        
        <Dropdown.Menu>
          <Dropdown.Item id="wd-publish-all">
            <span className="position-relative d-flex align-items-center">
              <span className="bg-success rounded-circle d-flex align-items-center justify-content-center" 
                    style={{ width: '20px', height: '20px', marginRight: '5px' }}>
                <FaCheck className="text-white" style={{ fontSize: '12px' }} />
              </span>
              Publish all modules and items
            </span>
          </Dropdown.Item>
          <Dropdown.Item id="wd-publish-modules-only">
            <span className="position-relative d-flex align-items-center">
              <span className="bg-success rounded-circle d-flex align-items-center justify-content-center" 
                    style={{ width: '20px', height: '20px', marginRight: '5px' }}>
                <FaCheck className="text-white" style={{ fontSize: '12px' }} />
              </span>
              Publish modules only
            </span>
          </Dropdown.Item>
          <Dropdown.Item id="wd-unpublish-all-modules-and-items">
            <span className="position-relative d-flex align-items-center">
              <span className="text-dark" style={{ marginLeft: '25px' }}>
                Unpublish all modules and items
              </span>
            </span>
          </Dropdown.Item>
          <Dropdown.Item id="wd-unpublish-modules-only">
            <span className="position-relative d-flex align-items-center">
              <span className="text-dark" style={{ marginLeft: '25px' }}>
                Unpublish modules only
              </span>
            </span>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      
      <Button variant="danger" id="wd-add-module-btn" className="rounded-1">
        <FaPlus className="me-1" /> Module
      </Button>
    </div>
  );
}
