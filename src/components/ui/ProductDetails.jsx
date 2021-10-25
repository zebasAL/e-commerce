import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import moment from 'moment';
import { Button, toaster } from 'evergreen-ui';
import { connect } from 'react-redux';
import QuantityBtn from './QuantityBtn';
import CollapseBtns from './CollapseBtns';

const ProductDetails = ({
  productValues,
  setCarts,
  carts,
}) => {
  const [productQuantity, setProductQuantity] = useState(1);
  const [isdisabled, setIsdisabled] = useState(false);
  const history = useHistory();

  const handleQuantity = (value) => {
    setProductQuantity(value);
  };

  /**
   * Updates existing cart with the new product
   * or create a new cart
   * @returns object
   */
  const handleNewProduct = () => {
    if (localStorage.getItem('token')) {
      setIsdisabled(true);

      /**
   * New product that the user wants to add to the cart
   */
      const newCartProduct = {
      // eslint-disable-next-line no-undef
        data: productValues,
        productId: productValues.id,
        quantity: productQuantity,
      };

      const cartlist = [...carts];
      const [cart] = cartlist;

      // create a new cart if there isn't any other
      if (cartlist.length <= 0) {
        const userId = parseInt(localStorage.getItem('id'), 10);
        const newCart = {
          userId,
          date: moment().format(),
          products: [newCartProduct],
        };

        axios.post('https://fakestoreapi.com/carts', newCart)
          .then((res) => {
            const newCartResponse = {
              id: res.data.id,
              userId,
              date: moment().format(),
              products: [newCartProduct],
            };
            setCarts([newCartResponse]);
            toaster.success('New cart added');
            setIsdisabled(false);
            handleQuantity(1);
          })
          .catch(() => {
            toaster.warning('Something went wrong, try again');
            setIsdisabled(false);
          });
      } else if (cart.products
        .filter((product) => product.productId === productValues.id).length > 0) {
      // Update product quantity if same product is already in cart
        cart.products.forEach((product) => {
          if (product.productId === productValues.id) {
            product.quantity += productQuantity;
            setCarts(cartlist);
            toaster.success('Product updated');
            setIsdisabled(false);
          }
        });
      } else {
      // Add new product to existing cart
        cart.products.unshift(newCartProduct);

        axios.put(`https://fakestoreapi.com/carts/${cart.id}`, cart)
          .then(() => {
            setCarts(cartlist);
            toaster.success('New product added');
            setIsdisabled(false);
            handleQuantity(1);
          })
          .catch(() => {
            toaster.warning('Something went wrong, try again');
            setIsdisabled(false);
          });
      }
    } else {
      history.push('/login');
      toaster.notify('Please, sign in first');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="product-view-container">
      <div className="product-img-container">
        <div className="product-img-wrapper">
          <img data-cy={`product-image-${productValues.id}`} alt="product-img" src={productValues.image} />
        </div>
      </div>
      <div className="product-info-container">
        <div className="product-info-wrapper">
          <h2 data-cy="product-info-title" className="product-info-title">{productValues.title}</h2>
          <p data-cy="product-info-price" className="product-info-price">
            {`$${productValues.price} USD`}
          </p>
          <form onSubmit={handleSubmit}>
            <p>Quantity</p>
            <QuantityBtn
              productQuantity={productQuantity}
              setProductQuantity={(value) => handleQuantity(value)}
            />
            <div className="product-view-add-and-buy-btns">
              <Button disabled={isdisabled} onClick={handleNewProduct} id="add-to-cart-btn">Add to cart</Button>
              <Button appearance="primary" id="buy-product-btn">Buy it now</Button>
            </div>
          </form>
          <p data-cy="product-info-description" className="product-info-description">{productValues.description}</p>
          <CollapseBtns productDetails={productValues} />
        </div>
      </div>
    </div>
  );
};

ProductDetails.propTypes = {
  productValues: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.number.isRequired,
    price: PropTypes.number,
    description: PropTypes.string,
    category: PropTypes.string,
    image: PropTypes.string,
    rating: PropTypes.shape({
      rate: PropTypes.number,
      count: PropTypes.number,
    }).isRequired,
  }).isRequired,
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
};

const mapStateToProps = (state) => ({ carts: state.carts });

const mapDispatchToProps = (dispatch) => ({
  setCarts: (values) => dispatch({
    type: 'SET_CARTS',
    payload: values,
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
