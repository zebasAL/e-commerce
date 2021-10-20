import React from 'react';
import PropTypes from 'prop-types';
import NavbarUserBtns from './NavbarUserBtns';
import NavbarUserLogedBtns from './NavbarUserLogedBtns';

const LoginAndCartBtns = ({
  loaded,
}) => (
  <>
    {!localStorage.getItem('token') === true
      ? (
        <NavbarUserBtns
          loaded={loaded}
        />
      )
      : (
        <NavbarUserLogedBtns
          loaded={loaded}
        />
      )}
  </>
);

LoginAndCartBtns.propTypes = {
  loaded: PropTypes.bool,
};

LoginAndCartBtns.defaultProps = {
  loaded: true,
};

export default LoginAndCartBtns;
