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
                data-cy={`${category}`}
                is={Link}
                to={`/category/${category}`}
                appearance="minimal"
              >
                {category}
              </Button>
            ))
          }

      {
            categoryValues.length !== 0 && (
              <Button
                data-cy="see-all"
                is={Link}
                to="/products"
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
