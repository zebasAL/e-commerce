import React, {
  useState,
} from 'react';
import { SearchInput, Button } from 'evergreen-ui';
import {
  Link,
} from 'react-router-dom';
import PropTypes from 'prop-types';

const AutoCompleteField = ({
  products,
  setDisplay,
  display,
  wrapperRef,
}) => {
  const [value, setValue] = useState('');

  const getFilteredProducts = () => products.filter((product) => product.title.toLowerCase()
    .includes(value.toLowerCase()));

  return (
    <div ref={wrapperRef} className="autocomplete-container">
      <SearchInput
        id="autocomplete-filed"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        width="100%"
        placeholder="Type To Search"
        onClick={() => setDisplay(true)}
      />
      {display && (
        <div className="autocomplete-wrapper">
          <ul className="autocomplete-wrapper">
            {value.length > 0 && getFilteredProducts().slice(0, 7).map((productList) => (
              <li
                key={productList.id}
              >
                <Button
                  className="product-options"
                  is={Link}
                  to={`/products/${productList.id}`}
                  borderRadius={0}
                  border="none"
                  onClick={() => setValue('')}
                >
                  {productList.title}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

AutoCompleteField.propTypes = {
  wrapperRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
  setDisplay: PropTypes.func.isRequired,
  display: PropTypes.bool.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string,
    category: PropTypes.string,
    image: PropTypes.string.isRequired,
  })),
};

AutoCompleteField.defaultProps = {
  products: [],
};

export default AutoCompleteField;
