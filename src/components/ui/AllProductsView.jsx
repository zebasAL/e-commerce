import React from 'react';
import { Link } from 'react-router-dom';
import { Spinner } from 'evergreen-ui/';
import PropTypes from 'prop-types';

const AllProductsView = ({
  productsList,
  loaded,
}) => {
  if (loaded === false) return <div style={{ display: 'table', margin: '10px auto' }}><Spinner /></div>;

  return (

    <div className="product-view-container">
      {productsList.map((product) => (
        <div key={`${product.id}`} className="product-view-element">
          <div className="image-wrapper">
            <Link id={`product-view-${product.id}`} to={`/products/${product.id}`}>
              <img data-cy={`product-image-${product.id}`} alt="Product" src={product.image} />
            </Link>
          </div>
          <div className="product-view-content">
            <p className="product-view-text">{product.title}</p>
            <p data-cy="product-price">
              $
              {product.price}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

AllProductsView.propTypes = {
  productsList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
  })).isRequired,
  loaded: PropTypes.bool,
};

AllProductsView.defaultProps = {
  loaded: true,
};

export default AllProductsView;
