import React from 'react';
import { Navbar } from 'react-bootstrap';
const NavigationControl = () => {
  return (
    <Navbar>
      <Navbar.Header>
       <Navbar.Brand>
          <img src="/icon.png" height="50px" width="50px"/>
       </Navbar.Brand>
       <Navbar.Toggle />
      </Navbar.Header>
   </Navbar>
  );
};

export default NavigationControl;
