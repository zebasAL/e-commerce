import React from 'react';
import { useHistory } from 'react-router-dom';

const NavbarLogo = () => {
  const history = useHistory();

  const routeChange = () => {
    const path = '/';
    history.push(path);
  };

  return (
    <>
      <a href="#!" onClick={routeChange} className="logo">E-commerce</a>
    </>
  );
};

export default NavbarLogo;
