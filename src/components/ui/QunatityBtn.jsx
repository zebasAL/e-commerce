import React from 'react';
import PropTypes from 'prop-types';
import { Button, TextInput } from 'evergreen-ui';

const QuantityBtn = ({
  productQuntity,
  validateSubtraction,
  validateSum,
  validateNewQuantity,
}) => (
  <div className="quantity-btn">
    <Button onClick={validateSubtraction} borderRadius="0" borderRight="none">-</Button>
    <TextInput
      id="quantity-btn"
      type="number"
      value={productQuntity}
      onChange={validateNewQuantity}
      borderRadius="1"
      borderLeft="none"
      borderRight="none"
      borderColor="#c1c4d6"
      width={50}
      display="flex"
      alignContent="center"
      paddingX={5}
    />
    <Button onClick={validateSum} borderRadius="0" borderLeft="none">+</Button>
  </div>
);

QuantityBtn.propTypes = {
  productQuntity: PropTypes.number.isRequired,
  validateSubtraction: PropTypes.func.isRequired,
  validateSum: PropTypes.func.isRequired,
  validateNewQuantity: PropTypes.func.isRequired,
};

export default QuantityBtn;
