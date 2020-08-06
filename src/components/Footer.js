import React from "react";
import { Container, Nav, NavItem, NavLink } from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <Nav className='bg-dark mt-5 py-4'>
        <Container>
          <h5 className='text-white'>More Star Wars Websites</h5>
          <NavLink
            className='text-muted'
            target='_blank'
            href='https://www.starwars.com/'
          >
            Official Star Wars Website
          </NavLink>
          <NavLink
            className='text-muted'
            target='_blank'
            href='https://swapi.dev/'
          >
            Star Wars API
          </NavLink>
          <NavLink
            className='text-muted'
            target='_blank'
            href='https://starwars.fandom.com/wiki/Main_Page'
          >
            Wookiepedia
          </NavLink>
        </Container>
      </Nav>
    );
  }
}

export default Footer;
