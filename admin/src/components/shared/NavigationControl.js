import React, {PropTypes} from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
const NavigationControl = (props) => {
  const {user} = props;
  return (
    <Navbar>
      <Navbar.Header>
       <Navbar.Brand>
          <img src="/icon.png" height="50px" width="50px"/>
       </Navbar.Brand>
       <Nav>
         <NavItem><b>Fiery Reactions</b></NavItem>
       </Nav>
       <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem>{user != null ? `Welcome, ${user.displayName} ` : ''}</NavItem>
        </Nav>
      </Navbar.Collapse>
   </Navbar>
  );
};

NavigationControl.propTypes = {
  user: PropTypes.object,
};

export default NavigationControl;
