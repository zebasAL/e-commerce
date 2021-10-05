import React from 'react';
import PropTypes from 'prop-types';
import { Text, Combobox } from 'evergreen-ui/';

const CategoryViewHeader = ({
  productsList,
  category,
  filterPrice,
  setFilterPrice,
  sortDate,
  setSortDate,
}) => (
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
        {!category ? 'See all' : category}
      </Text>
    </div>
    <div className="category-view-container">
      <div className="category-filter">
        Filter Price:
        <div className="combox-container">
          <Combobox
            data-cy="category-select-filter"
            openOnFocus
            selectedItem={filterPrice}
            items={['Cheaper', 'Expensive', 'None']}
            onChange={(selected) => setFilterPrice(selected)}
            placeholder="Select"
            width={135}
          />
        </div>
      </div>
      <div className="category-sort">
        <p>Sort by Date:</p>
        <div className="combox-container">
          <Combobox
            data-cy="category-select-sort"
            openOnFocus
            selectedItem={sortDate}
            items={['Newer', 'Older']}
            onChange={(value) => setSortDate(value === 'Newer' ? 'Newer' : 'Older')}
            placeholder="Select"
            width={135}
          />
        </div>
        <p>{`${productsList.length} products`}</p>
      </div>
    </div>
  </>

);

CategoryViewHeader.propTypes = {
  category: PropTypes.string,
  productsList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
  })).isRequired,
  setSortDate: PropTypes.func.isRequired,
  sortDate: PropTypes.string.isRequired,
  filterPrice: PropTypes.string.isRequired,
  setFilterPrice: PropTypes.func.isRequired,
};

CategoryViewHeader.defaultProps = {
  category: '',
};

export default CategoryViewHeader;
