/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  useEffect, useState, useRef,
} from 'react';
import { toaster } from 'evergreen-ui';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import NavbarLogo from './NavBarLogo';
import NavBarCategoriesBtns from './NavBarCategoriesBtns';
import LoginAndCartBtns from './LoginAndCartBtns';
import AutoCompleteField from './AutoCompleteField';
import AsideBar from './AsideBar';

const NavBar = ({
  setCarts,
}) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(true);
  const [display, setDisplay] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const wrapperRef = useRef(null);
  const userId = localStorage.getItem('id');

  /**
   * Brings every product details of all carts
   * @param {Array} userCarts
   */
  const getCartProducts = (userCarts) => {
    const listOfProductsIds = [];
    userCarts.forEach((userCart) => {
      listOfProductsIds.push(...userCart.products);
    });

    Promise.all(listOfProductsIds.map((product) => axios.get(`https://fakestoreapi.com/products/${product.productId}`)))
      .then((response) => {
        const listOfProducts = [];

        response.forEach((data) => {
          listOfProducts.push(data.data);
          setLoaded(true);
        });

        const listOfCarts = [...userCarts];
        listOfCarts.forEach((cart) => {
          cart.products.forEach((item) => {
            const [product] = listOfProducts.filter((i) => i.id === item.productId);
            item.data = product;
          });
        });
        setCarts(listOfCarts);
      })
      .catch(() => {
        toaster.notify('We could not get your cart');
        setLoaded(true);
      });
  };

  /**
   * Get all carts from the user
   * @returns {Array}
   */
  const getUserProductsCarts = () => {
    const accessToken = localStorage.getItem('token');
    if (accessToken) {
      axios.get(`https://fakestoreapi.com/carts/user/${userId}`)
        .then((response) => {
          getCartProducts(response.data);
          if (response.data === 0) {
            setLoaded(true);
          }
        })
        .catch(() => {
          toaster.notify('We could not get your cart');
        });
    }
    setLoaded(true);
  };

  /**
   * Get categories for navbar buttons
   * @returns {Array}
   */
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
    getUserProductsCarts();
  }, []);

  useEffect(() => {
    setShow(!show);
  }, [categories]);

  const isClickedOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setDisplay(false);
    }
  };

  const handleClickOutside = React.useCallback(() => {
    document.addEventListener('mousedown', isClickedOutside);
    return () => {
      // Unmounted - cleanup
      document.removeEventListener('mousedown', isClickedOutside);
    };
  }, []);

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
        <LoginAndCartBtns
          loaded={loaded}
        />
      </span>
      <AsideBar
        categoryValues={categories}
        products={products}
        handleClickOutside={handleClickOutside}
        setDisplay={setDisplay}
        display={display}
        wrapperRef={wrapperRef}
        loaded={loaded}
      />
    </>
  );
};

NavBar.propTypes = {
  setCarts: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setCarts: (values) => dispatch({
    type: 'SET_CARTS',
    payload: values,
  }),
});

export default connect(null, mapDispatchToProps)(NavBar);
