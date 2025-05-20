import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";

export default function ModulesControls() {
  return (
    <div id="wd-modules-controls" className="d-flex flex-column flex-md-row justify-content-md-end">
      <button className="btn btn-danger mb-2 mb-md-0 ms-md-2 order-md-last" id="wd-add-module-btn">
        <FaPlus className="me-2" /> Module
      </button>
      
      <div className="dropdown mb-2 mb-md-0 ms-md-2">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="wd-publish-all-btn" 
                data-bs-toggle="dropdown" aria-expanded="false">
          <GreenCheckmark /> Publish All
        </button>
        <ul className="dropdown-menu">
          <li><button className="dropdown-item" id="wd-publish-all"><GreenCheckmark /> Publish All</button></li>
          <li><button className="dropdown-item" id="wd-publish-all-modules-and-items"><GreenCheckmark /> Publish all modules and items</button></li>
          <li><button className="dropdown-item" id="wd-publish-modules-only"><GreenCheckmark /> Publish modules only</button></li>
          <li><button className="dropdown-item" id="wd-unpublish-all-modules-and-items">Unpublish all modules and items</button></li>
          <li><button className="dropdown-item" id="wd-unpublish-modules-only">Unpublish modules only</button></li>
        </ul>
      </div>
      
      <button className="btn btn-secondary mb-2 mb-md-0 ms-md-2" id="wd-view-progress">
        View Progress
      </button>
      
      <button className="btn btn-secondary mb-2 mb-md-0 ms-md-2" id="wd-collapse-all">
        Collapse All
      </button>
    </div>
  );
}