import React from 'react';
import {
  Popover, Pane, Button, UserIcon, Icon, toaster,
} from 'evergreen-ui/';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import CartView from '../CartView';

const NavbarUserBtns = ({
  loaded,
}) => {
  const history = useHistory();

  const isUserLoggedIn = () => {
    const accessToken = localStorage.getItem('token');
    if (!accessToken) {
      history.push('/login');
      toaster.notify('Please, sign in first');
    }
  };

  return (
    <div>
      <Popover
        content={() => (
          <Pane
            paddingX={0}
          >
            <div className="user-login-options">
              <Button is={Link} id="login-btn" to="/login">Sign In</Button>
              <Button is={Link} id="signup-btn" to="/signup">Create an account</Button>
            </div>
          </Pane>
        )}
      >
        <Button id="user-login-btn">
          <Icon id="user-login-label" icon={UserIcon} size={25} />
        </Button>
      </Popover>
      <CartView isUserLoggedIn={isUserLoggedIn} loaded={loaded} />
    </div>
  );
};

NavbarUserBtns.propTypes = {
  loaded: PropTypes.bool,
};

NavbarUserBtns.defaultProps = {
  loaded: false,
};

export default NavbarUserBtns;
