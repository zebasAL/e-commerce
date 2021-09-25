import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'evergreen-ui';
import {
  Link,
} from 'react-router-dom';

const NavBarCategoriesBtns = ({ categoryValues }) => (
  <>
    <div className="categoriesNavBar">
      {
            categoryValues.map((category) => (
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
            categoryValues.length !== 0 && (
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

NavBarCategoriesBtns.propTypes = {
  categoryValues: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default NavBarCategoriesBtns;
