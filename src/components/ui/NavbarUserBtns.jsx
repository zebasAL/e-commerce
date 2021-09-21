import React from 'react';
import {
  Popover, Pane, Button, UserIcon, Icon, ShoppingCartIcon,
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
      <Button id="user-login-btn">
        <Icon id="user-login-label" icon={UserIcon} size={25} />
      </Button>
    </Popover>
    <Button id="shopping-cart-btn">
      <Icon id="shopping-cart-label" icon={ShoppingCartIcon} size={25} />
    </Button>
  </div>
);

export default NavbarUserBtns;
