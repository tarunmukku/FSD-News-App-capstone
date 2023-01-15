import React, { useState } from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function Header() {

  const currentUser = JSON.parse(localStorage.getItem("currentUser"))
  const [search, setSearch] = useState('');
  const searchParam = '/search?query='+ search

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container className="container-fluid">
        <Navbar.Brand href="/">News Portal</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
      
          <Nav.Link variant="outline-success" href="/dashboard">Dashboard</Nav.Link >
          <Nav.Link href="/readnow"> Favouriates</Nav.Link>
      
        </Nav>
       
        <Nav>
          <Navbar.Brand href="#">{ localStorage.getItem("currentUser")  ? "Welcome back "+currentUser.firstname:""}</Navbar.Brand>
        </Nav>
           
       
            {localStorage.getItem("currentUser") ? (
              <Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    id="query"
                    aria-label="Search"
                    onChange={(e) => {
                      setSearch(e.target.value)
                      }}
                  />
                 
                  <Button  disabled={search===''} variant="outline-success"  href={searchParam} >Search</Button>
                </Form>
              <Nav.Link href="/logout"> Logout</Nav.Link>
              </Nav>
             
                  ) : (
                <Nav>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/register"> Register</Nav.Link>
                </Nav>
                  )}
          

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



export default Header;