import React from 'react';
import PropTypes from 'prop-types';
import { Button, TextInput } from 'evergreen-ui';

const QuantityBtn = ({
  productQuantity,
  validateInputValue,
  setProductQuantity,
}) => (
  <div className="quantity-btn">
    <Button data-cy="substract-quantity-btn" onClick={() => (productQuantity > 1) && setProductQuantity(productQuantity - 1)} borderRadius="0" borderRight="none">-</Button>
    <TextInput
      id="quantity-btn"
      type="number"
      value={productQuantity}
      onChange={validateInputValue}
      borderRadius="1"
      borderLeft="none"
      borderRight="none"
      borderColor="#c1c4d6"
      width={50}
      display="flex"
      alignContent="center"
      paddingX={5}
    />
    <Button data-cy="sum-quantity-btn" onClick={() => (productQuantity >= 0) && setProductQuantity(productQuantity - 1 + 2)} borderRadius="0" borderLeft="none">+</Button>
  </div>
);

QuantityBtn.propTypes = {
  productQuantity: PropTypes.number.isRequired,
  validateInputValue: PropTypes.func.isRequired,
  setProductQuantity: PropTypes.func.isRequired,
};

export default QuantityBtn;
