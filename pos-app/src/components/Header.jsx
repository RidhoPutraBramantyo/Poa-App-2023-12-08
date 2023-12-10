import React from "react";
import {
  Container,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from "react-bootstrap";
import "../css/Header.css";
const Header = () => {
  return (
    <Navbar bg="white" expand="lg" className="justify-content-between">
      <Container fluid>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search document or product"
            className="mr-sm-2"
          />
        </Form>
        <Nav>
          <NavDropdown title="Max Thompson" id="basic-nav-dropdown" alignRight>
            <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
