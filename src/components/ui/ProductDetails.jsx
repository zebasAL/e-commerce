import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'evergreen-ui';
import QuantityBtn from './QunatityBtn';
import CollapseBtns from './CollapseBtns';

const ProductDetails = ({
  productvalues,
}) => {
  const [productQuntity, setProductQuntity] = useState(1);
  const onlyPositive = /[1-9]\d?/;

  const validateNewQuantity = (prev) => {
    if (onlyPositive.test(prev.target.value)) {
      setProductQuntity(prev.target.value);
    }
  };

  const validateSubtraction = () => {
    if (productQuntity > 1) {
      setProductQuntity(productQuntity - 1);
    }
  };

  const validateSum = () => {
    if (productQuntity >= 0) {
      setProductQuntity(productQuntity - 1 + 2);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="product-view-container">
      <div className="product-img-wrapper">
        <img data-cy="product-image" alt="product-img" src={productvalues.image} />
      </div>
      <div className="product-info-container">
        <h2 data-cy="product-info-title" className="product-info-title">{productvalues.title}</h2>
        <p data-cy="product-info-price" className="product-info-price">
          {`$${productvalues.price} USD`}
        </p>
        <form onSubmit={handleSubmit}>
          <p>Quantity</p>
          <QuantityBtn
            validateNewQuantity={validateNewQuantity}
            validateSubtraction={validateSubtraction}
            validateSum={validateSum}
            productQuntity={productQuntity}
            setProductQuntity={setProductQuntity}
          />
          <div className="product-view-add-and-buy-btns">
            <Button id="add-to-cart-btn">Add to cart</Button>
            <Button appearance="primary" id="buy-product-btn">Buy it now</Button>
          </div>
        </form>
        <p data-cy="product-info-description" className="product-info-description">{productvalues.description}</p>
        <CollapseBtns productDetails={productvalues} />
      </div>
    </div>
  );
};

ProductDetails.propTypes = {
  productvalues: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    category: PropTypes.string,
    image: PropTypes.string,
    rating: PropTypes.objectOf(PropTypes.number).isRequired,
  }).isRequired,
};

export default ProductDetails;
