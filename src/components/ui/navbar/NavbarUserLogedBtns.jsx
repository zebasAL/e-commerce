import React from 'react';
import {
  Popover, Pane, Button, Icon, UserIcon, toaster,
} from 'evergreen-ui/';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import CartView from '../CartView';

const NavbarUserLogedBtns = ({
  loaded,
}) => {
  const history = useHistory();

  const handleLogOut = () => {
    window.localStorage.clear();
    history.push('/');
    window.location.reload(false);
    toaster.notify('you have signed out');
  };

  return (
    <div>
      <Popover
        content={() => (
          <Pane
            paddingX={0}
          >
            <div className="user-login-options">
              <Button id="my-account-btn" is={Link} to="/myaccount">My Account</Button>
              <Button id="logout-btn" onClick={handleLogOut}>Log out</Button>
            </div>
          </Pane>
        )}
      >
        <Button id="user-myaccount-btn">
          <Icon id="user-login-label" icon={UserIcon} size={25} />
        </Button>
      </Popover>
      <CartView loaded={loaded} />
    </div>
  );
};

NavbarUserLogedBtns.propTypes = {
  loaded: PropTypes.bool,
};

NavbarUserLogedBtns.defaultProps = {
  loaded: false,
};

export default NavbarUserLogedBtns;
