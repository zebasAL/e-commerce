import React, { useState } from 'react';
import { Button, TextInput } from 'evergreen-ui';

const QuantityBtn = () => {
  const [productQuntity, setProductQuntity] = useState(1);

  return (
    <div className="quantity-btn">
      <Button onClick={() => setProductQuntity(productQuntity - 1)} borderRadius="0" borderRight="none">-</Button>
      <TextInput
        type="number"
        value={productQuntity}
        onChange={(event) => setProductQuntity(event.target.value)}
        borderRadius="1"
        borderLeft="none"
        borderRight="none"
        borderColor="#c1c4d6"
        width={50}
        display="flex"
        alignContent="center"
        paddingX={5}
      />
      <Button onClick={() => setProductQuntity(productQuntity + 1)} borderRadius="0" borderLeft="none">+</Button>
    </div>
  );
};

export default QuantityBtn;
