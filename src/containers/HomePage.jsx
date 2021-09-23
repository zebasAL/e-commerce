import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toaster } from 'evergreen-ui/';
import HomePageHeader from '../components/ui/HomepageHeader';

const HomePage = () => {
  const [productList, setProductList] = useState([]);

  const getProducts = () => {
    axios.get('https://fakestoreapi.com/products')
      .then((res) => {
        setProductList(res.data);
      })
      .catch(() => {
        toaster.notify('Something went wrong...');
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <HomePageHeader products={productList} />
    </>
  );
};
export default HomePage;
