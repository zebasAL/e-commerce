import React, { useEffect, useState } from 'react';
import { Button, toaster } from 'evergreen-ui';
import axios from 'axios';
import {
  Link,
} from 'react-router-dom';

const NavBarCategories = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = () => {
    axios.get('https://fakestoreapi.com/products/categories')
      .then((res) => {
        setCategories(res.data);
      })
      .catch(() => {
        toaster.danger('Something went wrong...');
      });
  };

  useEffect(() => {
    // component is mounted if dependencies are empty
    getCategories();
  }, []);

  return (
    <>
      <div className="categoriesNavBar">
        {
            categories.map((category) => (
              <Button
                key={category}
                is={Link}
                to={`/categories/${category}`}
                appearance="minimal"
              >
                {category}
              </Button>
            ))
          }

        {
            categories.length !== 0 && (
              <Button
                is={Link}
                to="/categories/"
                appearance="minimal"
              >
                see all
              </Button>
            )
          }
      </div>
    </>
  );
};

export default NavBarCategories;