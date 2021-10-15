import { Navbar, Container, Nav } from "react-bootstrap";
import { FaRobot } from "react-icons/fa";
import { Link } from "react-router-dom";
import style from "./Header.module.scss";

export const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Navbar.Brand href="/">
            <FaRobot size="2em" className={style.icon}/>
          </Navbar.Brand>
        </Link>
        <Nav className="me-auto">
          <Link to="/messages" style={{ textDecoration: "none" }}>
            <Nav.Link disabled>Messages</Nav.Link>
          </Link>
          <Link to="/bots" style={{ textDecoration: "none" }}>
            <Nav.Link disabled>Bots</Nav.Link>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};