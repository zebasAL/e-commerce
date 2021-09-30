import React, {
  useEffect, useState, useRef,
} from 'react';
import { toaster } from 'evergreen-ui';
import axios from 'axios';
import NavbarLogo from './NavBarLogo';
import NavBarCategoriesBtns from './NavBarCategoriesBtns';
import LoginAndCartBtns from './LoginAndCartBtns';
import AutoCompleteField from './AutoCompleteField';
import AsideBar from './AsideBar';

const NavBar = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(true);
  const [display, setDisplay] = useState(false);
  const wrapperRef = useRef(null);

  const getCategories = () => {
    axios.get('https://fakestoreapi.com/products/categories?limit=4')
      .then((res) => {
        setCategories(res.data);
      })
      .catch(() => {
        toaster.danger('Something went wrong...');
      });
  };

  const getOptions = () => {
    axios.get('https://fakestoreapi.com/products')
      .then((res) => {
        setProducts(res.data);
      })
      .catch(() => {
        toaster.warning('Something went wrong...');
      });
  };

  useEffect(() => {
    getCategories();
    getOptions();
  }, []);

  useEffect(() => {
    setShow(!show);
  }, [categories]);

  const isClickedOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setDisplay(false);
    }
  };

  const handleClickOutside = () => {
    document.addEventListener('mousedown', isClickedOutside);
    return () => {
      // Unmounted - cleanup
      document.removeEventListener('mousedown', isClickedOutside);
    };
  };

  return (
    <>
      <div>
        <NavbarLogo />
      </div>

      {show ? (
        <span className="hide-navbar-mobile">
          <AutoCompleteField
            handleClickOutside={handleClickOutside}
            products={products}
            setDisplay={setDisplay}
            display={display}
            wrapperRef={wrapperRef}
          />
        </span>
      ) : null}

      <span className="hide-navbar-mobile">
        <NavBarCategoriesBtns categoryValues={categories} className="categoriesNavBar" />
      </span>

      <span className="hide-navbar-mobile">
        <LoginAndCartBtns />
      </span>
      <AsideBar
        categoryValues={categories}
        products={products}
        handleClickOutside={handleClickOutside}
        setDisplay={setDisplay}
        display={display}
        wrapperRef={wrapperRef}
      />
    </>
  );
};

export default NavBar;
