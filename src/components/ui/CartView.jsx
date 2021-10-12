/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  SideSheet, Heading, Pane, Button, Icon, ShoppingCartIcon, Spinner, toaster, Pill,
} from 'evergreen-ui';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';
import moment from 'moment';
import { Link, useHistory } from 'react-router-dom';
import QuantityBtn from './QuantityBtn';

const CartView = ({
  loaded,
  carts,
  setCarts,
  isUserLoggedIn,
}) => {
  const [isShown, setIsShown] = useState(false);
  const [disabled, setDisabled] = useState(false);

  /**
   * handleUpdateQuantity
   * @param {number} cartIndex
   * @param {number} productIndex
   * @param {string} value
   */
  const handleUpdateQuantity = (cartIndex, productIndex, value) => {
    const updatedCarts = [...carts];
    updatedCarts[cartIndex].products[productIndex].quantity = value;
    setCarts(updatedCarts);
  };

  /**
   * removeProductCart
   * @param {number} cartIndex
   * @param {number} productId
   * @returns {void}
   */
  const removeProductCart = (cartIndex, productId) => {
    setDisabled(true);

    let updatedListOfCarts = [...carts];
    if (updatedListOfCarts[cartIndex].products.length === 1) {
      // delete the whole cart
      axios.delete(`https://fakestoreapi.com/carts/${updatedListOfCarts[cartIndex].id}`)
        .then((response) => {
          toaster.success('Cart deleted');
          updatedListOfCarts = updatedListOfCarts.filter((cart, index) => index !== cartIndex);
          setCarts(updatedListOfCarts);
          setDisabled(false);
        })
        .catch(() => {
          toaster.warning('Something went wrong, Try again');
          setDisabled(false);
        });
    } else {
      // delete just one product
      updatedListOfCarts.forEach((cart, index) => {
        if (cartIndex === index) {
          cart.products = cart.products.filter((product) => product.data.id !== productId);
        }
      });

      const updatedCart = {
        ...updatedListOfCarts[cartIndex],
        products: updatedListOfCarts[cartIndex].products.map((prod) => ({
          productId: prod.productId,
          quantity: prod.quantity,
        })),
      };

      axios.put(`https://fakestoreapi.com/carts/${updatedCart.id}`, updatedCart)
        .then((response) => {
          toaster.success('Product deleted');
          setCarts(updatedListOfCarts);
          setDisabled(false);
        })
        .catch(() => {
          toaster.warning('Something went wrong, try again');
        });
    }
  };

  /**
   * getNumberOfProductsInCart
   * @returns {number}
   */
  const getNumberOfProductsInCart = () => {
    let count = 0;
    carts.forEach((cart) => {
      cart.products.forEach((product) => {
        count += product.quantity;
      });
    });
    return count;
  };

  return (
    <>
      <SideSheet
        className="side-shoppint-cart-btn"
        isShown={isShown}
        onCloseComplete={() => setIsShown(false)}
        containerProps={{
          display: 'flex',
          flex: '1',
          flexDirection: 'column',
        }}
      >
        <Pane zIndex={1} flexShrink={0} elevation={0} backgroundColor="white">
          <Pane padding={16}>
            <Heading display="flex" justifyContent="center" size={600}>Shopping Cart</Heading>
          </Pane>
        </Pane>

        {(loaded === false) ? <div style={{ display: 'table', margin: '10px auto' }}><Spinner /></div> : null}
        {carts.length === 0 ? <div data-cy="message-no-products" style={{ display: 'table', margin: '50px auto' }}>You have not added any product yet</div> : null}
        <Pane flex="1" overflowY="scroll" background="tint1" padding={16}>
          <>
            {carts.map((cartProduct, cartIndex) => (
              <div key={`cart-${cartProduct.id}`} className="cart-products-container">
                <div className="cart-products-title">
                  <p>{`Cart ${cartIndex + 1}`}</p>
                  <p>{`Created: ${moment(cartProduct.date).format('MMM Do YY')}`}</p>
                </div>

                {cartProduct.products.map((product, productIndex) => (
                  <div className="cart-products-wrapper" key={`cart-product-${product?.data?.id}`}>
                    <Link id={`product-view-${product?.data?.id}`} to={`/products/${product?.data?.id}`}>
                      <img alt="CartProduct" src={product?.data?.image} data-cy={`product-cart-image-${product?.data?.id}`} />
                    </Link>

                    <div className="cart-products-content" data-cy={`product-cart-title-${product?.data?.id}`}>
                      <p>{product?.data?.title}</p>
                      <div className="cart-products-pricing">
                        <div className="quantity-container">
                          <p>{'Quantity: '}</p>
                          <QuantityBtn
                            inputId={`${product?.data?.id}`}
                            marginY="auto"
                            marginX={10}
                            setProductQuantity={
                              (value) => handleUpdateQuantity(cartIndex, productIndex, value)
                            }
                            productQuantity={product.quantity}
                          />
                        </div>
                        <p>{`Price: $ ${product?.data?.price}`}</p>
                      </div>
                      <p>{`Total: $ ${(product?.data?.price * product.quantity).toFixed(2)}`}</p>
                      <Button
                        data-cy={`delete-button-${cartProduct?.id}-${product?.data?.id}`}
                        disabled={disabled}
                        onClick={() => {
                          removeProductCart(cartIndex, product?.data?.id);
                        }}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                ))}

                <div className="payment-button">
                  <Button className="buy-products-cart-button" appearance="primary" marginTop={10}>Proceed with the payment</Button>
                </div>
              </div>
            ))}
          </>
        </Pane>
      </SideSheet>
      <Button
        position="relative"
        id="shopping-cart-btn"
        onClick={() => isUserLoggedIn() && setIsShown(true)}
      >
        <Icon id="shopping-cart-label" icon={ShoppingCartIcon} padding={0} size={25} />

        <Pill data-cy="cart-products-number" marginY="10px" paddingX={4} display="block">
          {getNumberOfProductsInCart()}
        </Pill>
      </Button>
    </>
  );
};

CartView.propTypes = {
  loaded: PropTypes.bool,
  carts: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.string.isRequired,
    id: PropTypes.number,
    userId: PropTypes.number.isRequired,
    products: PropTypes.arrayOf(PropTypes.shape({
      productId: PropTypes.number,
      quantity: PropTypes.number,
      data: PropTypes.shape({
        id: PropTypes.number,
        image: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
      }).isRequired,
    })).isRequired,
  })).isRequired,
  setCarts: PropTypes.func.isRequired,
  isUserLoggedIn: PropTypes.func,
};

CartView.defaultProps = {
  loaded: true,
  isUserLoggedIn: () => 'none',
};

const mapStateToProps = (state) => ({ carts: state.carts });

const mapDispatchToProps = (dispatch) => ({
  setCarts: (values) => dispatch({
    type: 'SET_CARTS',
    payload: values,
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartView);
