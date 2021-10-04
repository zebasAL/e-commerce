import React from 'react';
import PropTypes from 'prop-types';
import { Button, TextInput } from 'evergreen-ui';

const QuantityBtn = ({
  productQuantity,
  setProductQuantity,
  inputId,
}) => (
  <div className="quantity-container">
    <Button data-cy="substract-quantity-btn" onClick={() => (productQuantity > 1) && setProductQuantity(productQuantity - 1)} borderRadius="0" borderRight="none">-</Button>
    <TextInput
      id={`quantity-btn${inputId}`}
      type="number"
      value={productQuantity}
      required
      onChange={(e) => setProductQuantity(parseInt(e.target.value, 10) || productQuantity)}
      borderRadius="1"
      borderLeft="none"
      borderRight="none"
      borderColor="#c1c4d6"
      width={50}
      min="0"
      display="flex"
      alignContent="center"
      paddingX={5}
    />
    <Button data-cy="sum-quantity-btn" onClick={() => (productQuantity >= 0) && setProductQuantity(productQuantity - 1 + 2)} borderRadius="0" borderLeft="none">+</Button>
  </div>
);
QuantityBtn.propTypes = {
  productQuantity: PropTypes.number.isRequired,
  setProductQuantity: PropTypes.func.isRequired,
  inputId: PropTypes.string,
};

QuantityBtn.defaultProps = {
  inputId: '',
};

export default QuantityBtn;
