import { Modal, Button } from "react-bootstrap";

export default function AssignmentDelete({ 
    show, 
    handleClose, 
    dialogTitle, 
    assignment,
    deleteAssignment 
}: {
    show: boolean; 
    handleClose: () => void; 
    dialogTitle: string; 
    assignment: any;
    deleteAssignment: (assignment: any) => void;
}) {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{dialogTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}> 
                    Cancel 
                </Button>
                <Button variant="primary"
                    onClick={() => {
                        deleteAssignment(assignment);
                        handleClose();
                    }}> 
                    Yes 
                </Button>
            </Modal.Footer>
        </Modal>
    );
}