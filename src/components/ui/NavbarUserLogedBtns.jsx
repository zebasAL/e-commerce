import React from 'react';
import {
  Popover, Pane, Button,
} from 'evergreen-ui/';
import { Link } from 'react-router-dom';

const NavbarUserLogedBtns = () => (
  <div>
    <Popover
      content={() => (
        <Pane
          paddingX={0}
        >
          <div className="user-login-options">
            <Button is={Link} to="/myaccount">My Account</Button>
            <Button is={Link}>Log out</Button>
          </div>
        </Pane>
      )}
    >
      <Button id="user-signup" />
    </Popover>
    <Button id="shopping-cart" />
  </div>
);

export default NavbarUserLogedBtns;
