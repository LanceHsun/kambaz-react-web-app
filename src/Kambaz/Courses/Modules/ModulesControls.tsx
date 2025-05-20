import { FaPlus } from "react-icons/fa6"; 
import GreenCheckmark from "./GreenCheckmark"; 
import { Button, Dropdown, Container, Row, Col } from "react-bootstrap"; 
import { MdDoNotDisturbAlt } from "react-icons/md";  

export default function ModulesControls() {     
    return (
        <Container fluid className="mb-4">
            <Row>
                <Col className="d-flex justify-content-end overflow-auto">
                    <div id="wd-modules-controls" className="d-inline-flex flex-nowrap">
                        <Button variant="secondary" size="lg" className="me-2 flex-shrink-0" id="wd-collapse-all">
                            Collapse All
                        </Button>
                        <Button variant="secondary" size="lg" className="me-2 flex-shrink-0" id="wd-view-progress">
                            View Progress
                        </Button>
                        <Dropdown className="me-2 flex-shrink-0">
                            <Dropdown.Toggle variant="secondary" size="lg" id="wd-publish-all-btn">
                                <GreenCheckmark /> Publish All
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item id="wd-publish-all-modules-and-items">
                                    <GreenCheckmark /> Publish all modules and items
                                </Dropdown.Item>
                                <Dropdown.Item id="wd-publish-modules-only">
                                    <GreenCheckmark /> Publish modules only
                                </Dropdown.Item>
                                <Dropdown.Item id="wd-unpublish-all-modules-and-items">
                                    <MdDoNotDisturbAlt /> Unpublish all modules and items
                                </Dropdown.Item>
                                <Dropdown.Item id="wd-unpublish-modules-only">
                                    <MdDoNotDisturbAlt /> Unpublish modules only
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Button variant="danger" size="lg" className="flex-shrink-0" id="wd-add-module-btn">
                            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                            Module
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    ); 
}