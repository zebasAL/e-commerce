import React from 'react';
import NavbarLogo from './NavBarLogo';
import NavBarCategories from './NavBarCategories';
import LoginAndCartBtns from './LoginAndCartBtns';
import AsideBar from './AsideBar';

const NavBar = () => (
  <>
    <div>
      <NavbarLogo />
    </div>
    <span className="hide-navbar-mobile"><NavBarCategories className="categoriesNavBar" /></span>

    <span className="hide-navbar-mobile"><LoginAndCartBtns /></span>
    <AsideBar />
  </>
);

export default NavBar;
