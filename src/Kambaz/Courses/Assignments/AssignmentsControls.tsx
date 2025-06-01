import { Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import { useParams, useNavigate } from "react-router";

export default function AssignmentsControls() {
    const { cid } = useParams();
    const navigate = useNavigate();

    return (
        <div id="wd-assignment-controls" className="text-nowrap">
            <Button
                variant="danger"
                size="lg"
                className="me-1 float-end"
                onClick={() => {
                    navigate(`/Kambaz/Courses/${cid}/Assignments/new`);
                }}
            >
                <FaPlus /> Assignment
            </Button>
            <Button variant="secondary" size="lg" className="me-1 float-end">
                <FaPlus /> Group
            </Button>
        </div>
    );
}