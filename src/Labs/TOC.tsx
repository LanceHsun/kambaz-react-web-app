import Nav from "react-bootstrap/Nav";
import { Link, useLocation } from "react-router-dom";

export default function TOC() {
  const location = useLocation();
  const currentPath = location.pathname;
  
  return (
    <div>
      <h2>Zixin Lin</h2>
      <Nav variant="pills">
        <Nav.Item>
          <Nav.Link as={Link} to="/Labs" active={currentPath === "/Labs"}>
            Labs
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/Labs/Lab1" active={currentPath === "/Labs/Lab1"}>
            Lab 1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/Labs/Lab2" active={currentPath === "/Labs/Lab2"}>
            Lab 2
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/Labs/Lab3" active={currentPath === "/Labs/Lab3"}>
            Lab 3
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/Kambaz" active={currentPath.startsWith("/Kambaz")}>
            Kambaz
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link 
            href="https://github.com/LanceHsun/kambaz-react-web-app" 
            id="wd-github" 
            target="_blank">
            GitHub Repository
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}