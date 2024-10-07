import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/redux";
import { setLogout } from "../../../redux/slices/auth";
export const Header = () => {
  const dispatch = useAppDispatch();
    const handleLogout = () => {
      dispatch(setLogout())
    }
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>
          <Link to={"/home"} className="nav-link">
            Home
          </Link>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Item>
            <Link to={"/search"} className="nav-link">
              Buscar Heroe
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to={"/dcHeroes"} className="nav-link">
              DC Heroes
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to={"/marvelHeroes"} className="nav-link">
              Marvel Heroes
            </Link>
          </Nav.Item>
        </Nav>
        <Navbar.Collapse className="justify-content-end gap-2">
          <Navbar.Text>Sesión: Admin </Navbar.Text>
          <Nav.Item>
            <div className="d-flex justify-content-center align-items-center" onClick={handleLogout}>
            <span className="material-symbols-outlined" style={{color: 'white', cursor: 'pointer'}}>logout</span>
            </div>
          </Nav.Item>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
