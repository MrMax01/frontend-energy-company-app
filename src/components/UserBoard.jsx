import { Button, Col, Collapse, Container, Form, Image, Nav, Navbar, Row } from "react-bootstrap";
import ClientCard from "./ClientCard";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const UserBoard = () => {
  const [open, setOpen] = useState(false);
  const me = useSelector((state) => state.me.content);

  return (
    <>
      <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="bg-body-tertiary mb-3">
        <Container>
          <Navbar.Brand href="#home">Welcome User {me.nome}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/me">My Profile</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <Container className="mb-3">
          <Button
            className="mb-3"
            onClick={() => setOpen(!open)}
            aria-controls="collapse-filter-form"
            aria-expanded={open}
          >
            click
          </Button>
          <Collapse in={open}>
            <Form id="collapse-filter-form">
              <Form.Select aria-label="Default select example">
                <option>Ordina per:</option>
                <option value="1">Nome</option>
                <option value="2">Fatturato Annuale</option>
                <option value="4">Data di Inserimento</option>
                <option value="5">Data di ultimo contatto</option>
                <option value="6">provincia della sede legale</option>
              </Form.Select>
              <h4 className="text-white text-start mt-3">Filtre per:</h4>
              <Form.Group className="mb-3">
                <Form.Label className="text-white">Fatturato Annuale</Form.Label>
                <div className="d-flex">
                  <Form.Control className="me-3" type="number" placeholder="min" />
                  <Form.Control type="number" placeholder="max" />
                </div>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="text-white">Data di ultimo contatto</Form.Label>
                <div className="d-flex align-items-center">
                  <Form.Label className="text-white me-2">DA:</Form.Label>
                  <Form.Control className="me-3" type="date" placeholder="min" />
                  <Form.Label className="text-white me-2">A:</Form.Label>
                  <Form.Control type="date" placeholder="max" />
                </div>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="text-white">Data di inserimento</Form.Label>
                <div className="d-flex align-items-center">
                  <Form.Label className="text-white me-2">DA:</Form.Label>
                  <Form.Control className="me-3" type="date" placeholder="min" />
                  <Form.Label className="text-white me-2">A:</Form.Label>
                  <Form.Control type="date" placeholder="max" />
                </div>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="text-white">search name</Form.Label>
                <Form.Control type="text" placeholder="search name" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Collapse>
        </Container>
        <ClientCard />
      </Container>
    </>
  );
};
export default UserBoard;
