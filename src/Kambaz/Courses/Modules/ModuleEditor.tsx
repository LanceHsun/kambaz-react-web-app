import { Modal, FormControl, Button } from "react-bootstrap";
export default function ModuleEditor({ show, handleClose, dialogTitle, moduleName, setModuleName, moduleDescription, setModuleDescription, addModule, }: {
    show: boolean; handleClose: () => void; dialogTitle: string; moduleName: string; setModuleName: (name: string) => void;
    moduleDescription: string;
    setModuleDescription: (description: string) => void;
    addModule: () => void;
}) {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{dialogTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="mb-3">
                    <label className="form-label">Module Name</label>
                    <FormControl 
                        value={moduleName}
                        onChange={(e) => { setModuleName(e.target.value); }}
                        placeholder="Enter module name"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Module Description</label>
                    <FormControl 
                        as="textarea"
                        rows={3}
                        value={moduleDescription}
                        onChange={(e) => { setModuleDescription(e.target.value); }}
                        placeholder="Enter module description"
                    />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}> Cancel </Button>
                <Button variant="btn btn-danger"
                    onClick={() => {
                        addModule();
                        handleClose();
                    }} > Add Module </Button>
            </Modal.Footer>
        </Modal>
    );
}
