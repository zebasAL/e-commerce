/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { toaster, Spinner } from 'evergreen-ui/';
import AllProductsView from '../components/ui/AllProductsView';
import CategoryViewHeader from '../components/ui/CategoryViewHeader';

const CategoryView = () => {
  const [productsList, setProductsList] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const { category } = useParams(); // { category: 'jewelry'}
  const [filterPrice, setFilterPrice] = useState('None');
  const [sortDate, setSortDate] = useState('Newer');

  /**
   * It returns query params based on selected sort field
   * @returns {string}
   */
  const productDate = () => {
    if (sortDate === 'Newer') {
      return '?sort=desc';
    }
    return '?sort=asc';
  };

  const getProducts = () => {
    setLoaded(false);
    axios.get(`https://fakestoreapi.com/products/category/${category}${productDate()}`)
      .then((response) => {
        setProductsList(response.data);
        setLoaded(true);
      })
      .catch(() => {
        toaster.notify('Something went wrong...');
      });
  };

  const getAllProducts = () => {
    setLoaded(false);
    axios.get(`https://fakestoreapi.com/products/${productDate()}`)
      .then((response) => {
        setProductsList(response.data);
        setLoaded(true);
      })
      .catch(() => {
        toaster.notify('Something went wrong...');
      });
  };

  const sortedPriceProductList = () => {
    let products = [...productsList];
    if (filterPrice === 'Cheaper') {
      products = products.sort((a, b) => (a?.price > b?.price ? 1 : -1));
    } if (filterPrice === 'Expensive') {
      products = products.sort((a, b) => (b?.price > a?.price ? 1 : -1));
    }
    return products;
  };

  useEffect(() => {
    // component is mounted if dependencies are empty
    if (category) {
      getProducts();
    } else {
      getAllProducts();
    }
  }, [category, sortDate]);

  if (loaded === false) return <div style={{ display: 'table', margin: '10px auto' }}><Spinner /></div>;

  return (
    <>
      <CategoryViewHeader
        category={category}
        productsList={productsList}
        setFilterPrice={setFilterPrice}
        filterPrice={filterPrice}
        sortDate={sortDate}
        setSortDate={setSortDate}
      />
      <AllProductsView productsList={sortedPriceProductList()} />
    </>
  );
};

export default CategoryView;
