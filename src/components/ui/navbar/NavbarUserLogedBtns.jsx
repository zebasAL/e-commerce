import React from 'react';
import {
  Popover, Pane, Button, Icon, UserIcon, ShoppingCartIcon,
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
            <Button is={Link} to="/">Log out</Button>
          </div>
        </Pane>
      )}
    >
      <Button id="user-login-btn">
        <Icon id="user-login-label" icon={UserIcon} size={25} />
      </Button>
    </Popover>
    <Button id="shopping-cart-btn">
      <Icon id="shopping-cart-label" icon={ShoppingCartIcon} padding={0} size={25} />
    </Button>
  </div>
);

export default NavbarUserLogedBtns;
