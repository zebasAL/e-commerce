import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { toaster, Spinner } from 'evergreen-ui/';
import ProductDetails from '../components/ui/ProductDetails';
import SimilarProducts from '../components/ui/SimilarProducts';

const ProductView = () => {
  const [product, setProduct] = useState({}); // [{}, () => {}]
  const [productsList, setProductsList] = useState([]); // [{}, () => {}]
  const [loaded, setLoaded] = useState(false);
  const [productsloaded, setProductsloaded] = useState(false);
  const { id } = useParams(); // { category: 'jewelry', id: 1}

  /**
   * getCategoryProducts - retrieves category products
   * @param {string} productCategory
   * @returns {void}
   */
  const getCategoryProducts = (productCategory) => {
    axios.get(`https://fakestoreapi.com/products/category/${productCategory}`)
      .then((res) => {
        setProductsList(res.data);
        setProductsloaded(true);
      })
      .catch(() => {
        toaster.warning('Something went wrong');
      });
  };

  const getProduct = React.useCallback(() => {
    setLoaded(false);
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setLoaded(true);
        getCategoryProducts(response.data.category);
      })
      .catch(() => {
        toaster.warning('Something went wrong...');
      });
  }, [id]);

  useEffect(() => {
    // component is mounted if dependencies are empty
    if (id) {
      getProduct();
    }
  }, [getProduct, id]);

  if (loaded === false) return <div style={{ display: 'table', margin: '10px auto' }}><Spinner /></div>;

  return (
    <>
      <div className="product-details-container">
        <ProductDetails productValues={product} />
      </div>
      <div>
        <SimilarProducts
          selectedProduct={product}
          productsList={productsList}
          productsloaded={productsloaded}
        />
      </div>
    </>
  );
};

export default ProductView;
