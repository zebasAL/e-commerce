import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { toaster } from 'evergreen-ui/';
import ProductProps from '../components/ui/ProductProp';

const ProductsView = () => {
  const [product, setProduct] = useState();

  const { params } = useParams();
  console.log(params);

  const getProductid = () => {
    axios.get('https://fakestoreapi.com/products')
      .then((res) => {
        setProduct(res.data);
        console.log(res.data);
      })
      .catch(() => {
        toaster.notify('Something went wrong...');
      });
  };

  useEffect(() => {
    getProductid();
  });

  return (
    <div>
      {params}
      example
      <ProductProps productvalues={product} />
    </div>
  );
};

export default ProductsView;
