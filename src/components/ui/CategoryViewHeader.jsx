import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Text, Combobox } from 'evergreen-ui/';

const CategoryViewHeader = ({
  productsList,
  category,
}) => {
  const [filterPriceValue, setFilterPriceValue] = useState('Cheaper');
  const [sortValue, setSortValue] = useState('Descending');

  return (
    <>
      <div>
        <Text
          data-cy="category-view-headline"
          display="flex"
          marginTop={40}
          fontWeight={400}
          textTransform="capitalize"
          fontSize={40}
          lineHeight="55px"
          color="black"
          fontFamily="poppins"
        >
          {category === undefined ? 'See all' : category}
        </Text>
      </div>
      <div className="category-view-container">
        <div className="category-filter">
          Filter:
          <div className="combox-container">
            <Combobox
              data-cy="category-select-filter"
              openOnFocus
              Value={filterPriceValue}
              items={['Cheaper', 'Expensive']}
              onChange={(selected) => setFilterPriceValue(selected)}
              placeholder="Cheaper"
              width={135}
            />
          </div>
        </div>
        <div div className="category-sort">
          <p>Sort by:</p>
          <div className="combox-container">
            <Combobox
              data-cy="category-select-sort"
              openOnFocus
              value={sortValue}
              items={['Descending', 'Ascending']}
              onChange={(selected) => setSortValue(selected)}
              placeholder="Descending"
              width={135}
            />
          </div>
          <p>{`${productsList.length} products`}</p>
        </div>
      </div>
    </>

  );
};

CategoryViewHeader.propTypes = {
  category: PropTypes.string.isRequired,
  productsList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
  })).isRequired,
};

export default CategoryViewHeader;
