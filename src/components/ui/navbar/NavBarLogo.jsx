import React from 'react';
import {
  Link,
} from 'react-router-dom';
import {
  Button,
} from 'evergreen-ui/';

const NavbarLogo = () => (
  <>
    <Button id="navbar-logo" is={Link} to="/" className="logo">E-commerce</Button>
  </>
);

export default NavbarLogo;
