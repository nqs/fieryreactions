import React, {PropTypes} from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
const NavigationControl = () => {
  return (
    <Navbar>
      <Navbar.Header>
       <Navbar.Brand>
          <img src="/icon.png" height="50px" width="50px"/>
       </Navbar.Brand>
       <Nav>
         <NavItem><b>Fiery Reactions</b></NavItem>
       </Nav>
      </Navbar.Header>
   </Navbar>
  );
};

NavigationControl.propTypes = {
  user: PropTypes.object,
};

export default NavigationControl;
