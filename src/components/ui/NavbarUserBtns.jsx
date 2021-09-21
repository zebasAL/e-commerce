import React from 'react';
import {
  Popover, Pane, Button,
} from 'evergreen-ui/';
import { Link } from 'react-router-dom';

const NavbarUserBtns = () => (
  <div>
    <Popover
      content={() => (
        <Pane
          paddingX={0}
        >
          <div className="user-login-options">
            <Button is={Link} id="login-btn" to="/login">Sign In</Button>
            <Button is={Link} to="/signup">Create an account</Button>
          </div>
        </Pane>
      )}
    >
      <Button id="user-signup" />
    </Popover>
    <Button id="shopping-cart" />
  </div>
);

export default NavbarUserBtns;
