import React from 'react';
import { Popover, Pane, Button } from 'evergreen-ui/';
import { useHistory } from 'react-router-dom';

const NavbarUserBtns = () => {
  const history = useHistory();

  const loginRoute = () => {
    history.push('/login');
  };

  const signupRoute = () => {
    history.push('/signup');
  };

  return (
    <div>
      <Popover
        content={() => (
          <Pane
            paddingX={0}
          >
            <div className="user-login-options">
              <Button onClick={loginRoute}>Sign In</Button>
              <Button onClick={signupRoute}>Create an account</Button>
            </div>
          </Pane>
        )}
      >
        <Button id="user-signup" />
      </Popover>
      <Button id="shopping-cart" />
    </div>
  );
};

export default NavbarUserBtns;
