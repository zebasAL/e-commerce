import React, { useEffect, useState } from 'react';
import { toaster } from 'evergreen-ui';
import axios from 'axios';
import NavbarLogo from './NavBarLogo';
import NavBarCategoriesBtns from './NavBarCategoriesBtns';
import LoginAndCartBtns from './LoginAndCartBtns';
import AsideBar from './AsideBar';

const NavBar = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = () => {
    axios.get('https://fakestoreapi.com/products/categories?limit=4')
      .then((res) => {
        setCategories(res.data);
      })
      .catch(() => {
        toaster.danger('Something went wrong...');
      });
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      <div>
        <NavbarLogo />
      </div>
      <span className="hide-navbar-mobile">
        <NavBarCategoriesBtns categoryValues={categories} className="categoriesNavBar" />
      </span>

      <span className="hide-navbar-mobile">
        <LoginAndCartBtns />
      </span>
      <AsideBar categoryValues={categories} />
    </>
  );
};

export default NavBar;
