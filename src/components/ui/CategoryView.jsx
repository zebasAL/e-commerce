import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { toaster, Spinner } from 'evergreen-ui/';
import AllProductsView from './AllProductsView';
import CategoryViewHeader from './CategoryViewHeader';

const CategoryView = () => {
  const [productsList, setProductsList] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const { category } = useParams(); // { category: 'jewelry'}

  const getAllProducts = () => {
    setLoaded(false);
    axios.get('https://fakestoreapi.com/products/')
      .then((response) => {
        setProductsList(response.data);
        setLoaded(true);
      })
      .catch(() => {
        toaster.notify('Something went wrong...');
      });
  };

  useEffect(() => {
    // component is mounted if dependencies are empty
    const getProducts = () => {
      setLoaded(false);
      axios.get(`https://fakestoreapi.com/products/category/${category}`)
        .then((response) => {
          setProductsList(response.data);
          setLoaded(true);
        })
        .catch(() => {
          toaster.notify('Something went wrong...');
        });
    };

    if (category !== undefined) {
      getProducts();
    } else {
      getAllProducts();
    }
  }, [category]);

  if (loaded === false) return <div style={{ display: 'table', margin: '10px auto' }}><Spinner /></div>;

  return (
    <>
      <CategoryViewHeader category={category} productsList={productsList} />
      <AllProductsView productsList={productsList} />
    </>
  );
};

export default CategoryView;
