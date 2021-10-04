/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import PropTypes from 'prop-types';
import { Paragraph, Text } from 'evergreen-ui';
import AllProductsView from './AllProductsView';

const HomePageHeader = ({ products, loaded }) => (
  <div>
    <div className="headline">
      <Text
        data-cy="homepage-headline"
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontWeight={400}
        textAlign="center"
        fontSize={40}
        lineHeight="55px"
        color="black"
        letterSpacing="1px"
        fontFamily="poppins"
      >
        Obsessive Attention. Intelligent Effort.
      </Text>
      <Paragraph
        data-cy="homepage-subheadline"
        display="flex"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        fontSize={15}
        fontWeight="500"
        letterSpacing="1px"
        fontFamily="poppins"
      >
        Functional items made of luxurious and honest materials to
        improve people&lsquo;s lives in small but mighty ways.
      </Paragraph>
    </div>
    <AllProductsView productsList={products} loaded={loaded} />
  </div>
);

HomePageHeader.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string,
    category: PropTypes.string,
    image: PropTypes.string.isRequired,
  })).isRequired,
  loaded: PropTypes.bool,
};

HomePageHeader.defaultProps = {
  loaded: false,
};

export default HomePageHeader;
