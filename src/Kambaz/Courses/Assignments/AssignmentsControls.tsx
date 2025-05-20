import { Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";

export default function AssignmentsControls() {
    return (
        <div id="wd-assignment-controls" className="text-nowrap">
            <Button variant="danger" size="lg" className="me-1 float-end">
                <FaPlus /> Assignment
            </Button>
            <Button variant="secondary" size="lg" className="me-1 float-end">
                <FaPlus /> Group
            </Button>
        </div>
    );
}