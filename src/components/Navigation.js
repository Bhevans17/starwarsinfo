import React, { useState, Fragment } from "react";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import { Link, NavLink } from "react-router-dom";

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Fragment>
      <Navbar expand='md'>
        <Container>
          <NavbarBrand className='text-dark' href='/'>
            <i class='fab fa-galactic-republic'></i> Star Wars Info
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem className='p-3'>
                <NavLink tag={Link} to='/'>
                  Home
                </NavLink>
              </NavItem>
              <NavItem className='p-3'>
                <NavLink tag={Link} to='/people'>
                  People
                </NavLink>
              </NavItem>
              <NavItem className='p-3'>
                <NavLink tag={Link} to='/planets'>
                  Planets
                </NavLink>
              </NavItem>
              <NavItem className='p-3'>
                <NavLink tag={Link} to='/species'>
                  Species
                </NavLink>
              </NavItem>
              <NavItem className='p-3'>
                <NavLink tag={Link} to='/starships'>
                  Starships
                </NavLink>
              </NavItem>
              <NavItem className='p-3'>
                <NavLink tag={Link} to='/vehicles'>
                  Vehicles
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default Navigation;
