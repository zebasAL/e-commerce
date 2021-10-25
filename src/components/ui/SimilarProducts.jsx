import React from 'react';
import { Link } from 'react-router-dom';
import { Spinner } from 'evergreen-ui/';
import PropTypes from 'prop-types';

const SimilarProducts = ({
  productsList,
  selectedProduct,
  productsloaded,
}) => (
  <div className="similar-products-container">
    <div className="similar-products-header">
      <h2>
        Similar Products
      </h2>
    </div>
    {productsloaded === false ? <div style={{ display: 'table', margin: '10px auto' }}><Spinner /></div> : null}

    <div className="similar-products-wrapper">
      {productsList.filter((productsId) => productsId.id !== selectedProduct.id)
        .map((product) => (
          <div key={`${product.id}`} className="product-view-element">
            <div className="image-wrapper">
              <Link id={`product-view-${product.id}`} to={`/products/${product.id}`}>
                <img data-cy={`similar-product-image-${product.id}`} alt="Product" src={product.image} />
              </Link>
            </div>
            <div className="product-view-content similar-content">
              <p className="product-view-text">{product.title}</p>
              <p className="product-view-price">
                $
                {product.price}
              </p>
            </div>
          </div>
        ))}
    </div>
  </div>
);

SimilarProducts.propTypes = {
  productsloaded: PropTypes.bool.isRequired,
  selectedProduct: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
  productsList: PropTypes.arrayOf(PropTypes.shape({
    category: PropTypes.string.isRequired,
    id: PropTypes.number,
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
  })).isRequired,
};

export default SimilarProducts;
