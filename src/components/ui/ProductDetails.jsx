import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'evergreen-ui';
import QuantityBtn from './QuantityBtn';
import CollapseBtns from './CollapseBtns';

const ProductDetails = ({
  productValues,
}) => {
  const [productQuantity, setProductQuantity] = useState(1);
  const onlyPositive = /[1-9]\d?/;

  const validateInputValue = (prev) => {
    if (onlyPositive.test(prev.target.value) || prev.target.value === '') {
      setProductQuantity(prev.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="product-view-container">
      <div className="product-img-container">
        <div className="product-img-wrapper">
          <img data-cy="product-image" alt="product-img" src={productValues.image} />
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
              validateInputValue={validateInputValue}
              productQuantity={productQuantity}
              setProductQuantity={setProductQuantity}
            />
            <div className="product-view-add-and-buy-btns">
              <Button id="add-to-cart-btn">Add to cart</Button>
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
    price: PropTypes.number,
    description: PropTypes.string,
    category: PropTypes.string,
    image: PropTypes.string,
    rating: PropTypes.shape({
      rate: PropTypes.number,
      count: PropTypes.number,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
