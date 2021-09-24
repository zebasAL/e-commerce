import React from 'react';
import PropTypes from 'prop-types';
import QuantityBtn from './QunatityBtn';

const ProductProps = ({
  productvalues,
}) => (
  <div>
    {productvalues.map((product) => (
      <div>
        {productvalues.image}
        <h2>{product.title}</h2>
        <p>{product.price}</p>
        <form>
          <QuantityBtn />
        </form>
        <p>{product.description}</p>
      </div>
    ))}
  </div>
);

ProductProps.propTypes = {
  productvalues: PropTypes.string.isRequired,
};

export default ProductProps;

// ProductProps.propTypes = {
//   productvalues: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.string,
//     title: PropTypes.func,
//     price: PropTypes.number,
//     description: PropTypes.string,
// category: PropTypes.string.isRequired,
// image: PropTypes.string.isRequired,
// rating: PropTypes.objectOf(PropTypes.shape({
//   rate: PropTypes.number,
//   count: PropTypes.number,
// })),
// })).isRequired,
// };
