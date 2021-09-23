import React from 'react';
import NavbarUserBtns from './NavbarUserBtns';
import NavbarUserLogedBtns from './NavbarUserLogedBtns';

const LoginAndCartBtns = () => (
  <>
    {!localStorage.getItem('token') === true
      ? <NavbarUserBtns />
      : <NavbarUserLogedBtns />}
  </>
);

export default LoginAndCartBtns;
