import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { toaster, Spinner } from 'evergreen-ui/';
import ProductDetails from '../components/ui/ProductDetails';

const ProductView = () => {
  const [product, setProduct] = useState({}); // [{}, () => {}]
  const [loaded, setLoaded] = useState(false);
  const { id } = useParams(); // { category: 'jewelry', id: 1}

  const getProduct = () => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setLoaded(true);
      })
      .catch(() => {
        toaster.notify('Something went wrong...');
      });
  };

  useEffect(() => {
    // component is mounted if dependencies are empty
    getProduct();
  }, []);

  if (loaded === false) return <div style={{ display: 'table', margin: '10px auto' }}><Spinner /></div>;

  return (
    <div>
      <ProductDetails productValues={product} />
    </div>
  );
};

export default ProductView;
